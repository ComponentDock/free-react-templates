import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { Services } from './components/Services'
import { About } from './components/About'
import { Features } from './components/Features'
import { Doctors } from './components/Doctors'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'CureNova — Medical Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink-700">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Features />
        <Doctors />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
