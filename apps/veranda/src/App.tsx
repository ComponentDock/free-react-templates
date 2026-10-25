import { useEffect, useState } from 'react'
import { BackToTop } from './components/BackToTop'
import { Channels } from './components/Channels'
import { ClosingCta } from './components/ClosingCta'
import { CookieStrip } from './components/CookieStrip'
import { CounterBand } from './components/CounterBand'
import { Discussions } from './components/Discussions'
import { Events } from './components/Events'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Members } from './components/Members'
import { MobileCta } from './components/MobileCta'
import { Preloader } from './components/Preloader'
import { Pricing } from './components/Pricing'
import { ScrollProgress } from './components/ScrollProgress'
import { Testimonials } from './components/Testimonials'

/**
 * One page in the reference's band order: chrome, the header, the hero, the
 * counter band, the six channels, the thread list, the member spotlight, the
 * calendar, the tiers, the carousel, the questions, and the closing band over a
 * four-block footer.
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
      <Preloader />
      <Header />

      <main id="main-content">
        <Hero />
        <CounterBand />
        <Channels />
        <Discussions />
        <Members />
        <Events />
        <Pricing />
        <Testimonials />
        <Faq />
        <ClosingCta />
      </main>

      <Footer />
      <MobileCta hidden={cookieOpen} />
      <CookieStrip open={cookieOpen} onDismiss={() => setCookieOpen(false)} />
      <BackToTop />
    </div>
  )
}
