import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Countdown } from './components/Countdown'
import { LoveStory } from './components/LoveStory'
import { Gallery } from './components/Gallery'
import { Program } from './components/Program'
import { Rsvp } from './components/Rsvp'
import { Location } from './components/Location'
import { Footer } from './components/Footer'
import { skipLabel } from './data'

export function App() {
  useEffect(() => {
    document.title = 'Knot — Wedding Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        {skipLabel}
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Countdown />
        <LoveStory />
        <Gallery />
        <Program />
        <Rsvp />
        <Location />
      </main>
      <Footer />
    </div>
  )
}
