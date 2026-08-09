import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Prices } from './components/Prices'
import { Categories } from './components/Categories'
import { Services } from './components/Services'
import { Instagram } from './components/Instagram'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Slick — Barber Shop Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Prices />
        <Categories />
        <Services />
        <Instagram />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
