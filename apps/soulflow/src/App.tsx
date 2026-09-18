import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Welcome } from './components/Welcome'
import { Programs } from './components/Programs'
import { Video } from './components/Video'
import { Pricing } from './components/Pricing'
import { Features } from './components/Features'
import { Gallery } from './components/Gallery'
import { Events } from './components/Events'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Soulflow — Yoga & Meditation Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <Programs />
        <Video />
        <Pricing />
        <Features />
        <Gallery />
        <Events />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
