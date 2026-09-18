import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { Team } from './components/Team'
import { Studio } from './components/Studio'
import { Pricing } from './components/Pricing'
import { Instagram } from './components/Instagram'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'ByteCraft — Digital Agency Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Team />
        <Studio />
        <Pricing />
        <Instagram />
        <Blog />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
