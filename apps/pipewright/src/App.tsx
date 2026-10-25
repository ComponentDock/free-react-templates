import { BackToTop, CookieStrip, ScrollProgress, SkipLink } from './components/Chrome'
import { Contact } from './components/Contact'
import { Emergency } from './components/Emergency'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Owner } from './components/Owner'
import { ServiceAreas } from './components/ServiceAreas'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { useScrollState } from './lib/useScrollState'

/**
 * One page in the reference's order: skip link and progress bar, sticky
 * header, then the hero → priced list → owner testimony → out-of-hours strip →
 * towns → reviews → closing band, and the footer with the two fixed surfaces.
 */
export function App() {
  const { y, progress } = useScrollState()

  return (
    <div id="top" className="min-h-screen bg-ink-50 text-ink-800">
      <SkipLink />
      <ScrollProgress progress={progress} />
      <Header lifted={y > 50} />

      <main id="main-content">
        <Hero />
        <Services />
        <Owner />
        <Emergency />
        <ServiceAreas />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <CookieStrip />
      <BackToTop y={y} />
    </div>
  )
}
