import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Counters } from './components/Counters'
import { Portfolio } from './components/Portfolio'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Pricing } from './components/Pricing'
import { Contact } from './components/Contact'
import { CtaStrip } from './components/CtaStrip'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Swatch — Web Designer Portfolio'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-paper font-sans text-body">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Counters />
        <Portfolio />
        <Testimonials />
        <Blog />
        <Pricing />
        <Contact />
        <CtaStrip />
      </main>
      <Footer />
    </div>
  )
}
