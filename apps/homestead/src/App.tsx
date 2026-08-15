import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Properties } from './components/Properties'
import { HowItWorks } from './components/HowItWorks'
import { About } from './components/About'
import { Counter } from './components/Counter'
import { Testimonials } from './components/Testimonials'
import { Agents } from './components/Agents'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Homestead — Real Estate Agency Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-body antialiased">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Properties />
        <HowItWorks />
        <About />
        <Counter />
        <Testimonials />
        <Agents />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
