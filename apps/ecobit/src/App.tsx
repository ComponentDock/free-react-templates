import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { About } from './components/About'
import { Opportunity } from './components/Opportunity'
import { Pricing } from './components/Pricing'
import { Reviews } from './components/Reviews'
import { Subscribe } from './components/Subscribe'
import { Clients } from './components/Clients'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Ecobit — App Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <About />
        <Opportunity />
        <Pricing />
        <Reviews />
        <Subscribe />
        <Clients />
      </main>
      <Footer />
    </div>
  )
}
