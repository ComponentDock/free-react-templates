import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { HowItWorks } from './components/HowItWorks'
import { Dashboard } from './components/Dashboard'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { Faq } from './components/Faq'
import { CtaSection } from './components/CtaSection'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Vaultly — AI Financial Advisor'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <Dashboard />
        <Testimonials />
        <Pricing />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
