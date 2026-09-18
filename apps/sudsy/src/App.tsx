import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { Services } from './components/Services'
import { VideoCTA } from './components/VideoCTA'
import { Footer } from './components/Footer'
import { useEffect } from 'react'

export function App() {
  useEffect(() => {
    document.title = 'Sudsy — Car Wash & Detailing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-mist">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Testimonials />
        <VideoCTA />
      </main>
      <Footer />
    </div>
  )
}
