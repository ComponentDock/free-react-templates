import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Process } from './components/Process'
import { Services } from './components/Services'
import { CtaBand } from './components/CtaBand'
import { Testimonials } from './components/Testimonials'
import { Stats } from './components/Stats'
import { About } from './components/About'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Presswell — Laundry Service Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-navy transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Process />
        <Services />
        <CtaBand />
        <Testimonials />
        <Stats />
        <About />
      </main>
      <Footer />
    </div>
  )
}
