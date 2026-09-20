import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Schedule } from './components/Schedule'
import { Gallery } from './components/Gallery'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { Speakers } from './components/Speakers'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Tribune — Conference Landing Page'
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Schedule />
        <Gallery />
        <Testimonials />
        <Pricing />
        <Speakers />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
