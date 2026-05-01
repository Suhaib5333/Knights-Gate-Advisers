import { useEffect, useRef, useState } from 'react'
import { motion, animate, useInView } from 'framer-motion'
import { fadeUpItem, slowSpring, staggerContainer } from '../lib/animations'
import { smoothScrollTo } from '../hooks/useSmoothScroll'
import khalilHeroImg from '../assets/Khalil Photos/PuooLfoo.jpg'

const C = {
  gold: '#C9A96E',
  goldLight: '#DBBF8A',
  navy: '#091520',
  text: '#EDE8E0',
  muted: 'rgba(237, 232, 224, 0.55)',
}

function CountUp({ target, duration = 1.8 }: { target: number; duration?: number }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, target, {
      duration,
      ease: 'easeOut',
      onUpdate: v => setDisplay(Math.round(v)),
    })
    return controls.stop
  }, [isInView, target, duration])

  return <span ref={ref}>{display}</span>
}

const stats = [
  { prefix: '', target: 30, suffix: '+', label: 'Years of Experience' },
  { prefix: '$', target: 3, suffix: 'B+', label: 'Capital Placed' },
  { prefix: '', target: 6, suffix: '', label: 'GCC Markets' },
  { prefix: '', target: 100, suffix: '+', label: 'Engagements' },
]

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const fade = Math.max(0, 1 - scrollY / (window.innerHeight * 0.6))

  const scrollToAbout = () => {
    const el = document.getElementById('about')
    if (el) smoothScrollTo(el)
  }

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        background: C.navy,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Abstract dark background — radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 60% at 60% 40%, rgba(18, 36, 64, 0.9) 0%, transparent 70%),
            radial-gradient(ellipse 40% 50% at 20% 80%, rgba(201, 169, 110, 0.04) 0%, transparent 60%),
            linear-gradient(160deg, #0C1D35 0%, #091520 50%, #050D18 100%)
          `,
          pointerEvents: 'none',
        }}
      />

      {/* Khalil portrait — right side, desktop only */}
      <div
        className="hero-portrait"
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '44%',
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        <img
          src={khalilHeroImg}
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 10%',
            display: 'block',
            filter: 'brightness(0.80) contrast(1.05)',
          }}
        />
        {/* Fade left edge into background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '55%',
          height: '100%',
          background: `linear-gradient(to right, #091520, transparent)`,
        }} />
        {/* Fade bottom */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '35%',
          background: `linear-gradient(to top, #091520, transparent)`,
        }} />
      </div>

      {/* Subtle grid pattern */}
      <svg
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.035,
          pointerEvents: 'none',
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C9A96E" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Diagonal gold accent line */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          right: '25%',
          width: 1,
          height: '100%',
          background: `linear-gradient(to bottom, transparent 0%, rgba(201,169,110,0.12) 30%, rgba(201,169,110,0.06) 70%, transparent 100%)`,
          pointerEvents: 'none',
        }}
      />

      {/* Main content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          maxWidth: 1280,
          margin: '0 auto',
          width: '100%',
          padding: '120px clamp(24px, 5vw, 80px) 80px clamp(32px, 5vw, 96px)',
          opacity: fade,
          transform: `translate3d(0, ${scrollY * 0.05}px, 0)`,
          willChange: 'transform, opacity',
        }}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: 680 }}
        >
          {/* Label */}
          <motion.div
            variants={fadeUpItem}
            style={{ display: 'flex', alignItems: 'center', marginBottom: 32 }}
          >
            <span style={{ display: 'inline-block', width: 40, height: 1, background: C.gold, marginRight: 14 }} />
            <span style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: C.gold,
              fontFamily: 'var(--font-sans)',
            }}>
              Capital · Partnerships · Performance
            </span>
          </motion.div>

          {/* Headline — per-line mask reveal */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)',
              lineHeight: 1.1,
              fontWeight: 500,
              marginBottom: 36,
            }}
          >
            {([
              { text: '30 Years of Trust.', color: C.text, delay: 0.15 },
              { text: 'One Point of Access', color: C.gold, italic: true, delay: 0.29 },
              { text: 'to GCC Capital.', color: C.text, delay: 0.43 },
            ] as Array<{ text: string; color: string; italic?: boolean; delay: number }>).map((line, i) => (
              <div key={i} style={{ overflow: 'hidden' }}>
                <motion.span
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: line.delay, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    display: 'block',
                    color: line.color,
                    fontStyle: line.italic ? 'italic' : 'normal',
                  }}
                >
                  {line.text}
                </motion.span>
              </div>
            ))}
          </h1>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUpItem}
            transition={{ ...slowSpring, delay: 0.35 }}
            style={{
              fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
              color: C.muted,
              lineHeight: 1.75,
              maxWidth: 520,
              marginBottom: 48,
              fontWeight: 400,
            }}
          >
            Independent capital advisory for sovereign institutions,
            family offices, and global asset managers across the Gulf.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUpItem}
            transition={{ ...slowSpring, delay: 0.44 }}
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
          >
            <button
              onClick={() => smoothScrollTo(document.getElementById('contact')!)}
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: C.navy,
                padding: '14px 32px',
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
            <button
              onClick={() => smoothScrollTo(document.getElementById('services')!)}
              style={{
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: C.text,
                padding: '14px 32px',
                borderRadius: 2,
                border: '1px solid rgba(237,232,224,0.2)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,169,110,0.4)'
                ;(e.currentTarget as HTMLElement).style.color = C.gold
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(237,232,224,0.2)'
                ;(e.currentTarget as HTMLElement).style.color = C.text
              }}
            >
              Our Services
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        style={{
          position: 'relative',
          zIndex: 10,
          borderTop: '1px solid rgba(201, 169, 110, 0.1)',
          opacity: fade,
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: '32px clamp(24px, 5vw, 80px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 0,
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: '0 24px',
                borderLeft: i > 0 ? '1px solid rgba(201,169,110,0.1)' : 'none',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                color: C.gold,
                fontWeight: 500,
                lineHeight: 1,
                marginBottom: 6,
              }}>
                {stat.prefix}<CountUp target={stat.target} />{stat.suffix}
              </div>
              <div style={{
                fontSize: 12,
                color: C.muted,
                letterSpacing: '0.05em',
                fontWeight: 400,
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: fade > 0.3 ? 0.4 : 0 }}
        transition={{ delay: 1.4 }}
        aria-label="Scroll to About"
        style={{
          position: 'absolute',
          bottom: 120,
          right: 'clamp(24px, 5vw, 80px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          zIndex: 10,
        }}
      >
        <span style={{
          fontSize: 9,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: C.muted,
          writingMode: 'vertical-rl',
          fontFamily: 'var(--font-sans)',
        }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 1,
            height: 40,
            background: `linear-gradient(to bottom, ${C.gold}, transparent)`,
          }}
        />
      </motion.button>
    </section>
  )
}
