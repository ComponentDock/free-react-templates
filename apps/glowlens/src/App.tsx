import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { Portfolio } from './components/Portfolio'
import { Milestones } from './components/Milestones'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Glowlens — Photography Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Portfolio />
        <Milestones />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
