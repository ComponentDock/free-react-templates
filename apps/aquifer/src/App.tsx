import { useEffect, useState } from 'react'
import { AreasBand } from './components/AreasBand'
import { BackToTop, CookieStrip, ScrollProgress } from './components/Chrome'
import { ClosingBand } from './components/ClosingBand'
import { EmergencyBand } from './components/EmergencyBand'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { InstrumentsBand } from './components/InstrumentsBand'
import { LicenceBar } from './components/LicenceBar'
import { ServicesGrid } from './components/ServicesGrid'
import { SignsList } from './components/SignsList'
import { StickyCallBar } from './components/StickyCallBar'
import { Testimonials } from './components/Testimonials'

/**
 * One page in the reference's order: skip link, progress bar, the licence
 * strip, the sticky header, the hero with its booking card, the emergency band,
 * the six signs, the instruments band, the services grid, the service areas,
 * the reviews, the questions, the closing band, the footer, then the phone-only
 * call bar, the cookie strip and the back-to-top disc. There is no preloader and
 * no dark toggle.
 */
export function App() {
  const [cookieOpen, setCookieOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setCookieOpen(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div id="top" className="min-h-screen bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:rounded-lg focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>

      <ScrollProgress />
      <LicenceBar />
      <Header />

      <main id="main-content">
        <Hero />
        <EmergencyBand />
        <SignsList />
        <InstrumentsBand />
        <ServicesGrid />
        <AreasBand />
        <Testimonials />
        <Faq />
        <ClosingBand />
      </main>

      <Footer />
      <StickyCallBar />
      <CookieStrip open={cookieOpen} onDismiss={() => setCookieOpen(false)} />
      <BackToTop />
    </div>
  )
}
