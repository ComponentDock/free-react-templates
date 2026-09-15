import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { BePart } from './components/BePart'
import { Counter } from './components/Counter'
import { Causes } from './components/Causes'
import { CtaBanner } from './components/CtaBanner'
import { Volunteers } from './components/Volunteers'
import { Blog } from './components/Blog'
import { Partners } from './components/Partners'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'GiveMore — Charity Template'
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <BePart />
        <Counter />
        <Causes />
        <CtaBanner />
        <Volunteers />
        <Blog />
        <Partners />
      </main>
      <Footer />
    </div>
  )
}
