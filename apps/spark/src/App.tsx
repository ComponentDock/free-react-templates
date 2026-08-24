import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Services } from './components/Services'
import { VideoDemo } from './components/VideoDemo'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { CTA } from './components/CTA'
import { Integrations } from './components/Integrations'
import { Metrics } from './components/Metrics'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Spark — App Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Services />
        <VideoDemo />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
        <Integrations />
        <Metrics />
      </main>
      <Footer />
    </div>
  )
}
