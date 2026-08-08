import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Truss — Architecture Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Testimonials />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
