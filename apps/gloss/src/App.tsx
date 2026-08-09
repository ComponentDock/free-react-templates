import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { Blog } from './components/Blog'
import { Shop } from './components/Shop'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Gloss — Makeup Artist Portfolio Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 dark:bg-gray-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Blog />
        <Shop />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
