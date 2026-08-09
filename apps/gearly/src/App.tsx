import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { About } from './components/About'
import { ApplicationForm } from './components/ApplicationForm'
import { Pricing } from './components/Pricing'
import { Team } from './components/Team'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Gearly — Driving School Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <About />
        <ApplicationForm />
        <Pricing />
        <Team />
      </main>
      <Footer />
    </div>
  )
}
