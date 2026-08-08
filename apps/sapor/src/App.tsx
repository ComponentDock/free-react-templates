import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Menu } from './components/Menu'
import { Testimonials } from './components/Testimonials'
import { Reservation } from './components/Reservation'
import { Gallery } from './components/Gallery'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Sapor — Restaurant Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Testimonials />
        <Reservation />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}
