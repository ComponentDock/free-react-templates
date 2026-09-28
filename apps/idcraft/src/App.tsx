import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { CoolFacts } from './components/CoolFacts'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Idcraft — Personal vCard & Resume'
  }, [])

  return (
    <div className="font-sans text-dark-heading bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <CoolFacts />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
