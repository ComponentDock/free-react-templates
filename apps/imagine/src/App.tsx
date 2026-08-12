import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

/* Imagine — a creative agency landing page. Section order mirrors the
   source template 1:1: header → hero → services → about → projects →
   skills → team → testimonials → blog → footer. */

export function App() {
  useEffect(() => {
    document.title = 'Imagine — Creative Agency'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-ink">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Projects />
        <Skills />
        <Team />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
