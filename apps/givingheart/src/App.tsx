import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { CTA } from './components/CTA'
import { Projects } from './components/Projects'
import { About } from './components/About'
import { Volunteers } from './components/Volunteers'
import { Donate } from './components/Donate'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'GivingHeart — Charity & Donation Template'
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <CTA />
        <Projects />
        <About />
        <Volunteers />
        <Donate />
      </main>
      <Footer />
    </div>
  )
}
