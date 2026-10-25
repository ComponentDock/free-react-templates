import { BackToTop, CookieStrip, ScrollProgress, SkipLink } from './components/Chrome'
import { Calendar } from './components/Calendar'
import { Closing } from './components/Closing'
import { Counters } from './components/Counters'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Maintenance } from './components/Maintenance'
import { MobileBar } from './components/MobileBar'
import { Planting } from './components/Planting'
import { Testimonials } from './components/Testimonials'
import { Work } from './components/Work'

/**
 * One page in the reference's order: chrome, header, hero → counters → recent
 * gardens → planting → the year → maintenance → reviews → questions → closing
 * band, then the mobile bar, the footer and the two fixed discs. The root keeps
 * 80 px of bottom padding below 1024 px so the fixed bar never covers the
 * legal row. No preloader, no theme toggle.
 */
export function App() {
  return (
    <div className="min-h-screen bg-white pb-20 text-gray-900 lg:pb-0">
      <SkipLink />
      <ScrollProgress />
      <Header />

      <main id="main-content">
        <Hero />
        <Counters />
        <Work />
        <Planting />
        <Calendar />
        <Maintenance />
        <Testimonials />
        <Faq />
        <Closing />
      </main>

      <MobileBar />
      <Footer />
      <BackToTop />
      <CookieStrip />
    </div>
  )
}
