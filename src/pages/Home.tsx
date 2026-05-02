import { Helmet } from '@dr.pogodin/react-helmet'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import WhyKGA from '../components/WhyKGA'
import Leadership from '../components/Leadership'
import Contact from '../components/Contact'

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
      </Helmet>
      <main id="main">
        <Hero />
        <About />
        <Services />
        <WhyKGA />
        <Leadership />
        <Contact />
      </main>
    </>
  )
}
