import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Courses } from './components/Courses'
import { Reservation } from './components/Reservation'
import { Chef } from './components/Chef'
import { FoodGallery } from './components/FoodGallery'
import { Brands } from './components/Brands'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Carnivor — Steakhouse Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Courses />
        <Reservation />
        <Chef />
        <FoodGallery />
        <Brands />
      </main>
      <Footer />
    </div>
  )
}
