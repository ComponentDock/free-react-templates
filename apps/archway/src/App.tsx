import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Counter } from './components/Counter'
import { Projects } from './components/Projects'
import { Testimonials } from './components/Testimonials'
import { Team } from './components/Team'
import { Blog } from './components/Blog'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Archway — Interior Design & Architecture Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#212529] transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Counter />
        <Projects />
        <Testimonials />
        <Team />
        <Blog />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
