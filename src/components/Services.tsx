import { motion } from 'framer-motion'
import { staggerContainer, fadeUpItem, slideFromLeft } from '../lib/animations'
import { Spotlight } from './motion'
import { smoothScrollTo } from '../hooks/useSmoothScroll'

const C = {
  gold: '#C9A96E',
  goldMuted: 'rgba(201,169,110,0.12)',
  navy: '#091520',
  navyMid: '#0C1D35',
  navyCard: '#0E1E35',
  text: '#EDE8E0',
  muted: 'rgba(237,232,224,0.5)',
}

const services = [
  {
    num: '01',
    title: 'Capital Raising & Placement',
    desc: 'Strategic structuring and targeted placement of capital across institutional and private investor mandates. We leverage deep relationships to match the right capital with the right opportunity.',
  },
  {
    num: '02',
    title: 'Fund Placement',
    desc: 'End-to-end placement advisory for Private Equity, Venture Capital, Private Debt, Real Assets, and Alternative investment strategies into the GCC institutional and HNWI market.',
  },
  {
    num: '03',
    title: 'Investor Relations Advisory',
    desc: 'Ongoing IR strategy and execution: LP communications, reporting frameworks, and relationship management, helping asset managers build lasting presence in the GCC.',
  },
  {
    num: '04',
    title: 'Asset Management Introductions',
    desc: 'Facilitating introductions between international asset managers and sovereign funds, family offices, and institutional allocators across all six Gulf states.',
  },
  {
    num: '05',
    title: 'Sovereign & Institutional Coverage',
    desc: 'Senior-level engagement with sovereign wealth funds, pension institutions, and public investment authorities, drawing on over three decades of trusted relationships across the region.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      style={{
        background: C.navy,
        padding: 'clamp(80px, 10vw, 140px) 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(201,169,110,0.08)',
      }}
    >
      {/* Subtle background pattern */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(14,30,53,0.6) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      {/* Cursor-follow gold spotlight */}
      <Spotlight size={720} color="rgba(201,169,110,0.05)" />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)', position: 'relative' }}>
        {/* Heading */}
        <motion.div
          variants={slideFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ marginBottom: 'clamp(48px, 6vw, 80px)', maxWidth: 540 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
            <span style={{ display: 'inline-block', width: 40, height: 1, background: C.gold, marginRight: 14 }} />
            <span style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: C.gold,
            }}>
              Our Services
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3.4rem)',
              color: C.text,
              fontWeight: 500,
              lineHeight: 1.1,
            }}
          >
            The Commercial Core<br />
            <em style={{ color: C.gold }}>of What We Do</em>
          </h2>
        </motion.div>

        {/* Services list */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          {services.map((s, i) => (
            <motion.button
              key={i}
              variants={fadeUpItem}
              type="button"
              onClick={() => {
                const el = document.getElementById('contact')
                if (el) smoothScrollTo(el)
              }}
              className="service-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '56px 1fr auto',
                gap: 'clamp(16px, 3vw, 40px)',
                alignItems: 'start',
                padding: 'clamp(28px, 3vw, 40px) clamp(16px, 2vw, 24px)',
                marginLeft: 'calc(clamp(16px, 2vw, 24px) * -1)',
                marginRight: 'calc(clamp(16px, 2vw, 24px) * -1)',
                borderBottom: '1px solid rgba(201,169,110,0.08)',
                cursor: 'pointer',
                textAlign: 'left',
                width: 'calc(100% + clamp(32px, 4vw, 48px))',
                background: 'transparent',
              }}
              whileHover={{ backgroundColor: 'rgba(201,169,110,0.04)' }}
              transition={{ duration: 0.3 }}
            >
              {/* Number */}
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                color: 'rgba(201,169,110,0.35)',
                fontWeight: 300,
                lineHeight: 1,
                paddingTop: 4,
                transition: 'color 0.3s ease',
              }}>
                {s.num}
              </div>

              {/* Content */}
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                  color: C.text,
                  fontWeight: 500,
                  marginBottom: 12,
                  letterSpacing: '0.01em',
                }}>
                  {s.title}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: C.muted,
                  lineHeight: 1.75,
                  maxWidth: 560,
                }}>
                  {s.desc}
                </p>
              </div>

              {/* Arrow indicator */}
              <motion.div
                aria-hidden="true"
                className="service-arrow"
                style={{
                  alignSelf: 'center',
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  border: `1px solid rgba(201,169,110,0.25)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: C.gold,
                  fontSize: 14,
                  transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.3s ease, background 0.3s ease',
                }}
              >
                →
              </motion.div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
