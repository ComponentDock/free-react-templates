import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Features } from './components/Features'
import { Causes } from './components/Causes'
import { CtaBanner } from './components/CtaBanner'
import { Events } from './components/Events'
import { Blog } from './components/Blog'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Heartward — Charity Template'
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Causes />
        <CtaBanner />
        <Events />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
