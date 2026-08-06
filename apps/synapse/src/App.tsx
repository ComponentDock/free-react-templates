import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { CtaSplit } from './components/CtaSplit'
import { Screenshots } from './components/Screenshots'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { Impress } from './components/Impress'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Synapse — SaaS Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <CtaSplit />
        <Screenshots />
        <CtaSplit inverted />
        <Pricing />
        <Testimonials />
        <CtaSplit />
        <Impress />
      </main>
      <Footer />
    </div>
  )
}
