import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Classes } from './components/Classes'
import { Banner } from './components/Banner'
import { Pricing } from './components/Pricing'
import { Gallery } from './components/Gallery'
import { Team } from './components/Team'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Fitcraft — Gym & Fitness Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Classes />
        <Banner />
        <Pricing />
        <Gallery />
        <Team />
      </main>
      <Contact />
      <Footer />
    </div>
  )
}
