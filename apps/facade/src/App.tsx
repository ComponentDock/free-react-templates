import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { CallToAction } from './components/CallToAction'
import { Testimonials } from './components/Testimonials'
import { Brands } from './components/Brands'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Facade — Architecture Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <About />
        <Projects />
        <CallToAction />
        <Testimonials />
        <Brands />
      </main>
      <Footer />
    </div>
  )
}
