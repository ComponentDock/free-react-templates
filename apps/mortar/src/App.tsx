import { useEffect } from 'react'
import { About } from './components/About'
import { Blog } from './components/Blog'
import { Counters } from './components/Counters'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { IntroCta } from './components/IntroCta'
import { Navbar } from './components/Navbar'
import { Newsletter } from './components/Newsletter'
import { Portfolio } from './components/Portfolio'
import { Pricing } from './components/Pricing'
import { Services } from './components/Services'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'
import { TopBar } from './components/TopBar'
import { TrustBadges } from './components/TrustBadges'
import { VideoCta } from './components/VideoCta'

export function App() {
  useEffect(() => {
    document.title = 'Mortar — Construction Company Template'
  }, [])

  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TrustBadges />
        <IntroCta />
        <Services />
        <VideoCta />
        <Counters />
        <Team />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Blog />
        <Faq />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
