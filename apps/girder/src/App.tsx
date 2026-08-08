import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { Testimonials } from './components/Testimonials'
import { CallToAction } from './components/CallToAction'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Girder — Architecture Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
