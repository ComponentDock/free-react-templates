import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Specialization } from './components/Specialization'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { FunFacts } from './components/FunFacts'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Structura — Architecture & Interior Design Studio'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Specialization />
        <Projects />
        <Services />
        <FunFacts />
        <Team />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
