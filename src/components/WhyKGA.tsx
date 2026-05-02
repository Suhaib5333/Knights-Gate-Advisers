import { motion } from 'framer-motion'
import { staggerContainer, fadeUpItem, slideFromLeft } from '../lib/animations'
import { TiltCard } from './motion'

const C = {
  gold: '#C9A96E',
  goldAccessible: '#8A6A35',
  goldLarge: '#9E7B45',
  navy: '#091520',
  text: '#0C1620',
  muted: '#5A6472',
  bg: '#EEEAE4',
  cardBg: 'rgba(12,22,32,0.04)',
  cardHover: 'rgba(12,22,32,0.08)',
}

const differentiators = [
  {
    title: 'Senior-Only Coverage',
    desc: 'Every mandate is handled personally by Khalil Alawadhi. No junior hand-offs, no delegation. Clients engage at the highest level from first contact to final close.',
  },
  {
    title: 'Exclusive GCC Access',
    desc: 'Three decades of cultivated relationships with sovereign wealth funds, family offices, and institutional allocators across all six Gulf states. These are relationships that cannot be replicated.',
  },
  {
    title: 'Deep Network Depth',
    desc: 'A 30-year network spanning Société Générale, Investcorp, BNP Paribas, and international institutions. Our introductions carry institutional weight.',
  },
  {
    title: 'Discretion as Standard',
    desc: 'Many of our clients require confidentiality as a condition of engagement. We operate with institutional discretion, protecting both the process and the parties at all stages.',
  },
  {
    title: 'Cross-Asset Expertise',
    desc: 'Deep expertise across Private Equity, Private Credit, Real Assets, Alternatives, and Public Equities, enabling holistic advice across an investor\'s full portfolio.',
  },
]

export default function WhyKGA() {
  return (
    <section
      id="why-kga"
      style={{
        background: C.bg,
        padding: 'clamp(80px, 10vw, 140px) 0 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: '0 clamp(24px, 5vw, 80px)',
      }}>

        {/* Section header */}
        <motion.div
          variants={slideFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ marginBottom: 'clamp(48px, 6vw, 72px)' }}
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
              Why Knights Gate
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px 80px', alignItems: 'end' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3.4rem)',
              color: C.navy,
              fontWeight: 500,
              lineHeight: 1.1,
            }}>
              What Sets Us Apart<br />
              <em style={{ color: C.goldLarge }}>from the Market</em>
            </h2>
            <p style={{
              fontSize: '0.95rem',
              color: C.muted,
              lineHeight: 1.8,
              maxWidth: 400,
            }}>
              Five reasons institutions and family offices choose Knights Gate over larger, more visible alternatives.
            </p>
          </div>
        </motion.div>

        {/* Bento grid: 2 wide cards top, 3 narrower cards bottom */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="why-kga-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: 3,
          }}
        >
          {differentiators.map((d, i) => (
            <motion.div
              key={i}
              variants={fadeUpItem}
              style={{
                gridColumn: i < 2 ? 'span 3' : 'span 2',
              }}
            >
              <TiltCard
                max={4}
                glare={true}
                glareColor="rgba(201,169,110,0.10)"
                className="card-lift card-trace"
                style={{
                  background: C.cardBg,
                  padding: 'clamp(28px, 3vw, 44px)',
                  borderTop: `2px solid ${C.gold}`,
                  height: '100%',
                }}
                onMouseEnter={() => {}}
              >
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{
                    width: 28,
                    height: 1,
                    background: C.gold,
                    opacity: 0.45,
                    marginBottom: 24,
                  }} />
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: i < 2
                      ? 'clamp(1.2rem, 2vw, 1.5rem)'
                      : 'clamp(1.1rem, 1.6vw, 1.3rem)',
                    color: C.navy,
                    fontWeight: 500,
                    marginBottom: 14,
                    letterSpacing: '0.01em',
                    lineHeight: 1.2,
                  }}>
                    {d.title}
                  </h3>
                  <p style={{
                    fontSize: '0.875rem',
                    color: C.muted,
                    lineHeight: 1.8,
                  }}>
                    {d.desc}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Gradient bridge to the dark Leadership section below */}
      <div
        aria-hidden="true"
        style={{
          height: 'clamp(60px, 8vw, 100px)',
          background: `linear-gradient(to bottom, transparent, #091520)`,
          marginTop: 'clamp(48px, 6vw, 80px)',
        }}
      />
    </section>
  )
}
