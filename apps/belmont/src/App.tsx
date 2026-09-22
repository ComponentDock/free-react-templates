import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { BookingBar } from './components/BookingBar'
import { Intro } from './components/Intro'
import { BigRoom } from './components/BigRoom'
import { Rooms } from './components/Rooms'
import { Gallery } from './components/Gallery'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Belmont — Luxury Hotel Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BookingBar />
        <Intro />
        <BigRoom />
        <Rooms />
        <Gallery />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
