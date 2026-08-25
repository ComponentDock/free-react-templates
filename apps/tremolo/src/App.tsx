import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { MenuAccordion } from './components/MenuAccordion'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Tremolo — Culinary Menu & Accordion Template'
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <MenuAccordion />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
