import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { About } from './components/About'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Chisel — Architecture Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
