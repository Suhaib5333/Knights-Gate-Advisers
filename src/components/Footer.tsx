import { Link, useLocation, useNavigate } from 'react-router-dom'
import { smoothScrollTo } from '../hooks/useSmoothScroll'
import kgShield from '../assets/brand/logo2-opt.png'

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
  { label: 'FAQ', section: 'faq' },
  { label: 'Contact', section: 'contact' },
]

const KGLogo = () => (
  <img
    src={kgShield}
    alt="Knights Gate Advisers shield"
    width={32}
    height={32}
    style={{ width: 32, height: 32, objectFit: 'contain', display: 'block' }}
  />
)

export default function Footer() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleNav = (section: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${section}`)
      return
    }
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
          padding: 'clamp(32px, 4vw, 48px) clamp(24px, 5vw, 80px)',
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
              href="https://www.linkedin.com/in/khalil-sharif-al-awadhi-a56ab2b/"
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
            {[
              { label: 'Privacy Policy', to: '/privacy-policy' },
              { label: 'Disclaimer', to: '/disclaimer' },
            ].map(link => (
              <Link
                key={link.label}
                to={link.to}
                style={{
                  fontSize: '0.78rem',
                  color: C.muted,
                  transition: 'color 0.2s',
                  letterSpacing: '0.03em',
                  padding: '6px 4px',
                  minHeight: 32,
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.text }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = C.muted }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
