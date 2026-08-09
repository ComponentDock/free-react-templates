import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { StatsBand } from './components/StatsBand'
import { Services } from './components/Services'
import { HowItWorks } from './components/HowItWorks'
import { ServiceAreas } from './components/ServiceAreas'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { QuoteForm } from './components/QuoteForm'
import { Faq } from './components/Faq'
import { CtaBand } from './components/CtaBand'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Movere — Moving Company Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <StatsBand />
        <Services />
        <HowItWorks />
        <ServiceAreas />
        <Pricing />
        <Testimonials />
        <QuoteForm />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
