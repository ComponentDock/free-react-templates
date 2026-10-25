import { BackToTop, CookieStrip, Preloader, ScrollProgress, SkipLink } from './components/Chrome'
import { Areas } from './components/Areas'
import { Contact } from './components/Contact'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Incentives } from './components/Incentives'
import { LicenceBar } from './components/LicenceBar'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { WhyUs } from './components/WhyUs'
import { useScrollState } from './lib/useScrollState'

/**
 * One page in the reference's band order: licence strip, sticky header, grey
 * hero with the quote card, the dark incentive ledger, the chart band, the
 * hairline service grid, the town list, the reviews, the FAQ, the lime closing
 * band — then the footer with the cookie strip and the back-to-top disc over it.
 */
export function App() {
  const { y, progress } = useScrollState()

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-ink-500 dark:bg-gray-950 dark:text-gray-200"
    >
      <Preloader />
      <SkipLink />
      <ScrollProgress progress={progress} />
      <LicenceBar />
      <Header lifted={y > 50} />

      <main id="main-content">
        <Hero />
        <Incentives />
        <WhyUs />
        <Services />
        <Areas />
        <Testimonials />
        <Faq />
        <Contact />
      </main>

      <Footer />
      <CookieStrip />
      <BackToTop y={y} />
    </div>
  )
}
