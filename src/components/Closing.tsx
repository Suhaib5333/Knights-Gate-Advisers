import { motion } from 'framer-motion'

const C = {
  gold: '#C9A96E',
  goldAccessible: '#8A6A35',
  goldLarge: '#9E7B45',
  navy: '#091520',
  bg: '#F6F3EF',
  text: '#0C1620',
  muted: '#5A6472',
}

export default function Closing() {
  return (
    <section
      style={{
        background: C.bg,
        padding: 'clamp(48px, 6vw, 72px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Horizontal gold rule top */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 1,
        background: `linear-gradient(to right, transparent, ${C.gold}, transparent)`,
        opacity: 0.4,
      }} />

      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 clamp(24px, 5vw, 80px)',
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Opening mark */}
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(4rem, 8vw, 7rem)',
            color: C.goldLarge,
            lineHeight: 0.6,
            marginBottom: 24,
            opacity: 0.5,
            userSelect: 'none',
          }} aria-hidden="true">
            "
          </div>

          <blockquote style={{ margin: 0 }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.6rem, 3vw, 2.6rem)',
              color: C.text,
              fontWeight: 400,
              lineHeight: 1.35,
              marginBottom: 40,
              fontStyle: 'italic',
            }}>
              Thirty years of relationships, built on trust<br />
              and delivered through a single point of responsibility.
            </p>

            <footer>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 16,
              }}>
                <span style={{ display: 'inline-block', width: 32, height: 1, background: C.gold, opacity: 0.5 }} />
                <cite style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: C.goldAccessible,
                  fontStyle: 'normal',
                }}>
                  Khalil Sharif Alawadhi, Founder &amp; Managing Director
                </cite>
                <span style={{ display: 'inline-block', width: 32, height: 1, background: C.gold, opacity: 0.5 }} />
              </div>
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
