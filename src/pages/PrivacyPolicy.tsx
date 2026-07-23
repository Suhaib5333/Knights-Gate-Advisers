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
    heading: 'Introduction',
    body: (
      <>
        <p>
          Knights Gate Advisers (&ldquo;<strong>KGA</strong>&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;,
          or &ldquo;us&rdquo;) is an independent capital advisory firm established in the
          Kingdom of Bahrain. We serve sovereign institutions, family offices, and
          global asset managers across the Gulf Cooperation Council region.
        </p>
        <p>
          This Privacy Policy describes how KGA collects, uses, retains, and
          protects information when you visit{' '}
          <a href="https://www.kgadvisers.com">www.kgadvisers.com</a>, correspond with us,
          or otherwise engage our services. We are committed to handling personal
          information with the same discretion that defines our advisory practice.
        </p>
      </>
    ),
  },
  {
    heading: 'Information We Collect',
    body: (
      <>
        <p>
          We collect only the information necessary to respond to enquiries and to
          fulfil our professional obligations. This includes:
        </p>
        <ul>
          <li>
            <strong>Information you provide directly</strong> &mdash; name, organisation,
            email address, telephone number, and the substance of any message you
            send through our contact form or by email.
          </li>
          <li>
            <strong>Engagement information</strong> &mdash; details exchanged in the
            ordinary course of an advisory mandate, including correspondence and
            documents required for due diligence and regulatory compliance.
          </li>
          <li>
            <strong>Technical information</strong> &mdash; standard server logs (IP
            address, browser type, referring page, timestamp) collected
            automatically when you visit our website.
          </li>
        </ul>
        <p>
          We do not knowingly collect personal information from individuals under
          the age of eighteen. Our website is intended for institutional and
          professional audiences.
        </p>
      </>
    ),
  },
  {
    heading: 'How We Use Information',
    body: (
      <>
        <p>Information is used solely for the following purposes:</p>
        <ul>
          <li>To respond to enquiries and to provide the advisory services requested.</li>
          <li>To conduct client onboarding, due diligence, and know-your-customer checks where applicable.</li>
          <li>To meet our legal, regulatory, and professional obligations.</li>
          <li>To maintain the security and integrity of our website and systems.</li>
          <li>To communicate updates strictly relevant to an existing engagement or relationship.</li>
        </ul>
        <p>
          We do not engage in marketing profiling, behavioural advertising, or the
          sale of personal information under any circumstance.
        </p>
      </>
    ),
  },
  {
    heading: 'Disclosure & Sharing',
    body: (
      <>
        <p>
          KGA does not sell, rent, or trade personal information. We may share
          information only where strictly necessary, and only with parties bound
          by equivalent obligations of confidentiality:
        </p>
        <ul>
          <li>Professional advisers (legal, accounting, audit) engaged by KGA.</li>
          <li>Regulators, courts, or governmental authorities where disclosure is required by law.</li>
          <li>Counterparties or institutions with your express consent in connection with a mandate.</li>
        </ul>
      </>
    ),
  },
  {
    heading: 'Cookies & Analytics',
    body: (
      <>
        <p>
          Our website uses only essential cookies necessary for its operation. We
          do not deploy third-party advertising trackers. Where any analytics are
          used, they are configured in an aggregate, anonymised manner and never
          to identify individual visitors.
        </p>
      </>
    ),
  },
  {
    heading: 'Data Retention',
    body: (
      <>
        <p>
          Personal information is retained only for as long as required to fulfil
          the purpose for which it was collected, and thereafter for the minimum
          period mandated by Bahraini law and applicable regulatory regimes.
          Records relating to engagements are typically held for a minimum of ten
          years following the conclusion of the relationship.
        </p>
      </>
    ),
  },
  {
    heading: 'International Transfers',
    body: (
      <>
        <p>
          Given the cross-border nature of our advisory work, information may be
          transferred to, and processed in, jurisdictions outside the Kingdom of
          Bahrain. Where such transfers occur, we apply contractual and technical
          safeguards consistent with the Bahrain Personal Data Protection Law
          (PDPL) and equivalent international standards.
        </p>
      </>
    ),
  },
  {
    heading: 'Your Rights',
    body: (
      <>
        <p>
          Subject to applicable law, you may request to access, correct, or erase
          personal information held about you, and may object to or restrict
          certain forms of processing. You may also lodge a complaint with the
          Personal Data Protection Authority of the Kingdom of Bahrain. To
          exercise any of these rights, contact us using the details below.
        </p>
      </>
    ),
  },
  {
    heading: 'Security',
    body: (
      <>
        <p>
          KGA maintains administrative, physical, and technical safeguards
          designed to protect personal information against unauthorised access,
          alteration, disclosure, or destruction. Sensitive correspondence is
          handled through secure channels and access is limited to personnel with
          a clear professional need.
        </p>
      </>
    ),
  },
  {
    heading: 'Changes to this Policy',
    body: (
      <>
        <p>
          This Policy may be updated from time to time to reflect changes in our
          practices or in the legal landscape. The &ldquo;last updated&rdquo; date at the top
          of this page indicates the most recent revision. Material changes will
          be communicated through our website.
        </p>
      </>
    ),
  },
  {
    heading: 'Contact',
    body: (
      <>
        <p>
          For any question regarding this Privacy Policy, or to exercise your
          rights, please contact:
        </p>
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

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — Knights Gate Advisers</title>
        <meta
          name="description"
          content="Privacy Policy for Knights Gate Advisers (KG Advisers) — how we collect, use, and protect personal information in the course of our capital advisory practice."
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://www.kgadvisers.com/privacy-policy" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Privacy Policy — Knights Gate Advisers" />
        <meta property="og:description" content="How Knights Gate Advisers collects, uses, and protects personal information." />
        <meta property="og:url" content="https://www.kgadvisers.com/privacy-policy" />
        <meta name="twitter:title" content="Privacy Policy — Knights Gate Advisers" />
        <meta name="twitter:description" content="How Knights Gate Advisers collects, uses, and protects personal information." />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kgadvisers.com/' },
              { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: 'https://www.kgadvisers.com/privacy-policy' },
            ],
          })}
        </script>
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
          {/* background atmosphere — matches Hero */}
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
              <pattern id="legal-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C9A96E" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#legal-grid)" />
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
                Legal · Privacy
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
              Privacy <em style={{ color: C.gold }}>Policy</em>
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
              How Knights Gate Advisers collects, uses, and protects information in
              the course of its capital advisory practice.
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
                Questions?
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
                Speak with us in confidence.
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
