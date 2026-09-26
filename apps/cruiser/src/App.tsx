import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Performance } from './components/Performance'
import { Mentor } from './components/Mentor'
import { About } from './components/About'
import { Team } from './components/Team'
import { Pricing } from './components/Pricing'
import { Faq } from './components/Faq'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Cruiser — Skateboarding Personal Site'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Performance />
        <Mentor />
        <About />
        <Team />
        <Pricing />
        <Faq />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
