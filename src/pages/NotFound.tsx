import { smoothScrollTo } from '../hooks/useSmoothScroll'

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#091520',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24,
        padding: '0 24px',
        textAlign: 'center',
      }}
    >
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(4rem, 12vw, 9rem)',
        color: 'rgba(201,169,110,0.12)',
        fontWeight: 300,
        lineHeight: 1,
      }}>
        404
      </div>
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
        color: '#EDE8E0',
        fontWeight: 400,
      }}>
        Page Not Found
      </h1>
      <p style={{ fontSize: '0.9rem', color: 'rgba(237,232,224,0.45)', maxWidth: 340, lineHeight: 1.7 }}>
        The page you are looking for does not exist. Please return to the homepage.
      </p>
      <a
        href="/"
        style={{
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#091520',
          padding: '13px 32px',
          background: '#C9A96E',
          transition: 'background 0.2s ease',
        }}
      >
        Return Home
      </a>
    </div>
  )
}
