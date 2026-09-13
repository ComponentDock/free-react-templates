import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { BookingForm } from './components/BookingForm'
import { Intro } from './components/Intro'
import { RoomsShowcase } from './components/RoomsShowcase'
import { Discover } from './components/Discover'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Seaview — Hotel Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BookingForm />
        <Intro />
        <RoomsShowcase />
        <Discover />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
