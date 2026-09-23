import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Achievements } from './components/Achievements'
import { HowItWorks } from './components/HowItWorks'
import { Services } from './components/Services'
import { Testimonial } from './components/Testimonial'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Atelier — Creative Agency Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-navy">
      <Navbar />
      <main>
        <Hero />
        <Achievements />
        <HowItWorks />
        <Services />
        <Testimonial />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
