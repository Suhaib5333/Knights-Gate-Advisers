import { motion } from 'framer-motion'
import { staggerContainer, fadeUpItem, slideFromLeft, slideFromRight, scrollReveal } from '../lib/animations'
import { smoothScrollTo } from '../hooks/useSmoothScroll'

const C = {
  gold: '#C9A96E',
  goldAccessible: '#8A6A35',
  goldLarge: '#9E7B45',
  navy: '#091520',
  text: '#0C1620',
  muted: '#5A6472',
  bg: '#F6F3EF',
  bgAlt: '#EEEAE4',
}

const markets = [
  { name: 'Kingdom of Bahrain', note: 'Headquarters' },
  { name: 'United Arab Emirates', note: 'Primary market' },
  { name: 'Kingdom of Saudi Arabia', note: 'Sovereign coverage' },
  { name: 'State of Qatar', note: 'Institutional relations' },
  { name: 'State of Kuwait', note: 'Family office network' },
  { name: 'Sultanate of Oman', note: 'Emerging opportunities' },
]

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: C.bg,
        padding: 'clamp(80px, 10vw, 140px) 0',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 clamp(24px, 5vw, 80px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(48px, 6vw, 96px)',
          alignItems: 'center',
        }}
      >
        {/* Left — text */}
        <motion.div
          variants={slideFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
            <span style={{ display: 'inline-block', width: 40, height: 1, background: C.gold, marginRight: 14 }} />
            <span style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: C.goldAccessible,
              fontFamily: 'var(--font-sans)',
            }}>
              About Us
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3.4rem)',
              color: C.navy,
              fontWeight: 500,
              lineHeight: 1.1,
              marginBottom: 28,
            }}
          >
            Trusted Advice.<br />
            <em style={{ color: C.goldLarge }}>Proven Perspective.</em>
          </h2>

          <p style={{
            fontSize: '1rem',
            color: C.muted,
            lineHeight: 1.8,
            marginBottom: 20,
          }}>
            Knights Gate Advisers is an independent capital advisory firm founded in 2016
            by Khalil Alawadhi. Built on three decades of institutional relationships across
            GCC sovereign funds, family offices, and global asset managers, we provide
            discreet, senior-led advisory with a singular focus on outcomes.
          </p>

          <p style={{
            fontSize: '1rem',
            color: C.muted,
            lineHeight: 1.8,
            marginBottom: 40,
          }}>
            We work closely with our clients to structure bespoke solutions, connect capital
            with opportunity, and support growth across multiple asset classes and geographies.
          </p>

          <button
            onClick={() => {
              const el = document.getElementById('leadership')
              if (el) smoothScrollTo(el)
            }}
            className="cta-arrow"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: C.navy,
              padding: '12px 0',
              borderBottom: `1.5px solid ${C.gold}`,
              cursor: 'pointer',
            }}
          >
            <span>Meet the Founder</span>
            <span className="cta-arrow-icon" style={{ fontSize: 16, display: 'inline-block' }}>→</span>
          </button>
        </motion.div>

        {/* Right — GCC coverage */}
        <motion.div
          variants={slideFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <div style={{
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: C.goldAccessible,
            fontFamily: 'var(--font-sans)',
            marginBottom: 20,
          }}>
            Coverage
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            {markets.map((m, i) => (
              <motion.div
                key={i}
                variants={fadeUpItem}
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr auto',
                  gap: 14,
                  alignItems: 'center',
                  padding: '14px 0',
                  borderBottom: `1px solid rgba(12,22,32,0.07)`,
                  cursor: 'default',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: C.gold,
                    opacity: 0.6,
                  }}
                />
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                  color: C.text,
                  fontWeight: 500,
                }}>
                  {m.name}
                </div>
                <div style={{
                  fontSize: 11,
                  color: C.muted,
                  letterSpacing: '0.06em',
                  textAlign: 'right',
                }}>
                  {m.note}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Values strip */}
      <motion.div
        variants={scrollReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        style={{
          maxWidth: 1280,
          margin: 'clamp(64px, 8vw, 100px) auto 0',
          padding: '0 clamp(24px, 5vw, 80px)',
        }}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 0,
            borderTop: '1px solid rgba(12,22,32,0.08)',
            borderBottom: '1px solid rgba(12,22,32,0.08)',
          }}
        >
          {['Discretion', 'Integrity', 'Long-Term Relationships', 'Fiduciary Excellence'].map((v, i) => (
            <motion.div
              key={i}
              variants={fadeUpItem}
              whileHover={{ backgroundColor: 'rgba(201,169,110,0.05)' }}
              className="value-cell"
              style={{
                padding: '28px 32px',
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                transition: 'background-color 0.3s ease',
              }}
            >
              <motion.div
                style={{ width: 6, height: 6, borderRadius: '50%', background: C.gold, flexShrink: 0 }}
                animate={{ scale: [1, 1.4, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.4,
                }}
              />
              <span style={{
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: C.text,
              }}>
                {v}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
