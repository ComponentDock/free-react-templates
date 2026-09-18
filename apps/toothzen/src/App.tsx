import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Features } from './components/Features'
import { About } from './components/About'
import { Team } from './components/Team'
import { Counter } from './components/Counter'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Toothzen — Dental Clinic Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-tooth-text">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <About />
        <Team />
        <Counter />
        <Testimonials />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
