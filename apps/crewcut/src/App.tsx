import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Banner } from './components/Banner'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { Features } from './components/Features'
import { About } from './components/About'
import { Team } from './components/Team'
import { Pricing } from './components/Pricing'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Crewcut — Barber Shop Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Banner />
        <Services />
        <Gallery />
        <Features />
        <About />
        <Team />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
