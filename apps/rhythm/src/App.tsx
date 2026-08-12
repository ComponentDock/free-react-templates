import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Events } from './components/Events'
import { About } from './components/About'
import { Services } from './components/Services'
import { Tracks } from './components/Tracks'
import { Youtube } from './components/Youtube'
import { Countdown } from './components/Countdown'
import { Footer } from './components/Footer'

// Rhythm — single-page DJ / music artist template. Section order matches the
// original design: header → hero → events → about → services → tracks →
// youtube feed → countdown → footer.
export function App() {
  useEffect(() => {
    document.title = 'Rhythm — DJ & Music Artist Template'
  }, [])

  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <Navbar />
      <main>
        <Hero />
        <Events />
        <About />
        <Services />
        <Tracks />
        <Youtube />
        <Countdown />
      </main>
      <Footer />
    </div>
  )
}
