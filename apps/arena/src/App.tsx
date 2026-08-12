import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ClientLogos } from './components/ClientLogos'
import { About } from './components/About'
import { LiveStreams } from './components/LiveStreams'
import { LatestWar } from './components/LatestWar'
import { Gallery } from './components/Gallery'
import { UpcomingFighter } from './components/UpcomingFighter'
import { Pricing } from './components/Pricing'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Arena — Gaming Template'
  }, [])

  return (
    <div className="min-h-screen bg-navy-950 font-sans text-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-magenta-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <ClientLogos />
        <About />
        <LiveStreams />
        <LatestWar />
        <Gallery />
        <UpcomingFighter />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
