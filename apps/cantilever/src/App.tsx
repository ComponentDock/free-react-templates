import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { Testimonials } from './components/Testimonials'
import { Clients } from './components/Clients'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Cantilever — Architecture Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Clients />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
