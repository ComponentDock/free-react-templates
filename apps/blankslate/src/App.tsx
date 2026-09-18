import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Counter } from './components/Counter'
import { Projects } from './components/Projects'
import { Testimonials } from './components/Testimonials'
import { CaseStudy } from './components/CaseStudy'
import { Pricing } from './components/Pricing'
import { Partner } from './components/Partner'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'BlankSlate — Business Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Counter />
        <Projects />
        <Testimonials />
        <CaseStudy />
        <Pricing />
        <Partner />
      </main>
      <Footer />
    </div>
  )
}
