import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Studio } from './components/Studio'
import { Services } from './components/Services'
import { Cta } from './components/Cta'
import { Milestones } from './components/Milestones'
import { Projects } from './components/Projects'
import { Clients } from './components/Clients'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Trestle — Architecture Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Studio />
        <Services />
        <Cta />
        <Milestones />
        <Projects />
        <Clients />
      </main>
      <Footer />
    </div>
  )
}
