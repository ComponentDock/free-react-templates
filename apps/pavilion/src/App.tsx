import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { BookingBar } from './components/BookingBar'
import { About } from './components/About'
import { Rooms } from './components/Rooms'
import { Dining } from './components/Dining'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Gallery } from './components/Gallery'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Pavilion — Hotel Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BookingBar />
        <About />
        <Rooms />
        <Dining />
        <Testimonials />
        <Blog />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}
