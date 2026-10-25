import { Areas } from './components/Areas'
import { BackToTop, CookieStrip, Preloader, ScrollProgress, SkipLink } from './components/Chrome'
import { Closing } from './components/Closing'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LicenceBar } from './components/LicenceBar'
import { Measure } from './components/Measure'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { WhyUs } from './components/WhyUs'
import { useScrollState } from './lib/useScrollState'

/**
 * One page in the reference's band order: licence strip, sticky header, the
 * ink-50 hero with the booking card, what we measure, the awkward part, the
 * hairline service grid, the town list, the reviews carousel, the FAQ, the
 * violet closing band — then the footer with the cookie dialog and the
 * back-to-top disc over it.
 */
export function App() {
  const { y, progress } = useScrollState()

  return (
    <div id="top" className="min-h-screen bg-white text-ink-500 dark:bg-gray-950 dark:text-gray-300">
      <Preloader />
      <SkipLink />
      <ScrollProgress progress={progress} />
      <LicenceBar />
      <Header lifted={y > 50} />

      <main id="main-content">
        <Hero />
        <Measure />
        <WhyUs />
        <Services />
        <Areas />
        <Testimonials />
        <Faq />
        <Closing />
      </main>

      <Footer />
      <CookieStrip />
      <BackToTop y={y} />
    </div>
  )
}
