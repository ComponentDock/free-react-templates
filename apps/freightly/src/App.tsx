import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Features } from './components/Features'
import { Calculator } from './components/Calculator'
import { Testimonials } from './components/Testimonials'
import { Cta } from './components/Cta'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Freightly — Logistics Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <Calculator />
        <Testimonials />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
