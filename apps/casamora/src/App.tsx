import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { BookingBar } from './components/BookingBar'
import { About } from './components/About'
import { Rooms } from './components/Rooms'
import { Gallery } from './components/Gallery'
import { Testimonials } from './components/Testimonials'
import { Events } from './components/Events'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Casamora — Luxury Hotel Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white transition-colors">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BookingBar />
        <About />
        <Rooms />
        <Gallery />
        <Testimonials />
        <Events />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
