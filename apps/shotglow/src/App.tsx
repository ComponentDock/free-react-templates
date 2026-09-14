import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Gallery } from './components/Gallery'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Shotglow — Photography Studio Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-400">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Services />
        <Testimonials />
        <Pricing />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
