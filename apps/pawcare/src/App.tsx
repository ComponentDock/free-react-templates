import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Testimonials } from './components/Testimonials'
import { Team } from './components/Team'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Pawcare — Pet Care Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Team />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
