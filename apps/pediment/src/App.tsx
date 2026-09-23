import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Team } from './components/Team'
import { Cta } from './components/Cta'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export default function App() {
  useEffect(() => {
    document.title = 'Pediment — Interior Design & Architecture Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-body transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Testimonials />
        <Team />
        <Cta />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
