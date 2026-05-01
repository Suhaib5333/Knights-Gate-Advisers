import { motion } from 'framer-motion'
import { slideFromLeft, slideFromRight, staggerContainer, fadeUpItem } from '../lib/animations'
import khalilPortrait from '../assets/Khalil Photos/K3CPnLIY.jpg'

const C = {
  gold: '#C9A96E',
  navy: '#091520',
  navyMid: '#0C1D35',
  text: '#EDE8E0',
  muted: 'rgba(237,232,224,0.55)',
}

const roles = [
  { firm: 'Société Générale Asset Management', role: 'Chief Executive Officer' },
  { firm: 'Investcorp', role: 'Principal / Partner' },
  { firm: 'BNP Paribas', role: 'Head of Asset Management, Middle East' },
  { firm: 'PineBridge Investments', role: 'Vice President' },
  { firm: 'IBDAR Bank', role: 'Executive Director' },
]

const affiliations = ['TCW', 'Gartmore Indosuez', 'Blackstone', 'BNP Paribas', 'Arcis', 'Eurosuez']

export default function Leadership() {
  return (
    <section
      id="leadership"
      style={{
        background: C.navy,
        padding: 'clamp(80px, 10vw, 140px) 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(201,169,110,0.08)',
      }}
    >
      {/* Subtle glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '40%',
          height: '100%',
          background: 'radial-gradient(ellipse 80% 60% at 0% 50%, rgba(201,169,110,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 clamp(24px, 5vw, 80px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
          gap: 'clamp(48px, 6vw, 96px)',
          alignItems: 'start',
          position: 'relative',
        }}
      >
        {/* Left — Portrait */}
        <motion.div
          variants={slideFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Section label — above the photo */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 28 }}>
            <span style={{ display: 'inline-block', width: 40, height: 1, background: C.gold, marginRight: 14 }} />
            <span style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: C.goldAccessible,
              fontFamily: 'var(--font-sans)',
            }}>
              Leadership
            </span>
          </div>

          {/* Portrait frame */}
          <div style={{
            position: 'relative',
            aspectRatio: '3/4',
            overflow: 'hidden',
            maxWidth: 440,
          }}>
            <img
              src={khalilPortrait}
              alt="Khalil Sharif Alawadhi — Founder & Managing Director, Knights Gate Advisers"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
                filter: 'brightness(0.95) contrast(1.02)',
              }}
            />
            {/* Subtle bottom gradient */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '25%',
              background: 'linear-gradient(to top, rgba(246,243,239,0.4), transparent)',
              pointerEvents: 'none',
            }} />
            {/* Gold corner accents */}
            <div style={{ position: 'absolute', top: 16, left: 16, width: 28, height: 28, borderTop: `1.5px solid ${C.gold}`, borderLeft: `1.5px solid ${C.gold}` }} />
            <div style={{ position: 'absolute', top: 16, right: 16, width: 28, height: 28, borderTop: `1.5px solid ${C.gold}`, borderRight: `1.5px solid ${C.gold}` }} />
            <div style={{ position: 'absolute', bottom: 16, left: 16, width: 28, height: 28, borderBottom: `1.5px solid ${C.gold}`, borderLeft: `1.5px solid ${C.gold}` }} />
            <div style={{ position: 'absolute', bottom: 16, right: 16, width: 28, height: 28, borderBottom: `1.5px solid ${C.gold}`, borderRight: `1.5px solid ${C.gold}` }} />
          </div>

          {/* Name block below photo */}
          <div style={{ marginTop: 24 }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 2.8vw, 2rem)',
              color: C.text,
              fontWeight: 500,
              lineHeight: 1.1,
              marginBottom: 6,
            }}>
              Khalil Sharif Alawadhi
            </div>
            <div style={{
              fontSize: 12,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: C.gold,
              marginBottom: 20,
            }}>
              Founder & Managing Director
            </div>
            {/* Institutional affiliations */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {affiliations.map((a, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    color: C.muted,
                    padding: '4px 10px',
                    border: '1px solid rgba(201,169,110,0.15)',
                    borderRadius: 1,
                  }}
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right — Bio & prior roles */}
        <motion.div
          variants={slideFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{ paddingTop: 0 }}
        >
          <p style={{
            fontSize: '1.05rem',
            color: C.muted,
            lineHeight: 1.85,
            marginBottom: 24,
          }}>
            Khalil Sharif Alawadhi is an accomplished financial executive with over 30 years
            of experience in global investment management, private equity, Real Assets, and
            investor relations. He has held executive leadership roles at prominent institutions,
            including Société Générale Asset Management, Investcorp, and BNP Paribas, where
            he led strategic initiatives in capital raising, client engagement, and portfolio
            development.
          </p>

          <p style={{
            fontSize: '1.05rem',
            color: C.muted,
            lineHeight: 1.85,
            marginBottom: 24,
          }}>
            He currently serves as Founder & Managing Director of Knights Gate Advisers. Since
            the firm's inception, he has played a leading role in its capital placement activities,
            successfully placing over US$3 billion in equities across a diverse range of asset classes.
          </p>

          <p style={{
            fontSize: '1.05rem',
            color: C.muted,
            lineHeight: 1.85,
            marginBottom: 48,
          }}>
            Mr. Alawadhi brings deep expertise in institutional relationships, alternative
            investments, and strategic growth, positioning him as a trusted advisor and board
            contributor across the financial services sector.
          </p>

          {/* Prior roles */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
              <span style={{ display: 'inline-block', width: 28, height: 1, background: C.gold, marginRight: 12 }} />
              <span style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: C.gold,
              }}>
                Prior Roles
              </span>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              {roles.map((r, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpItem}
                  style={{
                    padding: '14px 0',
                    borderBottom: '1px solid rgba(201,169,110,0.08)',
                  }}
                >
                  <div style={{
                    fontSize: '0.9rem',
                    color: C.text,
                    fontWeight: 500,
                    marginBottom: 2,
                  }}>
                    {r.firm}
                  </div>
                  <div style={{
                    fontSize: '0.8rem',
                    color: C.gold,
                    letterSpacing: '0.03em',
                  }}>
                    {r.role}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
