import { smoothScrollTo } from '../hooks/useSmoothScroll'

const C = {
  gold: '#C9A96E',
  navy: '#091520',
  navyDark: '#050D18',
  text: '#EDE8E0',
  muted: 'rgba(237,232,224,0.4)',
  border: 'rgba(237,232,224,0.06)',
}

const navLinks = [
  { label: 'About', section: 'about' },
  { label: 'Services', section: 'services' },
  { label: 'Leadership', section: 'leadership' },
  { label: 'Why KGA', section: 'why-kga' },
  { label: 'Contact', section: 'contact' },
]

const KGLogo = () => (
  <svg width="32" height="32" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 2L8 12V32C8 44 18 54 30 58C42 54 52 44 52 32V12L30 2Z" fill="none" stroke={C.gold} strokeWidth="1.5" />
    <path d="M18 22H22V30L28 22H33L26 31L33 40H28L22 32V40H18V22Z" fill={C.gold} />
    <path d="M35 22H42C44.5 22 46 23.5 46 26C46 27.8 45 29 43.5 29.5C45.2 30 46.5 31.2 46.5 33.5C46.5 37 44.5 40 41 40H35V22ZM39 28H41.5C42.5 28 43.2 27.3 43.2 26.2C43.2 25.1 42.5 24.5 41.5 24.5H39V28ZM39 37.5H41.5C43 37.5 43.8 36.5 43.8 35C43.8 33.5 43 32.5 41.5 32.5H39V37.5Z" fill={C.gold} />
  </svg>
)

export default function Footer() {
  const handleNav = (section: string) => {
    const el = document.getElementById(section)
    if (el) smoothScrollTo(el)
  }

  return (
    <footer style={{ background: C.navyDark, borderTop: `1px solid ${C.border}` }}>
      {/* Main footer content */}
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 80px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'clamp(32px, 4vw, 64px)',
        }}
      >
        {/* Brand */}
        <div style={{ maxWidth: 280 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <KGLogo />
            <div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 15,
                fontWeight: 600,
                color: C.text,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                lineHeight: 1.1,
              }}>
                Knights Gate
              </div>
              <div style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: C.gold,
              }}>
                Advisers
              </div>
            </div>
          </div>
          <p style={{
            fontSize: '0.82rem',
            color: C.muted,
            lineHeight: 1.75,
            marginBottom: 20,
          }}>
            Bespoke capital advisory and placement services for sovereign institutions,
            family offices, and global asset managers.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ display: 'inline-block', width: 28, height: 1, background: C.gold, opacity: 0.4 }} />
            <span style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.muted }}>
              Capital · Partnerships · Performance
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <div style={{
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: C.gold,
            marginBottom: 20,
          }}>
            Navigation
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {navLinks.map(link => (
              <button
                key={link.label}
                onClick={() => handleNav(link.section)}
                style={{
                  textAlign: 'left',
                  fontSize: '0.85rem',
                  color: C.muted,
                  transition: 'color 0.2s ease',
                  letterSpacing: '0.02em',
                  padding: '6px 0',
                  minHeight: 32,
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.text }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = C.muted }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div style={{
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: C.gold,
            marginBottom: 20,
          }}>
            Contact
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a
              href="mailto:kalawadhi@kgadvisers.com"
              style={{ fontSize: '0.85rem', color: C.muted, transition: 'color 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.text }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = C.muted }}
            >
              kalawadhi@kgadvisers.com
            </a>
            <a
              href="https://www.linkedin.com/in/khalil-alawadhi-281b2b123/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.85rem', color: C.muted, transition: 'color 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.text }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = C.muted }}
            >
              LinkedIn — Khalil Alawadhi
            </a>
            <a
              href="https://www.kgadvisers.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.85rem', color: C.muted, transition: 'color 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.text }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = C.muted }}
            >
              www.kgadvisers.com
            </a>
          </div>
        </div>

        {/* Office */}
        <div>
          <div style={{
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: C.gold,
            marginBottom: 20,
          }}>
            Office
          </div>
          <address style={{
            fontSize: '0.82rem',
            color: C.muted,
            lineHeight: 1.75,
            fontStyle: 'normal',
          }}>
            Al Seef Area, Al Sehab Tower<br />
            Manama, Kingdom of Bahrain
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: `1px solid ${C.border}` }}>
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: '20px clamp(24px, 5vw, 80px)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '0.78rem', color: C.muted }}>
            © 2026 Knights Gate Advisers. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Disclaimer'].map(link => (
              <button
                key={link}
                style={{
                  fontSize: '0.78rem',
                  color: C.muted,
                  transition: 'color 0.2s',
                  letterSpacing: '0.03em',
                  padding: '6px 4px',
                  minHeight: 32,
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.text }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = C.muted }}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
        {/* Legal disclaimer */}
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 clamp(24px, 5vw, 80px) 24px',
        }}>
          <p style={{
            fontSize: '0.72rem',
            color: 'rgba(237,232,224,0.5)',
            lineHeight: 1.6,
          }}>
            Knights Gate Advisers is a capital advisory firm operating in the Kingdom of Bahrain.
            Nothing on this website constitutes an offer to sell or a solicitation of an offer to
            buy any securities or investment product. Past performance is not indicative of future
            results. This website is for informational purposes only and is directed at sophisticated
            and institutional investors.
          </p>
        </div>
      </div>
    </footer>
  )
}
