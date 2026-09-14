import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { Blog } from './components/Blog'
import { Counters } from './components/Counters'
import { Testimonials } from './components/Testimonials'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Packr — Personal Portfolio Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-mono text-ink">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Portfolio />
        <Blog />
        <Counters />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
