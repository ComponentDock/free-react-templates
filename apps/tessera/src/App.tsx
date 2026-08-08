import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Stats } from './components/Stats'
import { Workflow } from './components/Workflow'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { Testimonials } from './components/Testimonials'
import { Team } from './components/Team'
import { Blog } from './components/Blog'
import { Clients } from './components/Clients'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Tessera — Architecture Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Stats />
        <Workflow />
        <Services />
        <Projects />
        <Testimonials />
        <Team />
        <Blog />
        <Clients />
      </main>
      <Footer />
    </div>
  )
}
