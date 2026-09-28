import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TopDishes } from './components/TopDishes'
import { Menu } from './components/Menu'
import { Gallery } from './components/Gallery'
import { Testimonials } from './components/Testimonials'
import { Reservation } from './components/Reservation'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Bites — Food Bar & Restaurant Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-body">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TopDishes />
        <Menu />
        <Gallery />
        <Testimonials />
        <Reservation />
      </main>
      <Footer />
    </div>
  )
}
