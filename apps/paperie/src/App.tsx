import { useEffect } from 'react'
import { Footer } from './components/Footer'
import { Gift } from './components/Gift'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MapBand } from './components/MapBand'
import { Memories } from './components/Memories'
import { OurStory } from './components/OurStory'
import { Partners } from './components/Partners'
import { RsvpForm } from './components/RsvpForm'
import { Schedule } from './components/Schedule'
import { ScrollTop } from './components/ScrollTop'
import { PAGE_TITLE, SKIP_TARGET } from './lib/site'
import { pageClass, skipLinkClass } from './lib/styles'

/**
 * Paperie — one wedding page: the invitation over the couple's photograph, the story band, the
 * running order of the day on its cream band, the gallery, the best gift, the guest book, the map,
 * the partners and the foot of the page.
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
        <OurStory />
        <Schedule />
        <Memories />
        <Gift />
        <RsvpForm />
        <MapBand />
        <Partners />
      </main>

      <Footer />
      <ScrollTop />
    </div>
  )
}
