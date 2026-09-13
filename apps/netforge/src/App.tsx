import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Counters } from './components/Counters'
import { Projects } from './components/Projects'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Netforge — IT Company Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Counters />
        <Projects />
        <Testimonials />
        <FAQ />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
