import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { StatsStrip } from './components/StatsStrip'
import { Capabilities } from './components/Capabilities'
import { HowItWorks } from './components/HowItWorks'
import { UseCases } from './components/UseCases'
import { Pricing } from './components/Pricing'
import { Developers } from './components/Developers'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Sentient — AI Platform Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <StatsStrip />
        <Capabilities />
        <HowItWorks />
        <UseCases />
        <Pricing />
        <Developers />
        <Testimonials />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
