import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Portfolio } from './components/Portfolio'
import { About } from './components/About'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { CtaBand } from './components/CtaBand'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Kraft — Creative Agency'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-brand focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <Portfolio />
        <About />
        <Services />
        <Testimonials />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
