import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AdStrip } from './components/AdStrip'
import { About } from './components/About'
import { Experts } from './components/Experts'
import { Services } from './components/Services'
import { Pricing } from './components/Pricing'
import { WorkingHours } from './components/WorkingHours'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Vigor — Fitness Gym Template'
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <AdStrip />
        <About />
        <Experts />
        <Services />
        <Pricing />
        <WorkingHours />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
