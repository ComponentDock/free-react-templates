import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { StatsBand } from './components/StatsBand'
import { Features } from './components/Features'
import { HowItWorks } from './components/HowItWorks'
import { Integrations } from './components/Integrations'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'
import { Waitlist } from './components/Waitlist'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Blastoff — Startup Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <StatsBand />
        <Features />
        <HowItWorks />
        <Integrations />
        <Pricing />
        <Testimonials />
        <Faq />
        <Waitlist />
      </main>
      <Footer />
    </div>
  )
}
