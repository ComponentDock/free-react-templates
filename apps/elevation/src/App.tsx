import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Concept } from './components/Concept'
import { Features } from './components/Features'
import { FunFacts } from './components/FunFacts'
import { Testimonials } from './components/Testimonials'
import { Projects } from './components/Projects'
import { ClientsLogo } from './components/ClientsLogo'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Elevation — Architecture Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Concept />
        <Features />
        <FunFacts />
        <Testimonials />
        <Projects />
        <ClientsLogo />
      </main>
      <Footer />
    </div>
  )
}
