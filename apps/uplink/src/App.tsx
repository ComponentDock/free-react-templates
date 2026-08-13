import { useEffect } from 'react'
import { Blog } from './components/Blog'
import { ClientLogos } from './components/ClientLogos'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Pricing } from './components/Pricing'
import { Services } from './components/Services'
import { Solution } from './components/Solution'
import { Testimonials } from './components/Testimonials'
import { TopBar } from './components/TopBar'

export function App() {
  useEffect(() => {
    document.title = 'Uplink — Hosting Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink-900">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Solution />
        <Testimonials />
        <Services />
        <Blog />
        <ClientLogos />
      </main>
      <Footer />
    </div>
  )
}
