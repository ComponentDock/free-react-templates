import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Counters } from './components/Counters'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { Team } from './components/Team'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Pulse — Digital Agency Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Counters />
        <Services />
        <Portfolio />
        <Team />
        <Pricing />
        <Testimonials />
        <Blog />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
