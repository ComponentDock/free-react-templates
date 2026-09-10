import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Specials } from './components/Specials'
import { Awards } from './components/Awards'
import { Testimonials } from './components/Testimonials'
import { Reservation } from './components/Reservation'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Brasserie — Premium Restaurant Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Specials />
        <Awards />
        <Testimonials />
        <Reservation />
      </main>
      <Footer />
    </div>
  )
}
