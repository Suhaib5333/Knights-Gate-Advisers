import { useEffect, useRef, useState } from 'react'
import { motion, animate, useInView, useScroll, useTransform, useSpring } from 'framer-motion'
import { fadeUpItem, slowSpring, staggerContainer } from '../lib/animations'
import { smoothScrollTo } from '../hooks/useSmoothScroll'
import { Magnetic } from './motion'
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
  const sectionRef = useRef<HTMLElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const fade = Math.max(0, 1 - scrollY / (window.innerHeight * 0.6))

  // Scroll-driven motion for ambient elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const sealRotate = useTransform(scrollYProgress, [0, 1], [0, 35])
  const sealScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const portraitY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 80]), {
    stiffness: 60,
    damping: 22,
  })
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 1.06])

  const scrollToAbout = () => {
    const el = document.getElementById('about')
    if (el) smoothScrollTo(el)
  }

  return (
    <section
      ref={sectionRef}
      aria-label="Knights Gate Advisers — Hero"
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

      {/* Khalil portrait — full-bleed right edge */}
      <motion.div
        className="hero-portrait"
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '44%',
          height: '100%',
          pointerEvents: 'none',
          y: portraitY,
          scale: portraitScale,
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
      </motion.div>

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

      {/* Ambient seal — concentric compass-like emblem in the left navy zone */}
      <motion.div
        className="hero-seal"
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: 'clamp(-360px, -14vw, -200px)',
          y: '-50%',
          width: 'min(68vh, 720px)',
          aspectRatio: '1 / 1',
          pointerEvents: 'none',
          zIndex: 1,
          rotate: sealRotate,
          scale: sealScale,
          WebkitMaskImage: 'radial-gradient(circle at center, black 25%, transparent 70%)',
          maskImage: 'radial-gradient(circle at center, black 25%, transparent 70%)',
        }}
      >
        <svg viewBox="0 0 600 600" width="100%" height="100%">
          <g fill="none" stroke="#C9A96E" strokeWidth="0.6">
            {/* concentric rings */}
            <circle cx="300" cy="300" r="290" opacity="0.35" />
            <circle cx="300" cy="300" r="240" opacity="0.4" />
            <circle cx="300" cy="300" r="180" opacity="0.45" />
            <circle cx="300" cy="300" r="120" opacity="0.5" />
            <circle cx="300" cy="300" r="60" opacity="0.55" />
            {/* cardinal axes — extend slightly beyond outer ring */}
            <line x1="300" y1="20" x2="300" y2="60" opacity="0.45" />
            <line x1="300" y1="540" x2="300" y2="580" opacity="0.45" />
            <line x1="20" y1="300" x2="60" y2="300" opacity="0.45" />
            <line x1="540" y1="300" x2="580" y2="300" opacity="0.45" />
            {/* diagonal axes — shorter, tick-like */}
            <line x1="105" y1="105" x2="135" y2="135" opacity="0.3" />
            <line x1="465" y1="465" x2="495" y2="495" opacity="0.3" />
            <line x1="105" y1="495" x2="135" y2="465" opacity="0.3" />
            <line x1="465" y1="135" x2="495" y2="105" opacity="0.3" />
          </g>
          {/* center dot */}
          <circle cx="300" cy="300" r="2.5" fill="#C9A96E" fillOpacity="0.7" />
        </svg>
      </motion.div>

      {/* Editorial corner mark — bottom-left of viewport, fills negative space */}
      <div
        className="hero-corner-mark"
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 'clamp(24px, 4vw, 56px)',
          bottom: 'clamp(180px, 22vh, 260px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 14,
          zIndex: 2,
          opacity: fade * 0.85,
        }}
      >
        <div style={{
          width: 1,
          height: 56,
          background: `linear-gradient(to bottom, transparent, ${C.gold} 50%, transparent)`,
        }} />
        <div style={{
          fontSize: 9,
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
          color: 'rgba(237, 232, 224, 0.45)',
          fontFamily: 'var(--font-sans)',
          lineHeight: 1.6,
        }}>
          Manama · Bahrain<br />
          <span style={{ color: C.gold, fontWeight: 600 }}>GCC Capital Advisory</span>
        </div>
      </div>

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

          {/* Headline — per-line mask reveal. Italic descenders (f, g, j) need extra
              line-height + bottom padding so they don't clip the overflow:hidden mask. */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)',
              lineHeight: 1.18,
              fontWeight: 500,
              marginBottom: 36,
            }}
          >
            {([
              { text: '30 Years of Trust.', color: C.text, delay: 0.15 },
              { text: 'One Point of Access', color: C.gold, italic: true, delay: 0.29 },
              { text: 'to GCC Capital.', color: C.text, delay: 0.43 },
            ] as Array<{ text: string; color: string; italic?: boolean; delay: number }>).map((line, i) => (
              <div key={i} style={{ overflow: 'hidden', paddingBottom: '0.12em' }}>
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
            <Magnetic
              onClick={() => smoothScrollTo(document.getElementById('contact')!)}
              ariaLabel="Go to contact form"
              className="btn-primary-shine"
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: C.navy,
                padding: '14px 32px',
                borderRadius: 2,
                background: C.gold,
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <span style={{ position: 'relative', zIndex: 1 }}>Get in Touch</span>
            </Magnetic>
            <Magnetic
              onClick={() => smoothScrollTo(document.getElementById('services')!)}
              ariaLabel="Go to services section"
              strength={0.22}
              className="btn-ghost-light"
              style={{
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: C.text,
                padding: '14px 32px',
                borderRadius: 2,
                border: '1px solid rgba(237,232,224,0.2)',
                cursor: 'pointer',
                background: 'transparent',
              }}
            >
              <span>Our Services</span>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile-only portrait — sibling of fade-bound text, so it stays visible
          longer on scroll. Hidden ≥901px via CSS. */}
      <motion.div
        className="hero-portrait-mobile-wrap"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      >
        <div className="hero-portrait-mobile">
          <div className="hero-portrait-mobile-frame">
            <img
              src={khalilHeroImg}
              alt=""
              className="hero-portrait-mobile-img"
            />
            <div className="hero-portrait-mobile-fade" />
            <span className="hpm-corner hpm-corner-tl" />
            <span className="hpm-corner hpm-corner-tr" />
            <span className="hpm-corner hpm-corner-bl" />
            <span className="hpm-corner hpm-corner-br" />
            <div className="hero-portrait-mobile-caption">
              <span className="hpm-rule" />
              <div>
                <div className="hpm-name">Khalil Sharif Alawadhi</div>
                <div className="hpm-title">Founder & Managing Director</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

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
          className="hero-stats-grid"
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: '32px clamp(20px, 5vw, 80px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 0,
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="hero-stat-cell"
              data-index={i}
              style={{
                padding: '0 clamp(10px, 2vw, 24px)',
                minWidth: 0,
              }}
            >
              <div className="hero-stat-num" style={{
                fontFamily: 'var(--font-display)',
                color: C.gold,
                fontWeight: 500,
                lineHeight: 1,
                marginBottom: 6,
              }}>
                {stat.prefix}<CountUp target={stat.target} />{stat.suffix}
              </div>
              <div className="hero-stat-label" style={{
                color: C.muted,
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
