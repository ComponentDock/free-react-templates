import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Achievements } from './components/Achievements'
import { HowItWorks } from './components/HowItWorks'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Sketch — Design Agency Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Achievements />
        <HowItWorks />
        <Services />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
