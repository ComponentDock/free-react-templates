import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { About } from './components/About'
import { Testimonials } from './components/Testimonials'
import { Gallery } from './components/Gallery'
import { Courses } from './components/Courses'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Sportium — Fitness & Gym Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Testimonials />
        <Gallery />
        <Courses />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
