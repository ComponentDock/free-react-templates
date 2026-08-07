import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Work } from './components/Work'
import { Experience } from './components/Experience'
import { Team } from './components/Team'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Keystone — Architecture Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Work />
        <Experience />
        <Team />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
