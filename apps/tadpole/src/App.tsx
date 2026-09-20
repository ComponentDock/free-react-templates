import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { About } from './components/About'
import { Programs } from './components/Programs'
import { Teachers } from './components/Teachers'
import { Events } from './components/Events'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Tadpole — Kindergarten & Preschool Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-body text-gray-700">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Programs />
        <Teachers />
        <Events />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
