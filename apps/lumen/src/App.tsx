import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Works } from './components/Works'
import { Clients } from './components/Clients'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Lumen — Creative Agency Portfolio'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-surface-dark text-text-light">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Works />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
