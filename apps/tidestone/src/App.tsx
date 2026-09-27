import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { BookingForm } from './components/BookingForm'
import { Welcome } from './components/Welcome'
import { ExploreRooms } from './components/ExploreRooms'
import { VideoSection } from './components/VideoSection'
import { SpecialFacilities } from './components/SpecialFacilities'
import { Testimonials } from './components/Testimonials'
import { NewsEvents } from './components/NewsEvents'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Tidestone — Luxury Hotel Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BookingForm />
        <Welcome />
        <ExploreRooms />
        <VideoSection />
        <SpecialFacilities />
        <Testimonials />
        <NewsEvents />
      </main>
      <Footer />
    </div>
  )
}
