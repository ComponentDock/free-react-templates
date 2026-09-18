import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { About } from './components/About'
import { Stories } from './components/Stories'
import { Offer } from './components/Offer'
import { Expertise } from './components/Expertise'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Pixelcraft — Creative Agency Template'
  }, [])

  return (
    <div
      className="min-h-screen bg-white font-sans text-gray-900"
      style={{ fontFamily: 'var(--font-body)' }}
    >
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Stories />
        <Offer />
        <Expertise />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
