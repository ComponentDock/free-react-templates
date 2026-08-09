import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { AboutTressly } from './components/AboutTressly'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Tressly — Hair Salon Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <AboutTressly />
        <Experience />
      </main>
      <Footer />
    </div>
  )
}
