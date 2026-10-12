import { useEffect } from 'react'
import { BackToTop } from './components/BackToTop'
import { Countdown } from './components/Countdown'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { GiftBand } from './components/GiftBand'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LoveStory } from './components/LoveStory'
import { MapBand } from './components/MapBand'
import { Preloader } from './components/Preloader'
import { Registry } from './components/Registry'
import { RsvpForm } from './components/RsvpForm'
import { WeddingInfo } from './components/WeddingInfo'
import { PAGE_TITLE, SKIP_TARGET } from './lib/site'
import { pageClass, skipLinkClass } from './lib/styles'

/**
 * Matrimony — one wedding page: the white bar over the couple's photograph, the love story with its
 * scarlet panel, the floral band's three event cards, the scarlet countdown strip pulled up over
 * them, the four-tile gallery, the gift band, the reply card, the registry strip, the grayscale map
 * band and the near-black foot of the page. The first-paint cover closes the document, exactly where
 * the design keeps it.
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
        <LoveStory />
        <WeddingInfo />
        <Countdown />
        <Gallery />
        <GiftBand />
        <RsvpForm />
        <Registry />
        <MapBand />
      </main>

      <Footer />
      <BackToTop />
      <Preloader />
    </div>
  )
}
