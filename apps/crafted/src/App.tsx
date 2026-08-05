import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Brands } from './components/Brands'
import { Services } from './components/Services'
import { About } from './components/About'
import { Portfolio } from './components/Portfolio'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'
import { CtaBand } from './components/CtaBand'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Crafted — Creative Agency Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Brands />
        <Services />
        <About />
        <Portfolio />
        <Team />
        <Testimonials />
        <CtaBand />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
