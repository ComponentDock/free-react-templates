import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Stats } from './components/Stats'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Pricing } from './components/Pricing'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Shingle — Roofing Company Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-mist transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Stats />
        <Services />
        <Projects />
        <Testimonials />
        <Blog />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
