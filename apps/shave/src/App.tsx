import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { Features } from './components/Features'
import { About } from './components/About'
import { Team } from './components/Team'
import { Pricing } from './components/Pricing'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Shave — Barber Shop Landing Page'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Features />
        <About />
        <Team />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
