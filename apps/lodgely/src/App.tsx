import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { BookingForm } from './components/BookingForm'
import { Welcome } from './components/Welcome'
import { Rooms } from './components/Rooms'
import { Photos } from './components/Photos'
import { RestaurantMenu } from './components/RestaurantMenu'
import { Testimonials } from './components/Testimonials'
import { Events } from './components/Events'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Lodgely — Luxury Hotel Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-body transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BookingForm />
        <Welcome />
        <Rooms />
        <Photos />
        <RestaurantMenu />
        <Testimonials />
        <Events />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
