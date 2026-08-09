import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Pricing } from './components/Pricing'
import { Team } from './components/Team'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Snip — Barber Shop Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-navy transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Team />
      </main>
      <Footer />
    </div>
  )
}
