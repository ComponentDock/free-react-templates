import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { About } from './components/About'
import { Quote } from './components/Quote'
import { Cta } from './components/Cta'
import { Programs } from './components/Programs'
import { Pricing } from './components/Pricing'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Prowess — Gym & Fitness Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white transition-colors dark:bg-gray-950">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Intro />
        <About />
        <Quote />
        <Cta />
        <Programs />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
