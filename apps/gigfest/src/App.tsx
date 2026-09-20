import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Performers } from './components/Performers'
import { About } from './components/About'
import { ProgramDetails } from './components/ProgramDetails'
import { MapSection } from './components/MapSection'
import { Sponsors } from './components/Sponsors'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'GigFest — Concert Event Template'
  }, [])

  return (
    <div className="min-h-screen bg-dark-bg text-body-text">
      <Navbar />
      <main>
        <Hero />
        <Performers />
        <About />
        <ProgramDetails />
        <MapSection />
        <Sponsors />
      </main>
      <Footer />
    </div>
  )
}
