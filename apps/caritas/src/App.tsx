import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Causes } from './components/Causes'
import { CtaBand } from './components/CtaBand'
import { Events } from './components/Events'
import { BlogSection } from './components/BlogSection'
import { Clients } from './components/Clients'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Caritas — Charity Template'
  }, [])

  return (
    <div className="font-sans">
      {/* Transparent header floats over the hero photo. */}
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Causes />
        <CtaBand />
        <Events />
        <BlogSection />
        <Clients />
      </main>
      <Footer />
    </div>
  )
}
