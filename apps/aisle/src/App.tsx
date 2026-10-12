import { useEffect } from 'react'
import { Ceremony } from './components/Ceremony'
import { Contact } from './components/Contact'
import { Countdown } from './components/Countdown'
import { Details } from './components/Details'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Story } from './components/Story'
import { PAGE_TITLE, SKIP_TARGET } from './lib/site'
import { pageClass, skipLinkClass } from './lib/styles'

/**
 * Aisle — one page from the floating bar over the cover photograph to the patterned footer: the
 * story band, the countdown, the wedding-day timeline, the ceremony call to action, the gallery,
 * and the 50/50 contact split with the venue panel.
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

      <Header />

      <main>
        <Hero />
        <Story />
        <Countdown />
        <Details />
        <Ceremony />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
