import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Rooms } from './components/Rooms'
import { Amenities } from './components/Amenities'
import { Gallery } from './components/Gallery'
import { Testimonials } from './components/Testimonials'
import { BookingCta } from './components/BookingCta'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Sovereign — Hotel Booking'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-ink">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Rooms />
        <Amenities />
        <Gallery />
        <Testimonials />
        <BookingCta />
      </main>
      <Footer />
    </div>
  )
}
