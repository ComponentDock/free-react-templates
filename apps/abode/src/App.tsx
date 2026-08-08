import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { WhyUs } from './components/WhyUs'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Abode — Architecture Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyUs />
      </main>
      <Footer />
    </div>
  )
}
