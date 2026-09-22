import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Portfolio } from './components/Portfolio'
import { ChooseUs } from './components/ChooseUs'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Graincraft — Woodworking & Construction'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Portfolio />
        <ChooseUs />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
