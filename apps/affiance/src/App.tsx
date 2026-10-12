import { useEffect } from 'react'
import { Footer } from './components/Footer'
import { BrideGroom } from './components/BrideGroom'
import { Countdown } from './components/Countdown'
import { FamilyFriends } from './components/FamilyFriends'
import { Gallery } from './components/Gallery'
import { Greetings } from './components/Greetings'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LoveStory } from './components/LoveStory'
import { Preloader } from './components/Preloader'
import { RsvpForm } from './components/RsvpForm'
import { WhenWhere } from './components/WhenWhere'
import { PAGE_TITLE, SKIP_TARGET } from './lib/site'
import { pageClass, skipLinkClass } from './lib/styles'

/**
 * Affiance — one wedding page: the floating bar over the couple's photograph, the brand-pink
 * countdown pulled up over the hero's bottom edge, the alternating bride & groom band, the
 * love-story timeline on a fixed photograph, the guest-message carousel, the attendants, when &
 * where, the invitation and the no-gutter gallery, over the foot of the page. The first-paint cover
 * closes the document, exactly where the design keeps it.
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
        <Countdown />
        <BrideGroom />
        <LoveStory />
        <Greetings />
        <FamilyFriends />
        <WhenWhere />
        <RsvpForm />
        <Gallery />
      </main>

      <Footer />
      <Preloader />
    </div>
  )
}
