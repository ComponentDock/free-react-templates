import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { History } from './components/History'
import { Services } from './components/Services'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Lumina — Professional Agency Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <History />
        <Services />
        <Experience />
        <Projects />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
