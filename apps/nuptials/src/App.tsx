import { useEffect } from 'react'
import { About } from './components/About'
import { Countdown } from './components/Countdown'
import { DateStrip } from './components/DateStrip'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { InfoCards } from './components/InfoCards'
import { Navbar } from './components/Navbar'
import { Reservation } from './components/Reservation'
import { PAGE_TITLE, SKIP_TARGET } from './lib/site'
import { pageClass, skipLinkClass } from './lib/styles'

/**
 * Nuptials — one page from the couple's photograph to the reservation form: the story of the bride
 * and the groom, the date bar, the six-frame gallery, the clock, the three information plates and
 * the reply band over the night photograph, closed by the footer.
 */
export function App() {
  useEffect(() => {
    document.title = PAGE_TITLE
  }, [])

  return (
    <div id="top" className={pageClass}>
      <a href={SKIP_TARGET} className={skipLinkClass}>
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />
        <About />
        <DateStrip />
        <Gallery />
        <Countdown />
        <InfoCards />
        <Reservation />
      </main>

      <Footer />
    </div>
  )
}
