import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { ProjectCounters } from './components/ProjectCounters'
import { Portfolio } from './components/Portfolio'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Timber — Interior Design & Construction Studio'
  }, [])

  return (
    <div className="min-h-screen bg-white font-['Quicksand',sans-serif]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ProjectCounters />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}
