import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Countdown } from './components/Countdown'
import { About } from './components/About'
import { Features } from './components/Features'
import { Sermons } from './components/Sermons'
import { Donate } from './components/Donate'
import { Events } from './components/Events'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Creeds — Church Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <About />
        <Features />
        <Sermons />
        <Donate />
        <Events />
      </main>
      <Footer />
    </div>
  )
}
