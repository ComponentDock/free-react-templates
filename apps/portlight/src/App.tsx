import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { BookingBar } from './components/BookingBar'
import { About } from './components/About'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Rooms } from './components/Rooms'
import { Restaurant } from './components/Restaurant'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Portlight — Hotel Reservation Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BookingBar />
        <About />
        <Services />
        <Testimonials />
        <Rooms />
        <Restaurant />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
