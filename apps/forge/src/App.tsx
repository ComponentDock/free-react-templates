import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Portfolio } from './components/Portfolio'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'

/* Forge — a creative agency landing page. Section order mirrors the
   source template 1:1: header → hero → who we are → portfolio → services
   → testimonial → CTA → footer. */

export function App() {
  useEffect(() => {
    document.title = 'Forge — Creative Agency'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-body">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
