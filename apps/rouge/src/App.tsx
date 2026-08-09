import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Brands } from './components/Brands'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Rouge — Beauty Salon Template'
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 font-sans text-white">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Testimonials />
        <Brands />
      </main>
      <Footer />
    </div>
  )
}
