import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Pillars } from './components/Pillars'
import { Services } from './components/Services'
import { SecureBanner } from './components/SecureBanner'
import { WhyChoose } from './components/WhyChoose'
import { Counters } from './components/Counters'
import { Testimonials } from './components/Testimonials'
import { Estimate } from './components/Estimate'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Cargonaut — Logistics & Freight Template'
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Pillars />
        <Services />
        <SecureBanner />
        <WhyChoose />
        <Counters />
        <Testimonials />
        <Estimate />
      </main>
      <Footer />
    </div>
  )
}
