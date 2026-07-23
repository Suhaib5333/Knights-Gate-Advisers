/**
 * Build-time prerender / static-site generation for the Knights Gate Advisers SPA.
 *
 * Runs after `vite build`. Serves the freshly built /dist over a tiny local
 * static server (with SPA fallback), drives each route in headless Chromium,
 * scrolls to trigger scroll-reveal animations, then writes the fully-rendered
 * HTML back to disk as per-route index.html files.
 *
 * Result: crawlers and social/link-preview bots receive complete, indexable
 * HTML with correct per-page <head> (title, canonical, Open Graph, JSON-LD),
 * while the client hydrates on load (see src/main.tsx).
 *
 * Resilient by design: if Chromium can't launch (e.g. a CI box without the
 * browser), it logs a warning and exits 0 so the plain CSR build still ships.
 */
import { createServer } from 'node:http'
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises'
import { join, extname, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = join(__dirname, '..', 'dist')
const PORT = 4181
const ORIGIN = `http://127.0.0.1:${PORT}`

// Routes to prerender → output file path (relative to /dist)
const ROUTES = [
  { path: '/', out: 'index.html' },
  { path: '/privacy-policy', out: 'privacy-policy/index.html' },
  { path: '/disclaimer', out: 'disclaimer/index.html' },
]

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
}

async function fileExists(p) {
  try { return (await stat(p)).isFile() } catch { return false }
}

function startServer() {
  const server = createServer(async (req, res) => {
    try {
      const urlPath = decodeURIComponent((req.url || '/').split('?')[0])
      let filePath = join(DIST, urlPath)
      if (urlPath.endsWith('/')) filePath = join(filePath, 'index.html')

      // Serve a real static asset when it exists…
      if (await fileExists(filePath)) {
        const body = await readFile(filePath)
        res.writeHead(200, { 'Content-Type': MIME[extname(filePath)] || 'application/octet-stream' })
        res.end(body)
        return
      }
      // …otherwise SPA fallback to the built index.html (client-side routing).
      const body = await readFile(join(DIST, 'index.html'))
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
      res.end(body)
    } catch (e) {
      res.writeHead(500)
      res.end(String(e))
    }
  })
  return new Promise((resolve) => server.listen(PORT, '127.0.0.1', () => resolve(server)))
}

async function main() {
  if (!(await fileExists(join(DIST, 'index.html')))) {
    console.warn('[prerender] dist/index.html not found — run `vite build` first. Skipping.')
    return
  }

  let chromium
  try {
    ({ chromium } = await import('playwright'))
  } catch {
    console.warn('[prerender] playwright not installed — shipping CSR build. `npm i -D playwright` to enable SSG.')
    return
  }

  const server = await startServer()

  let browser
  try {
    browser = await chromium.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })
  } catch (e) {
    console.warn('[prerender] could not launch Chromium — shipping CSR build.', e?.message || e)
    server.close()
    return
  }

  const page = await browser.newPage({ viewport: { width: 1366, height: 900 } })

  for (const route of ROUTES) {
    try {
      await page.goto(ORIGIN + route.path, { waitUntil: 'domcontentloaded', timeout: 30000 })
      // Wait for the app to mount real content into #root.
      await page.waitForFunction(
        () => {
          const r = document.getElementById('root')
          return r && r.children.length > 0 && document.querySelector('#main, main')
        },
        { timeout: 30000 },
      )
      // Trigger every whileInView scroll-reveal, then return to the top so the
      // captured hero is in its initial (fully visible) state.
      await page.evaluate(async () => {
        const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
        const h = document.body.scrollHeight
        for (let y = 0; y <= h; y += Math.round(window.innerHeight * 0.6)) {
          window.scrollTo(0, y)
          await sleep(120)
        }
        window.scrollTo(0, 0)
        await sleep(400)
      })
      await page.waitForTimeout(600)

      // De-duplicate the <head>: the base index.html carries homepage-default
      // title/description/canonical/og/twitter tags for raw-HTML crawlers, and
      // react-helmet injects the per-page versions (marked data-rh). Where a
      // Helmet-managed twin exists, drop the static default so each prerendered
      // file has exactly one correct tag.
      await page.evaluate(() => {
        const keyOf = (el) => {
          const t = el.tagName.toLowerCase()
          if (t === 'title') return 'title'
          if (t === 'link' && el.getAttribute('rel') === 'canonical') return 'canonical'
          if (t === 'meta' && el.hasAttribute('name')) return 'name:' + el.getAttribute('name')
          if (t === 'meta' && el.hasAttribute('property')) return 'prop:' + el.getAttribute('property')
          return null
        }
        const managed = new Set()
        document.head.querySelectorAll('[data-rh]').forEach((el) => {
          const k = keyOf(el)
          if (k) managed.add(k)
        })
        document.head
          .querySelectorAll('title, link[rel="canonical"], meta[name], meta[property]')
          .forEach((el) => {
            if (el.hasAttribute('data-rh')) return
            const k = keyOf(el)
            if (k && managed.has(k)) el.remove()
          })
      })

      let html = await page.content()
      if (!html.startsWith('<!DOCTYPE') && !html.startsWith('<!doctype')) {
        html = '<!doctype html>\n' + html
      }

      const outPath = join(DIST, route.out)
      await mkdir(dirname(outPath), { recursive: true })
      await writeFile(outPath, html, 'utf-8')
      const kb = (Buffer.byteLength(html) / 1024).toFixed(1)
      console.log(`[prerender] ✓ ${route.path.padEnd(18)} → dist/${route.out}  (${kb} kB)`)
    } catch (e) {
      console.warn(`[prerender] ✗ ${route.path} failed:`, e?.message || e)
    }
  }

  await browser.close()
  server.close()
  console.log('[prerender] done.')
}

main().catch((e) => {
  console.warn('[prerender] unexpected error — CSR build still valid:', e?.message || e)
  process.exit(0)
})
