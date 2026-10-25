import { useEffect, useState } from 'react'
import { Areas } from './components/Areas'
import { BackToTop, CookieStrip, ScrollProgress } from './components/Chrome'
import { ClosingBand } from './components/ClosingBand'
import { EmergencyBand } from './components/EmergencyBand'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LicenceBar } from './components/LicenceBar'
import { Options } from './components/Options'
import { Process } from './components/Process'
import { Sizing } from './components/Sizing'
import { StickyCall } from './components/StickyCall'
import { Testimonials } from './components/Testimonials'
import { WhyUs } from './components/WhyUs'

/**
 * One page in the reference's order: skip link, progress bar, the dark licence
 * strip, the sticky header, the hero with its quote card, the sizing tool, the
 * emergency band, the six options, the four sizing questions, three steps,
 * twelve towns, three reviews, five questions, the closing band and the footer,
 * then the phone-only call bar, the cookie strip and the back-to-top disc.
 * There is no preloader and no dark toggle.
 */
export function App() {
  const [cookieOpen, setCookieOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setCookieOpen(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div id="top" className="min-h-screen bg-white pb-28 lg:pb-0">
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
        <Sizing />
        <EmergencyBand />
        <Options />
        <WhyUs />
        <Process />
        <Areas />
        <Testimonials />
        <Faq />
        <ClosingBand />
      </main>

      <Footer />
      <StickyCall />
      <CookieStrip open={cookieOpen} onDismiss={() => setCookieOpen(false)} />
      <BackToTop />
    </div>
  )
}
