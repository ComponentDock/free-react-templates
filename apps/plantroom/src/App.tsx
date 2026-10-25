import { useEffect, useState } from 'react'
import { BackToTop, CookieStrip, ScrollProgress } from './components/Chrome'
import { ClosingCta } from './components/ClosingCta'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Agreement, Areas, Sectors } from './components/Grids'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LicenceBar } from './components/LicenceBar'
import { ResponseTiers } from './components/ResponseTiers'
import { Testimonials } from './components/Testimonials'
import { WhyUs } from './components/WhyUs'

/**
 * One page in the reference's order: skip link, progress bar, the licence
 * strip, the sticky header, the hero with its survey card, the three response
 * tiers, the inclusions grid, why-us with the register panel, the sectors grid,
 * the service areas, the references, the questions, the closing band, the
 * footer, the cookie strip and the back-to-top disc. There is no preloader and
 * no sticky mobile bar.
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
        <ResponseTiers />
        <Agreement />
        <WhyUs />
        <Sectors />
        <Areas />
        <Testimonials />
        <Faq />
        <ClosingCta />
      </main>

      <Footer />
      <CookieStrip open={cookieOpen} onDismiss={() => setCookieOpen(false)} />
      <BackToTop />
    </div>
  )
}
