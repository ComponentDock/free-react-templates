import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeaturesOverlap } from './components/FeaturesOverlap'
import { About } from './components/About'
import { Carousel } from './components/Carousel'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { Counter } from './components/Counter'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Proton — Business & Agency Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <FeaturesOverlap />
        <About />
        <Carousel />
        <Services />
        <Portfolio />
        <Counter />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
