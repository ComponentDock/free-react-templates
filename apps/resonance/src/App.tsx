import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { About } from './components/About'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Resonance — SEO & Digital Marketing Agency Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-ink antialiased">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <About />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
