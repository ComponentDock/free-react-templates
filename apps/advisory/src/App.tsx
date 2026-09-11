import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Accordion } from './components/Accordion'
import { Testimonials } from './components/Testimonials'
import { CaseStudies } from './components/CaseStudies'
import { Team } from './components/Team'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Advisory — Business Consulting Landing Page'
  }, [])

  return (
    <div className="min-h-screen bg-paper font-body text-text">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Accordion />
        <Testimonials />
        <CaseStudies />
        <Team />
      </main>
      <Footer />
    </div>
  )
}
