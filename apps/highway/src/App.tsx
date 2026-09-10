import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SearchFilter } from './components/SearchFilter'
import { Services } from './components/Services'
import { VehicleCarousel } from './components/VehicleCarousel'
import { HowItWorks } from './components/HowItWorks'
import { Testimonials } from './components/Testimonials'
import { About } from './components/About'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Highway — Car Rental Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <Navbar />
      <main>
        <Hero />
        <SearchFilter />
        <Services />
        <VehicleCarousel />
        <HowItWorks />
        <Testimonials />
        <About />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
