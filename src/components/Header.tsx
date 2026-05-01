import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { smoothScrollTo } from '../hooks/useSmoothScroll'

const C = {
  navy: '#091520',
  gold: '#C9A96E',
  text: '#EDE8E0',
  muted: '#8A97AA',
}

const KGLogo = ({ size = 36 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M30 2L8 12V32C8 44 18 54 30 58C42 54 52 44 52 32V12L30 2Z"
      fill="none"
      stroke={C.gold}
      strokeWidth="1.5"
    />
    <path
      d="M18 22H22V30L28 22H33L26 31L33 40H28L22 32V40H18V22Z"
      fill={C.gold}
    />
    <path
      d="M35 22H42C44.5 22 46 23.5 46 26C46 27.8 45 29 43.5 29.5C45.2 30 46.5 31.2 46.5 33.5C46.5 37 44.5 40 41 40H35V22ZM39 28H41.5C42.5 28 43.2 27.3 43.2 26.2C43.2 25.1 42.5 24.5 41.5 24.5H39V28ZM39 37.5H41.5C43 37.5 43.8 36.5 43.8 35C43.8 33.5 43 32.5 41.5 32.5H39V37.5Z"
      fill={C.gold}
    />
  </svg>
)

const navLinks = [
  { label: 'Home', section: '' },
  { label: 'About', section: 'about' },
  { label: 'Services', section: 'services' },
  { label: 'Why KGA', section: 'why-kga' },
  { label: 'Leadership', section: 'leadership' },
  { label: 'Contact', section: 'contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const isNavigating = useRef(false)
  const navLockTimer = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    const sections = navLinks.map(l => l.section).filter(Boolean)
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 60)

      if (isNavigating.current) return

      if (y < 60) {
        setActiveSection('')
        return
      }

      const threshold = window.innerHeight * 0.35
      let current = sections[0]
      for (const id of sections) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= threshold) current = id
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = useCallback((section: string) => {
    setMobileOpen(false)
    setActiveSection(section)
    isNavigating.current = true
    clearTimeout(navLockTimer.current)
    navLockTimer.current = setTimeout(() => { isNavigating.current = false }, 1600)
    if (!section) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.getElementById(section)
    if (el) smoothScrollTo(el)
  }, [])

  const scrolledBg = scrolled
    ? 'rgba(9, 21, 32, 0.94)'
    : 'transparent'

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'background-color 0.4s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.4s cubic-bezier(0.22, 1, 0.36, 1), backdrop-filter 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
          background: scrolledBg,
          backdropFilter: scrolled ? 'blur(20px) saturate(1.4)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.4)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201, 169, 110, 0.08)' : '1px solid transparent',
        }}
      >
        <nav
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: scrolled ? '14px clamp(20px, 4vw, 48px)' : '20px clamp(20px, 4vw, 48px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            transition: 'none',
          }}
        >
          {/* Logo */}
          <button
            onClick={() => handleNavClick('')}
            style={{ display: 'flex', alignItems: 'center', gap: 12 }}
            aria-label="Knights Gate Advisers — Home"
          >
            <KGLogo size={scrolled ? 30 : 36} />
            <div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: scrolled ? 15 : 17,
                fontWeight: 600,
                color: C.text,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                lineHeight: 1.1,
                transition: 'none',
              }}>
                Knights Gate
              </div>
              <div style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: C.gold,
                lineHeight: 1,
              }}>
                Advisers
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="nav-desktop" style={{ alignItems: 'center', gap: 32 }}>
            {navLinks.map(link => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.section)}
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: activeSection === link.section ? C.gold : 'rgba(237, 232, 224, 0.55)',
                  transition: 'color 0.25s ease',
                  padding: '4px 0',
                  position: 'relative',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.gold }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color =
                    activeSection === link.section ? C.gold : 'rgba(237, 232, 224, 0.55)'
                }}
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => handleNavClick('contact')}
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: C.navy,
                padding: '10px 22px',
                borderRadius: 2,
                background: C.gold,
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = '#DBBF8A'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = C.gold
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              }}
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="nav-mobile"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ width: 40, height: 40, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5 }}
            aria-label="Menu"
          >
            <motion.span animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} style={{ display: 'block', width: 22, height: 1.5, background: C.gold, borderRadius: 2 }} />
            <motion.span animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} style={{ display: 'block', width: 22, height: 1.5, background: C.gold, borderRadius: 2 }} />
            <motion.span animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} style={{ display: 'block', width: 22, height: 1.5, background: C.gold, borderRadius: 2 }} />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 45,
              background: 'rgba(9, 21, 32, 0.97)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 36,
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => handleNavClick(link.section)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 30,
                  color: C.text,
                  fontWeight: 400,
                  letterSpacing: '0.04em',
                }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => handleNavClick('contact')}
              style={{
                marginTop: 8,
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: C.navy,
                padding: '14px 36px',
                borderRadius: 2,
                background: C.gold,
              }}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
