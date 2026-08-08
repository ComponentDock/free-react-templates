import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Furniture } from './components/Furniture'
import { Projects } from './components/Projects'
import { Features } from './components/Features'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Rafter — Architecture Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Furniture />
        <Projects />
        <Features />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
