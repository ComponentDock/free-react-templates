import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { BookingForm } from './components/BookingForm'
import { Services } from './components/Services'
import { Rooms } from './components/Rooms'
import { Restaurant } from './components/Restaurant'
import { Counter } from './components/Counter'
import { About } from './components/About'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Cayo — Hotel Reservation Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BookingForm />
        <Services />
        <Rooms />
        <Restaurant />
        <Counter />
        <About />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
