import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, fadeUpItem, slideFromLeft } from '../lib/animations'

const C = {
  gold: '#C9A96E',
  goldAccessible: '#8A6A35',
  goldLarge: '#9E7B45',
  navy: '#091520',
  text: '#0C1620',
  muted: '#5A6472',
  bg: '#EEEAE4',
  border: 'rgba(12,22,32,0.1)',
}

/**
 * Plain-text answers double as the source for the FAQPage JSON-LD emitted in
 * Home.tsx — keep the two in sync. Written to capture the full range of ways
 * the firm is searched for, including both "Advisers" and "Advisors" spellings.
 */
export const faqs: Array<{ q: string; a: string }> = [
  {
    q: 'What is Knights Gate Advisers?',
    a: 'Knights Gate Advisers (also written Knights Gate Advisors, KG Advisers, KG Advisors, or KGA) is an independent capital advisory firm headquartered in Manama, Kingdom of Bahrain. Founded in 2016 by Khalil Alawadhi and built on over 30 years of institutional relationships, the firm provides discreet, senior-led capital advisory to sovereign institutions, family offices, and global asset managers across the Gulf Cooperation Council (GCC).',
  },
  {
    q: 'Is it spelled "Knights Gate Advisers" or "Knights Gate Advisors"?',
    a: 'The firm\'s official name uses the British spelling, "Advisers." You may also see it written as "Knights Gate Advisors," "KG Advisers," "KG Advisors," or the abbreviation "KGA" — all refer to the same firm at kgadvisers.com.',
  },
  {
    q: 'What services does Knights Gate Advisers provide?',
    a: 'KG Advisers offers capital raising and placement, fund placement for private equity, venture capital, private debt, real assets and alternatives, investor relations advisory, asset management introductions, and senior-level sovereign and institutional coverage across the GCC.',
  },
  {
    q: 'Which markets and regions does KG Advisers cover?',
    a: 'Knights Gate Advisers covers all six Gulf Cooperation Council markets: Bahrain (headquarters), the United Arab Emirates, Saudi Arabia, Qatar, Kuwait, and Oman — engaging sovereign wealth funds, family offices, and institutional allocators throughout the region.',
  },
  {
    q: 'Who is Khalil Alawadhi?',
    a: 'Khalil Sharif Alawadhi is the Founder & Managing Director of Knights Gate Advisers. A financial executive with over 30 years of experience, he has held leadership roles at Société Générale Asset Management, Investcorp, and BNP Paribas, and has placed over US$3 billion in capital across diverse asset classes.',
  },
  {
    q: 'How can I contact Knights Gate Advisers?',
    a: 'You can reach Knights Gate Advisers by email at kalawadhi@kgadvisers.com or by telephone at +973 33 116 116. The office is located at Al Seef Area, Al Sehab Tower, Manama, Kingdom of Bahrain. All enquiries are handled with the strictest confidentiality.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number>(0)

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: 'clamp(40px, 6vw, 96px)',
          alignItems: 'start',
        }}
      >
        {/* Left — heading */}
        <motion.div
          variants={slideFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ position: 'sticky', top: 120 }}
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
              Frequently Asked
            </span>
          </div>
          <h2
            id="faq-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3.4rem)',
              color: C.navy,
              fontWeight: 500,
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            Questions,<br />
            <em style={{ color: C.goldLarge }}>Answered.</em>
          </h2>
          <p style={{
            fontSize: '0.95rem',
            color: C.muted,
            lineHeight: 1.8,
            maxWidth: 360,
          }}>
            What you should know about Knights Gate Advisers — our practice, our
            coverage across the GCC, and how to begin a discreet conversation.
          </p>
        </motion.div>

        {/* Right — accordion */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {faqs.map((item, i) => {
            const isOpen = open === i
            const panelId = `faq-panel-${i}`
            const btnId = `faq-btn-${i}`
            return (
              <motion.div
                key={i}
                variants={fadeUpItem}
                style={{ borderBottom: `1px solid ${C.border}` }}
              >
                <h3 style={{ margin: 0 }}>
                  <button
                    id={btnId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    style={{
                      width: '100%',
                      display: 'grid',
                      gridTemplateColumns: '1fr auto',
                      gap: 20,
                      alignItems: 'center',
                      textAlign: 'left',
                      padding: 'clamp(22px, 2.6vw, 30px) 4px',
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.15rem, 1.9vw, 1.45rem)',
                      fontWeight: 500,
                      color: isOpen ? C.goldLarge : C.navy,
                      lineHeight: 1.3,
                      transition: 'color 0.3s ease',
                      cursor: 'pointer',
                    }}
                  >
                    <span>{item.q}</span>
                    <motion.span
                      aria-hidden="true"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 30,
                        height: 30,
                        borderRadius: '50%',
                        border: `1px solid ${isOpen ? C.gold : 'rgba(12,22,32,0.2)'}`,
                        color: isOpen ? C.gold : C.muted,
                        fontSize: 18,
                        fontWeight: 300,
                        flexShrink: 0,
                        transition: 'border-color 0.3s ease, color 0.3s ease',
                      }}
                    >
                      +
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{
                        fontSize: '0.95rem',
                        color: C.muted,
                        lineHeight: 1.85,
                        padding: '0 44px clamp(24px, 2.6vw, 32px) 4px',
                        maxWidth: 640,
                      }}>
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
