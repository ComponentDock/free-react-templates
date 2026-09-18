import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Benefits } from './components/Benefits'
import { Categories } from './components/Categories'
import { About } from './components/About'
import { Arrivals } from './components/Arrivals'
import { CallToAction } from './components/CallToAction'
import { Blog } from './components/Blog'
import { Testimonials } from './components/Testimonials'
import { Instagram } from './components/Instagram'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Petal — Fresh Flower & Gift Shop'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Categories />
        <About />
        <Arrivals />
        <CallToAction />
        <Blog />
        <Testimonials />
        <Instagram />
      </main>
      <Footer />
    </div>
  )
}
