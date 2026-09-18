import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { PropertyListings } from './components/PropertyListings'
import { SearchCTA } from './components/SearchCTA'
import { About } from './components/About'
import { HowItWorks } from './components/HowItWorks'
import { AgentCTA } from './components/AgentCTA'
import { Agents } from './components/Agents'
import { Blog } from './components/Blog'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Roost — Real Estate Home Services'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <PropertyListings />
        <SearchCTA />
        <About />
        <HowItWorks />
        <AgentCTA />
        <Agents />
        <Blog />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
