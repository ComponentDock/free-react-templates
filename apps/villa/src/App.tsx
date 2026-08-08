import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Villa — Interior Design Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Services />
        <Projects />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
