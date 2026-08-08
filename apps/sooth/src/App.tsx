import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { StatsBand } from './components/StatsBand'
import { Services } from './components/Services'
import { Specialists } from './components/Specialists'
import { Gallery } from './components/Gallery'
import { Results } from './components/Results'
import { Packages } from './components/Packages'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'
import { ContactCta } from './components/ContactCta'
import { Footer } from './components/Footer'
import { CookieConsent } from './components/CookieConsent'
import { BackToTop } from './components/BackToTop'

export function App() {
  useEffect(() => {
    document.title = 'Sooth — Spa Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <StatsBand />
        <Services />
        <Specialists />
        <Gallery />
        <Results />
        <Packages />
        <Testimonials />
        <Faq />
        <ContactCta />
      </main>
      <Footer />
      <CookieConsent />
      <BackToTop />
    </div>
  )
}
