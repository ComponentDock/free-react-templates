import { useEffect } from 'react'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { JoinCta } from './components/JoinCta'
import { Navbar } from './components/Navbar'
import { Sermons } from './components/Sermons'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { WhyUs } from './components/WhyUs'

export function App() {
  useEffect(() => {
    document.title = 'Sanctus — Church Template'
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Sermons />
        <WhyUs />
        <Testimonials />
        <Services />
        <JoinCta />
      </main>
      <Footer />
    </>
  )
}
