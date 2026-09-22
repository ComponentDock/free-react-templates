import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { BookingForm } from './components/BookingForm'
import { ServicesGrid } from './components/ServicesGrid'
import { WelcomeServices } from './components/WelcomeServices'
import { Rooms } from './components/Rooms'
import { Testimonials } from './components/Testimonials'
import { VideoHero } from './components/VideoHero'
import { Restaurant } from './components/Restaurant'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'RoxyGlow — Luxury Hotel & Resort'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-ink">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BookingForm />
        <ServicesGrid />
        <WelcomeServices />
        <Rooms />
        <Testimonials />
        <VideoHero />
        <Restaurant />
      </main>
      <Footer />
    </div>
  )
}
