import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { CounterBand } from './components/CounterBand'
import { Services } from './components/Services'
import { QuoteBand } from './components/QuoteBand'
import { Portfolio } from './components/Portfolio'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Bastion — Architecture Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CounterBand />
        <Services />
        <QuoteBand />
        <Portfolio />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
