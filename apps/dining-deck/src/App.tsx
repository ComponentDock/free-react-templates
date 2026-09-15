import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Stats } from './components/Stats'
import { Features } from './components/Features'
import { Reservation } from './components/Reservation'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'DiningDeck — Restaurant Landing Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Features />
        <Reservation />
      </main>
      <Footer />
    </div>
  )
}
