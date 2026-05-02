import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useSmoothScroll, smoothScrollTo } from './hooks/useSmoothScroll'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Disclaimer from './pages/Disclaimer'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      // The page transition (AnimatePresence mode="wait") plus DOM mount can take
      // 350ms+. Poll for the target element rather than guessing a timeout.
      let attempts = 0
      const maxAttempts = 30 // ≈1.5s
      let timer: number | undefined
      const tryScroll = () => {
        const el = document.getElementById(id)
        if (el) {
          smoothScrollTo(el)
          return
        }
        attempts += 1
        if (attempts < maxAttempts) {
          timer = window.setTimeout(tryScroll, 50)
        }
      }
      timer = window.setTimeout(tryScroll, 50)
      return () => { if (timer !== undefined) window.clearTimeout(timer) }
    }
    window.scrollTo(0, 0)
    const lenis = window.__lenis
    if (lenis) lenis.scrollTo(0, { immediate: true })
  }, [pathname, hash])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <>
      <ScrollManager />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

function AppContent() {
  useSmoothScroll()

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
  }, [])

  return (
    <>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
