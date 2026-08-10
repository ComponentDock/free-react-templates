import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { Services } from './components/Services'
import { Programs } from './components/Programs'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { Counter } from './components/Counter'
import { Blog } from './components/Blog'
import { Gallery } from './components/Gallery'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Shanti — Yoga & Wellness'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Programs />
        <Pricing />
        <Testimonials />
        <Counter />
        <Blog />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}
