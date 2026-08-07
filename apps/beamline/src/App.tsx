import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Process } from './components/Process'
import { Quote } from './components/Quote'
import { Stats } from './components/Stats'
import { Projects } from './components/Projects'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Beamline — Architecture Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Process />
        <Quote />
        <Stats />
        <Projects />
        <Testimonials />
        <Pricing />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
