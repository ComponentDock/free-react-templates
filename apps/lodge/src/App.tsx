import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { RoomBooking } from './components/RoomBooking'
import { Quote } from './components/Quote'
import { Facilities } from './components/Facilities'
import { Guestbook } from './components/Guestbook'
import { Instagram } from './components/Instagram'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Lodge — Luxury Hotel Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <RoomBooking />
        <Quote />
        <Facilities />
        <Guestbook />
        <Instagram />
      </main>
      <Footer />
    </div>
  )
}
