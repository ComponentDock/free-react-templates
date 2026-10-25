import { Areas } from './components/Areas'
import { BackToTop, CookieStrip, ScrollProgress, SkipLink } from './components/Chrome'
import { ClosingBand } from './components/ClosingBand'
import { EmergencyBand } from './components/EmergencyBand'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LicenceBar } from './components/LicenceBar'
import { Services } from './components/Services'
import { StickyCall } from './components/StickyCall'
import { Testimonials } from './components/Testimonials'
import { Timeline } from './components/Timeline'
import { WhyUs } from './components/WhyUs'
import { useScrollState } from './lib/useScrollState'

/**
 * One page in the reference's order: chrome, licence strip + sticky header,
 * hero with the quote card → timeline → emergency band → services → why-us →
 * areas → reviews → FAQ → closing band, then the footer and the fixed surfaces.
 */
export function App() {
  const { y, progress } = useScrollState()

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SkipLink />
      <ScrollProgress progress={progress} />
      <LicenceBar />
      <Header lifted={y > 50} />

      <main id="main-content">
        <Hero />
        <Timeline />
        <EmergencyBand />
        <StickyCall />
        <Services />
        <WhyUs />
        <Areas />
        <Testimonials />
        <Faq />
        <ClosingBand />
      </main>

      <Footer />
      <CookieStrip />
      <BackToTop y={y} />
    </div>
  )
}
