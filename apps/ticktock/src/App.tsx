import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Features } from './components/Features'
import { Products } from './components/Products'
import { Services } from './components/Services'
import { Reviews } from './components/Reviews'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'TickTock — Smart Timepieces'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-gray-700">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Features />
        <Products />
        <Services />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
