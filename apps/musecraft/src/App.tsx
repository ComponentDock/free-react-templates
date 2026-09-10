import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { Crafters } from './components/Crafters'
import { Stories } from './components/Stories'
import { Offer } from './components/Offer'
import { Expertise } from './components/Expertise'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Musecraft — Creative Digital Agency'
  }, [])

  return (
    <div className="min-h-screen bg-navy font-body text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Crafters />
        <Stories />
        <Offer />
        <Expertise />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
