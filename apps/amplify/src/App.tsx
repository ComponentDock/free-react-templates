import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { Testimonials } from './components/Testimonials'
import { CTA } from './components/CTA'
import { Blog } from './components/Blog'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Amplify — Digital Marketing Agency Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-ink antialiased">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <CTA />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
