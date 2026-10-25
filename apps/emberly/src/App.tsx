import { Areas } from './components/Areas'
import { BackToTop, CookieStrip, ScrollProgress, SkipLink } from './components/Chrome'
import { ClosingBand } from './components/ClosingBand'
import { Faq } from './components/Faq'
import { FinanceBand } from './components/FinanceBand'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LicenceStrip } from './components/LicenceStrip'
import { Process } from './components/Process'
import { SeasonalBand } from './components/SeasonalBand'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { useScrollState } from './lib/useScrollState'

/**
 * One page in the reference's order: chrome, licence strip + sticky header,
 * the hero whose right half is the three plan cards → finance calculator →
 * services → the ember seasonal band → process → areas → reviews → FAQ →
 * closing band, then the footer and the two fixed surfaces.
 */
export function App() {
  const { y, progress } = useScrollState()

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SkipLink />
      <ScrollProgress progress={progress} />
      <LicenceStrip />
      <Header lifted={y > 50} />

      <main id="main-content">
        <Hero />
        <FinanceBand />
        <Services />
        <SeasonalBand />
        <Process />
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
