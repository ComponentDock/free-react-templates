import { useEffect } from 'react'
import { Album } from './components/Album'
import { Countdown } from './components/Countdown'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Rsvp } from './components/Rsvp'
import { Schedule } from './components/Schedule'
import { SearchSheet } from './components/SearchSheet'
import { Story } from './components/Story'
import { Venue } from './components/Venue'
import { PAGE_TITLE, SKIP_TARGET } from './lib/site'
import { pageClass, skipLinkClass } from './lib/styles'
import { useDisclosure } from './lib/use-disclosure'

/**
 * Cherish — a wedding day page: the monogram header over a full-bleed photograph, the story block
 * with its round portrait between two cards, the countdown to the day, the eight-frame album, the
 * day's running order on one rail, the reply card that floats out of its band, the three venue
 * cards and the foot of the page. The header's folded-away menu and the search sheet are the only
 * two pieces of state on it.
 */
export function App() {
  const menu = useDisclosure(false)
  const search = useDisclosure(false)

  useEffect(() => {
    document.title = PAGE_TITLE
  }, [])

  return (
    <div id="top" className={pageClass}>
      <a href={SKIP_TARGET} className={skipLinkClass}>
        Skip to content
      </a>

      <Navbar
        isMenuOpen={menu.isOpen}
        onToggleMenu={menu.toggle}
        onOpenSearch={search.open}
      />

      <SearchSheet isOpen={search.isOpen} onClose={search.close} />

      <main>
        <Hero />
        <Story />
        <Countdown />
        <Album />
        <Schedule />
        <Rsvp />
        <Venue />
      </main>

      <Footer />
    </div>
  )
}
