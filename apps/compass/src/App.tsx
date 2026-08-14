import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { CtaBigImage } from './components/CtaBigImage'
import { Team } from './components/Team'
import { Approach } from './components/Approach'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Features } from './components/Features'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Compass — Consulting Agency'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-ink">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CtaBigImage />
        <Team />
        <Approach />
        <Services />
        <Testimonials />
        <Features />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
