import { Helmet } from '@dr.pogodin/react-helmet'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUpItem, staggerContainer, scrollReveal } from '../lib/animations'

const C = {
  gold: '#C9A96E',
  goldAccessible: '#8A6A35',
  goldLarge: '#9E7B45',
  navy: '#091520',
  navyDark: '#050D18',
  text: '#0C1620',
  textLight: '#EDE8E0',
  muted: '#5A6472',
  mutedLight: 'rgba(237,232,224,0.55)',
  bg: '#F6F3EF',
  bgAlt: '#EEEAE4',
  border: 'rgba(12,22,32,0.1)',
}

const LAST_UPDATED = '02 May 2026'

const sections: Array<{ heading: string; body: React.ReactNode }> = [
  {
    heading: 'Nature of Information',
    body: (
      <>
        <p>
          The information presented on{' '}
          <a href="https://www.kgadvisers.com">www.kgadvisers.com</a> is provided by
          Knights Gate Advisers (&ldquo;<strong>KGA</strong>&rdquo;) for general
          informational purposes only. It describes our practice, services, and
          perspective on the capital markets of the Gulf Cooperation Council
          region, and is not intended as a substitute for tailored professional
          advice.
        </p>
      </>
    ),
  },
  {
    heading: 'No Investment Advice',
    body: (
      <>
        <p>
          Nothing on this website constitutes investment, legal, tax, accounting,
          regulatory, or other professional advice. The content does not take
          account of the personal financial situation, objectives, or
          requirements of any particular reader. Before making any decision based
          on information accessed through this website, readers should obtain
          independent advice from suitably qualified professionals.
        </p>
      </>
    ),
  },
  {
    heading: 'No Offer or Solicitation',
    body: (
      <>
        <p>
          The information contained on this website does not constitute an
          offer, recommendation, or solicitation to buy or sell any security,
          financial instrument, fund interest, or service in any jurisdiction.
          Any such offer would be made only by means of formal offering
          documentation, delivered to qualified recipients, and subject to the
          specific representations and warranties set out in such documentation.
        </p>
      </>
    ),
  },
  {
    heading: 'Professional & Institutional Audience',
    body: (
      <>
        <p>
          This website is directed at sovereign institutions, family offices,
          regulated financial institutions, professional clients, and qualified
          counterparties. It is not intended for, nor should it be relied upon
          by, retail investors. By accessing this website, you confirm that you
          are doing so in a professional capacity and acknowledge that the
          information is not designed for, and may not be appropriate to, the
          retail context.
        </p>
      </>
    ),
  },
  {
    heading: 'Forward-Looking Statements',
    body: (
      <>
        <p>
          Statements regarding future market conditions, opportunities, or
          performance are inherently uncertain. Forward-looking statements
          reflect KGA&rsquo;s perspective at the time of publication and involve
          known and unknown risks. Actual outcomes may differ materially. KGA
          undertakes no obligation to update any such statement.
        </p>
      </>
    ),
  },
  {
    heading: 'Third-Party Information',
    body: (
      <>
        <p>
          Where information from third-party sources is referenced, KGA believes
          such sources to be reliable but provides no representation or warranty
          as to accuracy or completeness. Reliance on third-party information is
          undertaken at the reader&rsquo;s own risk.
        </p>
      </>
    ),
  },
  {
    heading: 'Regulatory & Jurisdictional Note',
    body: (
      <>
        <p>
          Knights Gate Advisers is established in the Kingdom of Bahrain.
          Services are provided subject to the applicable regulatory regimes of
          each relevant jurisdiction. The information on this website is not
          directed at any person in any jurisdiction where, by reason of that
          person&rsquo;s nationality, residence, or otherwise, the publication or
          availability of such information is prohibited or restricted. Persons
          in respect of whom such restrictions apply must not access or rely on
          this website.
        </p>
      </>
    ),
  },
  {
    heading: 'Confidentiality',
    body: (
      <>
        <p>
          Senior dialogue with KGA is conducted with the utmost discretion. Any
          confidential information shared with us in the course of an enquiry or
          engagement remains protected through appropriate professional and
          contractual obligations. Visitors are advised not to transmit material
          non-public or confidential information through unsecured channels.
        </p>
      </>
    ),
  },
  {
    heading: 'Limitation of Liability',
    body: (
      <>
        <p>
          To the fullest extent permitted by law, KGA, its principals, partners,
          employees, and agents accept no liability for any loss or damage,
          direct or indirect, arising from access to, or reliance upon, this
          website or its contents. The website is provided on an &ldquo;as is&rdquo;
          basis without warranty of any kind, express or implied.
        </p>
      </>
    ),
  },
  {
    heading: 'External Links',
    body: (
      <>
        <p>
          This website may contain links to external resources for the
          convenience of visitors. KGA does not control and is not responsible
          for the content, accuracy, or privacy practices of any third-party
          site. The inclusion of a link does not imply endorsement.
        </p>
      </>
    ),
  },
  {
    heading: 'Intellectual Property',
    body: (
      <>
        <p>
          All content on this website &mdash; including text, graphics, the Knights
          Gate Advisers name and mark, and the structure and arrangement of the
          site &mdash; is the property of KGA or its licensors and is protected by
          applicable intellectual-property laws. No part of this website may be
          reproduced, distributed, or used for commercial purposes without the
          prior written consent of KGA.
        </p>
      </>
    ),
  },
  {
    heading: 'Governing Law',
    body: (
      <>
        <p>
          Use of this website and the matters set out in this Disclaimer are
          governed by the laws of the Kingdom of Bahrain. Any dispute arising in
          connection with this website shall be subject to the exclusive
          jurisdiction of the courts of the Kingdom of Bahrain, save where
          mandatory law provides otherwise.
        </p>
      </>
    ),
  },
  {
    heading: 'Contact',
    body: (
      <>
        <p>For questions regarding this Disclaimer, please contact:</p>
        <p>
          <strong>Knights Gate Advisers</strong>
          <br />
          Al Seef Area, Al Sehab Tower
          <br />
          Building 3552, 15th Floor, Suite 1513
          <br />
          Block 428, P.O. Box 39331
          <br />
          Manama, Kingdom of Bahrain
          <br />
          <br />
          Email:{' '}
          <a href="mailto:kalawadhi@kgadvisers.com">kalawadhi@kgadvisers.com</a>
          <br />
          Telephone: <a href="tel:+97333116116">+973 33 116 116</a>
        </p>
      </>
    ),
  },
]

export default function Disclaimer() {
  return (
    <>
      <Helmet>
        <title>Disclaimer — Knights Gate Advisers</title>
        <meta
          name="description"
          content="Disclaimer for Knights Gate Advisers — terms of use, regulatory notes, and limitations applicable to information presented on this website."
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.kgadvisers.com/disclaimer" />
      </Helmet>

      <motion.main
        id="main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
      >
        {/* ── Hero band ─────────────────────────────────── */}
        <section
          style={{
            position: 'relative',
            background: C.navy,
            color: C.textLight,
            padding: 'clamp(140px, 16vw, 200px) 0 clamp(80px, 10vw, 120px)',
            overflow: 'hidden',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background: `
                radial-gradient(ellipse 80% 60% at 60% 30%, rgba(18, 36, 64, 0.85) 0%, transparent 70%),
                radial-gradient(ellipse 40% 50% at 15% 90%, rgba(201, 169, 110, 0.05) 0%, transparent 60%),
                linear-gradient(160deg, #0C1D35 0%, #091520 50%, #050D18 100%)
              `,
              pointerEvents: 'none',
            }}
          />
          <svg
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              opacity: 0.03,
              pointerEvents: 'none',
            }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="legal-grid-2" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C9A96E" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#legal-grid-2)" />
          </svg>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            style={{
              position: 'relative',
              maxWidth: 980,
              margin: '0 auto',
              padding: '0 clamp(24px, 5vw, 80px)',
            }}
          >
            <motion.div
              variants={fadeUpItem}
              style={{ display: 'flex', alignItems: 'center', marginBottom: 28 }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: 40,
                  height: 1,
                  background: C.gold,
                  marginRight: 14,
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: C.gold,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                Legal · Disclaimer
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUpItem}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.6rem, 6vw, 4.8rem)',
                fontWeight: 500,
                lineHeight: 1.05,
                color: C.textLight,
                marginBottom: 24,
              }}
            >
              <em style={{ color: C.gold }}>Disclaimer</em>
            </motion.h1>

            <motion.p
              variants={fadeUpItem}
              style={{
                fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)',
                color: C.mutedLight,
                lineHeight: 1.75,
                maxWidth: 620,
                marginBottom: 32,
              }}
            >
              Terms of use, regulatory notes, and limitations applicable to
              information presented on this website.
            </motion.p>

            <motion.div
              variants={fadeUpItem}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                padding: '8px 16px',
                border: `1px solid rgba(201,169,110,0.25)`,
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: C.gold,
              }}
            >
              <span>Last Updated</span>
              <span style={{ width: 1, height: 12, background: 'rgba(201,169,110,0.35)' }} />
              <span style={{ color: C.textLight, letterSpacing: '0.08em' }}>{LAST_UPDATED}</span>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Body ──────────────────────────────────────── */}
        <section
          style={{
            background: C.bg,
            padding: 'clamp(72px, 9vw, 120px) 0 clamp(80px, 10vw, 140px)',
          }}
        >
          <div
            style={{
              maxWidth: 980,
              margin: '0 auto',
              padding: '0 clamp(24px, 5vw, 80px)',
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr)',
              gap: 'clamp(40px, 5vw, 64px)',
            }}
          >
            {sections.map((s, i) => (
              <motion.article
                key={s.heading}
                variants={scrollReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  columnGap: 'clamp(24px, 4vw, 48px)',
                  rowGap: 12,
                  alignItems: 'baseline',
                  paddingBottom: 'clamp(40px, 5vw, 56px)',
                  borderBottom: i === sections.length - 1 ? 'none' : `1px solid ${C.border}`,
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1rem, 1.4vw, 1.1rem)',
                    color: C.goldLarge,
                    fontWeight: 500,
                    fontStyle: 'italic',
                    lineHeight: 1,
                    paddingTop: 6,
                    minWidth: 32,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h2
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.6rem, 2.6vw, 2.1rem)',
                      color: C.navy,
                      fontWeight: 500,
                      lineHeight: 1.15,
                      marginBottom: 18,
                      letterSpacing: '0.005em',
                    }}
                  >
                    {s.heading}
                  </h2>
                  <div className="legal-prose">{s.body}</div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ── CTA strip ─────────────────────────────────── */}
        <section
          style={{
            background: C.bgAlt,
            borderTop: `1px solid ${C.border}`,
          }}
        >
          <div
            style={{
              maxWidth: 980,
              margin: '0 auto',
              padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 80px)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 24,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ maxWidth: 520 }}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: C.goldAccessible,
                  marginBottom: 10,
                }}
              >
                Need Clarification?
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)',
                  color: C.navy,
                  fontWeight: 500,
                  lineHeight: 1.2,
                }}
              >
                Discreet, senior-level dialogue.
              </div>
            </div>
            <Link
              to="/#contact"
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: C.navy,
                padding: '14px 32px',
                background: C.gold,
                transition: 'all 0.25s ease',
                display: 'inline-block',
              }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLElement).style.background = '#DBBF8A'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLElement).style.background = C.gold
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              }}
            >
              Contact KGA
            </Link>
          </div>
        </section>
      </motion.main>
    </>
  )
}
