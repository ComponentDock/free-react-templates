import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Quote } from './components/Quote'
import { Services } from './components/Services'
import { Features } from './components/Features'
import { Counters } from './components/Counters'
import { Video } from './components/Video'
import { Cta } from './components/Cta'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Pipeflow — Plumbing Services Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Quote />
        <Services />
        <Features />
        <Counters />
        <Video />
        <Cta />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
