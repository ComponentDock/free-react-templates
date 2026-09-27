import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { PopularProperties } from './components/PopularProperties'
import { FAQ } from './components/FAQ'
import { Counter } from './components/Counter'
import { Testimonials } from './components/Testimonials'
import { Team } from './components/Team'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Propvale — Real Estate Consulting Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PopularProperties />
        <FAQ />
        <Counter />
        <Testimonials />
        <Team />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
