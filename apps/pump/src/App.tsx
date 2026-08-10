import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Stats } from './components/Stats'
import { About } from './components/About'
import { Coaches } from './components/Coaches'
import { Classes } from './components/Classes'
import { Pricing } from './components/Pricing'
import { Testimony } from './components/Testimony'
import { Blog } from './components/Blog'
import { Appointment } from './components/Appointment'
import { Gallery } from './components/Gallery'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Pump — Gym & Fitness'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white transition-colors dark:bg-gray-950">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Stats />
        <About />
        <Coaches />
        <Classes />
        <Pricing />
        <Testimony />
        <Blog />
        <Appointment />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}
