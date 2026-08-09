import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Team } from './components/Team'
import { Discount } from './components/Discount'
import { Work } from './components/Work'
import { Pricing } from './components/Pricing'
import { Counters } from './components/Counters'
import { Blog } from './components/Blog'
import { Appointment } from './components/Appointment'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Bloom — Beauty Salon Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Team />
        <Discount />
        <Work />
        <Pricing />
        <Counters />
        <Blog />
        <Appointment />
      </main>
      <Footer />
    </div>
  )
}
