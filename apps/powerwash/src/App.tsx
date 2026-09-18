import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { StatsCounter } from './components/StatsCounter'
import { Services } from './components/Services'
import { BeforeAfter } from './components/BeforeAfter'
import { Testimonials } from './components/Testimonials'
import { Gallery } from './components/Gallery'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'PowerWash — Pressure Washing Services'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-dark-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <StatsCounter />
        <Services />
        <BeforeAfter />
        <Testimonials />
        <Gallery />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
