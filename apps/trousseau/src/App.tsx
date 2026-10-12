import { useEffect } from 'react'
import { Arrangement } from './components/Arrangement'
import { Footer } from './components/Footer'
import { GiftRegistry } from './components/GiftRegistry'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Journey } from './components/Journey'
import { Moments } from './components/Moments'
import { Reservation } from './components/Reservation'
import { Story } from './components/Story'
import { Timer } from './components/Timer'
import { PAGE_TITLE, SKIP_TARGET } from './lib/site'
import { pageClass, skipLinkClass } from './lib/styles'

/**
 * Trousseau — one wedding page: the slim header over the couple's photograph, the invitation band
 * between two ornate frames, the countdown to the day, the journey's portraits around its four
 * written cards, the six-frame moments gallery, the reservation card, the running order of the day,
 * the gift registry and the foot of the page.
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
        <Timer />
        <Journey />
        <Moments />
        <Reservation />
        <Arrangement />
        <GiftRegistry />
      </main>

      <Footer />
    </div>
  )
}
