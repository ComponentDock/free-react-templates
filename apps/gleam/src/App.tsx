import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TrustRow } from './components/TrustRow'
import { StatsBand } from './components/StatsBand'
import { Services } from './components/Services'
import { Pricing } from './components/Pricing'
import { BeforeAfter } from './components/BeforeAfter'
import { Testimonials } from './components/Testimonials'
import { CtaBand } from './components/CtaBand'
import { Faq } from './components/Faq'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { CookieConsent } from './components/CookieConsent'
import { BackToTop } from './components/BackToTop'

export function App() {
  useEffect(() => {
    document.title = 'Gleam — Cleaning Services'
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
        <TrustRow />
        <StatsBand />
        <Services />
        <Pricing />
        <BeforeAfter />
        <Testimonials />
        <CtaBand />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
      <BackToTop />
    </div>
  )
}
