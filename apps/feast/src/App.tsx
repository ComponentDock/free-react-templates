import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { VideoBanner } from './components/VideoBanner'
import { PopularOrders } from './components/PopularOrders'
import { Testimonials } from './components/Testimonials'
import { Brands } from './components/Brands'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Feast — Catering Service Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <VideoBanner />
        <PopularOrders />
        <Testimonials />
        <Brands />
      </main>
      <Footer />
    </div>
  )
}
