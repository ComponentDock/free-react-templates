import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Stats } from './components/Stats'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Pipekit — Creative Agency Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Portfolio />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
