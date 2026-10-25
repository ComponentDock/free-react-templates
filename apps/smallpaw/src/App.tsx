import { useEffect, useState } from 'react'
import { BackToTop, CookieStrip, ScrollProgress } from './components/Chrome'
import { ContactCta } from './components/ContactCta'
import { Faq } from './components/Faq'
import { Fees } from './components/Fees'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HealthPlans } from './components/HealthPlans'
import { Hero } from './components/Hero'
import { MobileCta } from './components/MobileCta'
import { OutOfHours } from './components/OutOfHours'
import { Species } from './components/Species'
import { Stats } from './components/Stats'
import { Testimonials } from './components/Testimonials'

/**
 * One page in the reference's order: skip link, progress bar, sticky header,
 * hero with its facts and photograph, the out-of-hours band, the counters, the
 * species grid, the plans, the fee table, the reviews, the questions, the
 * closing band, the footer, then the phone-only CTA bar, the cookie strip and
 * the back-to-top disc. There is no preloader and no dark toggle.
 */
export function App() {
  const [cookieOpen, setCookieOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setCookieOpen(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:rounded-lg focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>

      <ScrollProgress />
      <Header />

      <main id="main-content">
        <Hero />
        <OutOfHours />
        <Stats />
        <Species />
        <HealthPlans />
        <Fees />
        <Testimonials />
        <Faq />
        <ContactCta />
      </main>

      <Footer />
      <MobileCta />
      <CookieStrip open={cookieOpen} onDismiss={() => setCookieOpen(false)} />
      <BackToTop />
    </div>
  )
}
