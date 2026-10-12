import { useEffect } from 'react'
import { CtaBand } from './components/CtaBand'
import { Destinations } from './components/Destinations'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Interests } from './components/Interests'
import { Listings } from './components/Listings'
import { Navbar } from './components/Navbar'
import { Testimonials } from './components/Testimonials'
import { MAIN_ID, PAGE_TITLE, SKIP_LABEL } from './lib/site'
import { pageClass, skipLinkClass } from './lib/styles'

/**
 * Locale — one page from the search cover to the pale footer: the six city destinations, the mixed
 * interest grid, the wrapping listings carousel, the find-more band, the three steps and the quote
 * slider, with the bar riding over the hero.
 */
export function App() {
  useEffect(() => {
    document.title = PAGE_TITLE
  }, [])

  return (
    <div className={pageClass}>
      <a href={`#${MAIN_ID}`} className={skipLinkClass}>
        {SKIP_LABEL}
      </a>

      <Navbar />

      <main id={MAIN_ID} tabIndex={-1}>
        <Hero />
        <Destinations />
        <Interests />
        <Listings />
        <CtaBand />
        <HowItWorks />
        <Testimonials />
      </main>

      <Footer />
    </div>
  )
}
