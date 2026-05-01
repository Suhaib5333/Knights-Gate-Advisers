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
        <title>Knights Gate Advisers — Capital · Partnerships · Performance</title>
        <meta
          name="description"
          content="Knights Gate Advisers provides bespoke capital advisory and placement services to sovereign institutions, family offices, and global asset managers across the GCC."
        />
        <meta property="og:title" content="Knights Gate Advisers" />
        <meta property="og:description" content="30 years of trust. One point of access to GCC capital." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.kgadvisers.com" />
      </Helmet>
      <main>
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
