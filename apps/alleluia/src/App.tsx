import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Events } from './components/Events'
import { Sermons } from './components/Sermons'
import { Gallery } from './components/Gallery'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Alleluia — Church Website Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-opensans text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <Sermons />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}
