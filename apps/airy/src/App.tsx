import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Counter } from './components/Counter'
import { Projects } from './components/Projects'
import { Testimony } from './components/Testimony'
import { Pricing } from './components/Pricing'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Airy — Business Agency Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-surface text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Counter />
        <Projects />
        <Testimony />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
