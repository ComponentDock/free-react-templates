import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Overview } from './components/Overview'
import { Portfolio } from './components/Portfolio'
import { Estimate } from './components/Estimate'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Pinnacle — Architecture Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-ink transition-colors dark:bg-night dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Overview />
        <Portfolio />
        <Estimate />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
