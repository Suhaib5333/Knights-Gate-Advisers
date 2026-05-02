import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { smoothScrollTo } from '../hooks/useSmoothScroll'
import { ScrollProgress } from './motion'
import kgShield from '../assets/brand/logo2.png'

const C = {
  navy: '#091520',
  gold: '#C9A96E',
  text: '#EDE8E0',
  muted: '#8A97AA',
}

const KGLogo = ({ size = 36 }: { size?: number }) => (
  <span
    aria-hidden="false"
    style={{
      position: 'relative',
      display: 'inline-flex',
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'width 0.3s ease, height 0.3s ease',
    }}
  >
    {/* Soft gold halo — lifts the logo off dark navy backgrounds */}
    <span
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: -size * 0.35,
        borderRadius: '50%',
        background:
          'radial-gradient(circle, rgba(201,169,110,0.28) 0%, rgba(201,169,110,0.10) 38%, transparent 70%)',
        filter: 'blur(6px)',
        pointerEvents: 'none',
      }}
    />
    <img
      src={kgShield}
      alt="Knights Gate Advisers shield"
      width={size}
      height={size}
      style={{
        position: 'relative',
        width: size,
        height: size,
        objectFit: 'contain',
        display: 'block',
        filter:
          'drop-shadow(0 0 10px rgba(201,169,110,0.35)) drop-shadow(0 1px 2px rgba(0,0,0,0.35))',
        transition: 'width 0.3s ease, height 0.3s ease',
      }}
    />
  </span>
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
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    if (!isHome) {
      // On non-home routes, no section to be active — header just shows nav
      setActiveSection('')
      return
    }
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
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  // Header background tint on non-home routes — always show the scrolled bg
  // since those pages don't have a dark hero behind the header.
  useEffect(() => {
    if (!isHome) setScrolled(true)
  }, [isHome])

  const handleNavClick = useCallback((section: string) => {
    setMobileOpen(false)

    // Cross-route navigation — if we're not on home, jump home first then scroll
    if (!isHome) {
      if (!section) {
        navigate('/')
      } else {
        navigate(`/#${section}`)
      }
      return
    }

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
  }, [isHome, navigate])

  const scrolledBg = scrolled
    ? 'rgba(9, 21, 32, 0.94)'
    : 'transparent'

  return (
    <>
      <ScrollProgress color={C.gold} height={2} />
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
            {navLinks.map(link => {
              const isActive = activeSection === link.section
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.section)}
                  className={`nav-link${isActive ? ' is-active' : ''}`}
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: isActive ? C.gold : 'rgba(237, 232, 224, 0.6)',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.gold }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color =
                      isActive ? C.gold : 'rgba(237, 232, 224, 0.6)'
                  }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </button>
              )
            })}

            <button
              onClick={() => handleNavClick('contact')}
              className="btn-primary-shine"
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: C.navy,
                padding: '10px 22px',
                borderRadius: 2,
                background: C.gold,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <span style={{ position: 'relative', zIndex: 1 }}>Get in Touch</span>
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
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.section
              return (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNavClick(link.section)}
                  aria-current={isActive ? 'page' : undefined}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 30,
                    color: isActive ? C.gold : C.text,
                    fontWeight: 400,
                    letterSpacing: '0.04em',
                    fontStyle: isActive ? 'italic' : 'normal',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 14,
                    position: 'relative',
                    padding: '4px 8px',
                  }}
                >
                  {/* Active gold dot — slides in from the left */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        layoutId="mobile-active-dot"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                        aria-hidden="true"
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: C.gold,
                          boxShadow: '0 0 12px rgba(201,169,110,0.6)',
                          flexShrink: 0,
                        }}
                      />
                    )}
                  </AnimatePresence>
                  {link.label}
                  {/* Active underline */}
                  {isActive && (
                    <motion.span
                      layoutId="mobile-active-underline"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        left: 28,
                        right: 8,
                        bottom: -4,
                        height: 1,
                        background: C.gold,
                        opacity: 0.6,
                      }}
                    />
                  )}
                </motion.button>
              )
            })}
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
