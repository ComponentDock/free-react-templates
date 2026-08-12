import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Resume } from './components/Resume'
import { Services } from './components/Services'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Blog } from './components/Blog'
import { CounterBand } from './components/CounterBand'
import { HireMe } from './components/HireMe'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

/* Maverick — single-page freelance web designer portfolio (recreation of
   the ColorLib "Clark" demo): header → hero → About → Resume → Services →
   Skills → Projects → Blog → counter band → hire-me band → Contact →
   footer. */

export function App() {
  useEffect(() => {
    document.title = 'Maverick — Freelance Web Designer'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-black font-sans text-body">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Resume />
        <Services />
        <Skills />
        <Projects />
        <Blog />
        <CounterBand />
        <HireMe />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
