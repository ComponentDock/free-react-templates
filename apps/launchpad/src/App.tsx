import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { AboutVideo } from './components/AboutVideo'
import { AboutSupport } from './components/AboutSupport'
import { Portfolio } from './components/Portfolio'
import { CallToAction } from './components/CallToAction'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Launchpad — SaaS Startup Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AboutVideo />
        <AboutSupport />
        <Portfolio />
        <CallToAction />
        <Pricing />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
