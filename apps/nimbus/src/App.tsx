import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { About } from './components/About'
import { Services } from './components/Services'
import { CTA } from './components/CTA'
import { Video } from './components/Video'
import { Support } from './components/Support'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Nimbus — SaaS Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-smoke transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <About />
        <Services />
        <CTA />
        <Video />
        <Support />
        <Pricing />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
