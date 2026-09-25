import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Portfolio } from './components/Portfolio'
import { Services } from './components/Services'
import { Reviews } from './components/Reviews'
import { Footer } from './components/Footer'

export default function App() {
  useEffect(() => {
    document.title = 'Workfolio — Portfolio Resume Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-body transition-colors dark:bg-navy-deep dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Reviews />
      </main>
      <Footer />
    </div>
  )
}
