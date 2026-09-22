import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { RoomAvailability } from './components/RoomAvailability'
import { About } from './components/About'
import { Facilities } from './components/Facilities'
import { Guestbook } from './components/Guestbook'
import { Instagram } from './components/Instagram'
import { RoomPics } from './components/RoomPics'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'GrandStay — Hotel & Hospitality Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-ink">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <RoomAvailability />
        <About />
        <Facilities />
        <Guestbook />
        <Instagram />
        <RoomPics />
      </main>
      <Footer />
    </div>
  )
}
