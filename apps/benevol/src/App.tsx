import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { IntroPanels } from './components/IntroPanels'
import { Mission } from './components/Mission'
import { Discover } from './components/Discover'
import { DonateCta } from './components/DonateCta'
import { Causes } from './components/Causes'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Benevol — Charity Template'
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSlider />
        <IntroPanels />
        <Mission />
        <Discover />
        <DonateCta />
        <Causes />
        <Team />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
