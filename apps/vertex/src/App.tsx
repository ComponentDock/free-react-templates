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
    document.title = 'Vertex — Creative Digital Agency'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
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
