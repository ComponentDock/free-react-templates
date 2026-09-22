import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { ReservationBar } from './components/ReservationBar'
import { Services } from './components/Services'
import { Rooms } from './components/Rooms'
import { DiningBar } from './components/DiningBar'
import { Blog } from './components/Blog'
import { Testimonials } from './components/Testimonials'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'

export function App() {
  useEffect(() => {
    document.title = 'LuxStay — Luxury Hotel Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-body text-text-body transition-colors dark:bg-gray-950 dark:text-white">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <HeroSlider />
        <ReservationBar />
        <Services />
        <Rooms />
        <DiningBar />
        <Blog />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
