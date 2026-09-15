import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Welcome } from './components/Welcome'
import { MajorCauses } from './components/MajorCauses'
import { KeyFeatures } from './components/KeyFeatures'
import { UpcomingEvents } from './components/UpcomingEvents'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Warmheart — Nonprofit & Charity Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-poppins text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <MajorCauses />
        <KeyFeatures />
        <UpcomingEvents />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
