import { Helmet } from '@dr.pogodin/react-helmet'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import WhyKGA from '../components/WhyKGA'
import Leadership from '../components/Leadership'
import FAQ, { faqs } from '../components/FAQ'
import Contact from '../components/Contact'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.kgadvisers.com/#faq',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Knights Gate Advisers — GCC Capital Advisory · Manama, Bahrain</title>
        <meta
          name="description"
          content="Independent capital advisory built on 30 years of GCC relationships. Discreet, senior-led capital placement, fund placement, investor relations, and sovereign coverage for institutions, family offices, and global asset managers."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Knights Gate Advisers — GCC Capital Advisory" />
        <meta property="og:description" content="30 years of trust. One point of access to GCC capital." />
        <meta property="og:url" content="https://www.kgadvisers.com/" />
        <meta name="twitter:title" content="Knights Gate Advisers — GCC Capital Advisory" />
        <meta name="twitter:description" content="30 years of trust. One point of access to GCC capital." />
        <link rel="canonical" href="https://www.kgadvisers.com/" />
        <link rel="alternate" hrefLang="en" href="https://www.kgadvisers.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.kgadvisers.com/" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <main id="main">
        <Hero />
        <About />
        <Services />
        <WhyKGA />
        <Leadership />
        <FAQ />
        <Contact />
      </main>
    </>
  )
}
