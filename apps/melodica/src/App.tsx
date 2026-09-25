import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Tracks } from './components/Tracks'
import { Events } from './components/Events'
import { Gallery } from './components/Gallery'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Melodica — Music Artist Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-deep-950 text-white transition-colors">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Tracks />
        <Events />
        <Gallery />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
