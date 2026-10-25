import { useCallback, useState } from 'react'
import {
  BackToTop,
  CookieStrip,
  MobileCtaBar,
  ScrollProgress,
  SkipLink,
} from './components/Chrome'
import { Areas } from './components/Areas'
import { Contact } from './components/Contact'
import { Credentials } from './components/Credentials'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { QuoteDialog } from './components/QuoteDialog'
import { Rates } from './components/Rates'
import { StatsStrip } from './components/StatsStrip'
import { Testimonials } from './components/Testimonials'
import { Work } from './components/Work'
import { useScrollState } from './lib/useScrollState'

/**
 * One page in the reference's band order: sticky header, cream hero with the
 * typewriter and the price stat row, the counter strip, the published rates
 * table, three case studies, the slate coverage band, the four documents, the
 * reviews, the questions, the orange closing band — then the dark footer with
 * the cookie strip, the back-to-top disc and the phone bar over it.
 */
export function App() {
  const { y, progress } = useScrollState()
  const [quoteOpen, setQuoteOpen] = useState(false)
  const openQuote = useCallback(() => setQuoteOpen(true), [])
  const closeQuote = useCallback(() => setQuoteOpen(false), [])

  return (
    <div
      id="top"
      className="min-h-screen bg-white pb-[69px] text-gray-600 lg:pb-0 dark:bg-gray-950 dark:text-gray-300"
    >
      <SkipLink />
      <ScrollProgress progress={progress} />
      <Header lifted={y > 50} onOpenQuote={openQuote} />

      <main id="main-content">
        <Hero onOpenQuote={openQuote} />
        <StatsStrip />
        <Rates />
        <Work />
        <Areas />
        <Credentials />
        <Testimonials />
        <Faq />
        <Contact onOpenQuote={openQuote} />
      </main>

      <Footer />
      <CookieStrip />
      <BackToTop y={y} />
      <MobileCtaBar onOpenQuote={openQuote} />
      <QuoteDialog open={quoteOpen} onClose={closeQuote} />
    </div>
  )
}
