import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Features } from './components/Features'
import { Projects } from './components/Projects'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Velox — Freelancer Portfolio Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Projects />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
