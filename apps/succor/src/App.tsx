import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { VolunteerSection } from './components/VolunteerSection'
import { ServicesBand } from './components/ServicesBand'
import { CausesCarousel } from './components/CausesCarousel'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Succor — Charity & Nonprofit Template'
  }, [])

  return (
    <div className="font-sans">
      {/* Transparent navbar floats over the hero (absolute, top 20px). */}
      <Navbar />
      <main>
        <Hero />
        <VolunteerSection />
        <ServicesBand />
        <CausesCarousel />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
