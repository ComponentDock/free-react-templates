import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { About } from './components/About'
import { Gallery } from './components/Gallery'
import { Services } from './components/Services'
import { Testimonial } from './components/Testimonial'
import { Pricing } from './components/Pricing'
import { Instagram } from './components/Instagram'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Shutterly — Photographer Portfolio'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <Navbar />
      <main>
        <HeroSlider />
        <About />
        <Gallery />
        <Services />
        <Testimonial />
        <Pricing />
        <Instagram />
      </main>
      <Footer />
    </div>
  )
}
