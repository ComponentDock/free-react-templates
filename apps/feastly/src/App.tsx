import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Banner } from './components/Banner'
import { Welcome } from './components/Welcome'
import { Menu } from './components/Menu'
import { ReservationCTA } from './components/ReservationCTA'
import { Specials } from './components/Specials'
import { Testimonials } from './components/Testimonials'
import { Updates } from './components/Updates'
import { BookingForm } from './components/BookingForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Feastly — Restaurant Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors">
      <Navbar />
      <main className="flex-1">
        <Banner />
        <Welcome />
        <Menu />
        <ReservationCTA />
        <Specials />
        <Testimonials />
        <Updates />
        <BookingForm />
      </main>
      <Footer />
    </div>
  )
}
