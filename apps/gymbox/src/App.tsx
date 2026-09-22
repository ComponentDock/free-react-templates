import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Categories } from './components/Categories'
import { Features } from './components/Features'
import { Offer } from './components/Offer'
import { Pricing } from './components/Pricing'
import { Gallery } from './components/Gallery'
import { Team } from './components/Team'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'GymBox — Fitness & Gym Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <Header />
      <main className="flex-1">
        <Hero />
        <Categories />
        <Features />
        <Offer />
        <Pricing />
        <Gallery />
        <Team />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
