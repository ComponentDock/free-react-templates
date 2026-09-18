import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Stats } from './components/Stats'
import { Reviews } from './components/Reviews'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Pexflow — Construction & Engineering Landing'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-body">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Stats />
        <Reviews />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
