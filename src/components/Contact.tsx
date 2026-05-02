import { useState } from 'react'
import { motion } from 'framer-motion'
import { slideFromLeft, slideFromRight, staggerContainer, fadeUpItem } from '../lib/animations'
import { Magnetic } from './motion'

const C = {
  gold: '#C9A96E',
  goldAccessible: '#8A6A35',
  navy: '#091520',
  text: '#0C1620',
  muted: '#5A6472',
  bg: '#F6F3EF',
  border: 'rgba(12,22,32,0.1)',
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Enquiry from ${form.name}${form.company ? ` – ${form.company}` : ''}`)
    const body = encodeURIComponent(`Name: ${form.name}\nOrganisation: ${form.company}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.location.href = `mailto:kalawadhi@kgadvisers.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 16px',
    background: 'transparent',
    border: `1px solid ${C.border}`,
    borderRadius: 0,
    fontSize: '0.9rem',
    color: C.text,
    fontFamily: 'var(--font-sans)',
    transition: 'border-color 0.25s ease',
  }

  return (
    <section
      id="contact"
      style={{
        background: C.bg,
        padding: 'clamp(80px, 10vw, 140px) 0',
      }}
    >
      <div
        className="contact-grid"
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 clamp(24px, 5vw, 80px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 'clamp(48px, 6vw, 96px)',
          alignItems: 'center',
        }}
      >
        {/* Left — info */}
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
            }}>
              Get in Touch
            </span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            color: C.navy,
            fontWeight: 500,
            lineHeight: 1.1,
            marginBottom: 24,
          }}>
            Let's Discuss Your<br />
            <em>Investment Objectives</em>
          </h2>

          <p style={{
            fontSize: '1rem',
            color: C.muted,
            lineHeight: 1.8,
            marginBottom: 32,
            maxWidth: 400,
          }}>
            Whether you are looking to access GCC capital markets, place a fund, or structure
            a bespoke advisory mandate, we welcome discreet, senior-level dialogue.
          </p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
          >
            {/* Address */}
            <motion.div variants={fadeUpItem} style={{ display: 'flex', gap: 16 }}>
              <div style={{
                width: 36,
                height: 36,
                border: `1px solid rgba(201,169,110,0.25)`,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1C4.5 1 2.5 3 2.5 5.5C2.5 9 7 13 7 13C7 13 11.5 9 11.5 5.5C11.5 3 9.5 1 7 1Z" stroke="#C9A96E" strokeWidth="1" />
                  <circle cx="7" cy="5.5" r="1.5" stroke="#C9A96E" strokeWidth="1" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.gold, marginBottom: 4 }}>Bahrain</div>
                <div style={{ fontSize: '0.875rem', color: C.muted, lineHeight: 1.6 }}>
                  Al Seef Area, Al Sehab Tower<br />
                  Building 3552, 15th Floor, Suite 1513<br />
                  Block 428, P.O. Box 39331<br />
                  Manama, Kingdom of Bahrain
                </div>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div variants={fadeUpItem} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <div style={{
                width: 36,
                height: 36,
                border: `1px solid rgba(201,169,110,0.25)`,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 2.5C2 2.5 3 1 4.5 1C5 1 5.5 1.5 6 2.5L6.5 4C6.7 4.5 6.5 5 6 5.3L5 5.8C5.5 7 6.5 8 7.5 8.5L8 7.5C8.3 7 8.8 6.8 9.3 7L10.8 7.5C11.5 7.8 12.5 8.5 12.5 9.5C12.5 11 11 12 11 12C11 12 3 11 2 2.5Z" stroke="#C9A96E" strokeWidth="1" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.gold, marginBottom: 2 }}>Phone</div>
                <a href="tel:+97333116116" style={{ fontSize: '0.9rem', color: C.text, transition: 'color 0.2s' }}>
                  +973 33 116 116
                </a>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div variants={fadeUpItem} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <div style={{
                width: 36,
                height: 36,
                border: `1px solid rgba(201,169,110,0.25)`,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="3" width="12" height="8" rx="1" stroke="#C9A96E" strokeWidth="1" />
                  <path d="M1 4L7 8L13 4" stroke="#C9A96E" strokeWidth="1" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.gold, marginBottom: 2 }}>Email</div>
                <a href="mailto:kalawadhi@kgadvisers.com" style={{ fontSize: '0.9rem', color: C.text, transition: 'color 0.2s' }}>
                  kalawadhi@kgadvisers.com
                </a>
              </div>
            </motion.div>

            {/* LinkedIn */}
            <motion.div variants={fadeUpItem} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <div style={{
                width: 36,
                height: 36,
                border: `1px solid rgba(201,169,110,0.25)`,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="1" width="12" height="12" rx="2" stroke="#C9A96E" strokeWidth="1" />
                  <path d="M4 6V10M4 4.5V4.5" stroke="#C9A96E" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M7 10V7.5C7 6.7 7.7 6 8.5 6C9.3 6 10 6.7 10 7.5V10" stroke="#C9A96E" strokeWidth="1" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.gold, marginBottom: 2 }}>LinkedIn</div>
                <a
                  href="https://www.linkedin.com/in/khalil-sharif-al-awadhi-a56ab2b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.9rem', color: C.text, transition: 'color 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.gold }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = C.text }}
                >
                  Khalil Alawadhi
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          variants={slideFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{
            background: 'rgba(12,22,32,0.04)',
            border: '1px solid rgba(12,22,32,0.08)',
            padding: 'clamp(32px, 4vw, 48px)',
          }}
        >
          {sent ? (
            <div style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 16,
              padding: 48,
              border: `1px solid rgba(201,169,110,0.2)`,
              textAlign: 'center',
            }}>
              <div style={{
                width: 48,
                height: 48,
                border: `1px solid ${C.gold}`,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: C.gold,
                fontSize: 20,
              }}>
                ✓
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: C.navy, fontWeight: 500 }}>
                Email Client Opened
              </h3>
              <p style={{ fontSize: '0.9rem', color: C.muted, lineHeight: 1.7 }}>
                Your message has been drafted. Please send it from your email client to complete the enquiry.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
            >
              <div className="contact-name-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label htmlFor="field-name" style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.muted, marginBottom: 8 }}>
                    Full Name *
                  </label>
                  <input
                    id="field-name"
                    required
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => { (e.target as HTMLElement).style.borderColor = C.gold }}
                    onBlur={e => { (e.target as HTMLElement).style.borderColor = C.border }}
                  />
                </div>
                <div>
                  <label htmlFor="field-company" style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.muted, marginBottom: 8 }}>
                    Organisation
                  </label>
                  <input
                    id="field-company"
                    type="text"
                    placeholder="Your organisation"
                    value={form.company}
                    onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => { (e.target as HTMLElement).style.borderColor = C.gold }}
                    onBlur={e => { (e.target as HTMLElement).style.borderColor = C.border }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="field-email" style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.muted, marginBottom: 8 }}>
                  Email Address *
                </label>
                <input
                  id="field-email"
                  required
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  style={inputStyle}
                  onFocus={e => { (e.target as HTMLElement).style.borderColor = C.gold }}
                  onBlur={e => { (e.target as HTMLElement).style.borderColor = C.border }}
                />
              </div>

              <div>
                <label htmlFor="field-message" style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.muted, marginBottom: 8 }}>
                  Message *
                </label>
                <textarea
                  id="field-message"
                  required
                  rows={6}
                  placeholder="Briefly describe your enquiry..."
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => { (e.target as HTMLElement).style.borderColor = C.gold }}
                  onBlur={e => { (e.target as HTMLElement).style.borderColor = C.border }}
                />
              </div>

              <Magnetic
                type="submit"
                strength={0.25}
                ariaLabel="Send enquiry"
                className="btn-primary-shine"
                style={{
                  alignSelf: 'flex-start',
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: C.navy,
                  padding: '14px 36px',
                  borderRadius: 0,
                  background: C.gold,
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <span style={{ position: 'relative', zIndex: 1 }}>Send Enquiry</span>
              </Magnetic>

              <p style={{ fontSize: '0.78rem', color: C.muted, marginTop: 4 }}>
                All enquiries are handled with the strictest confidentiality.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
