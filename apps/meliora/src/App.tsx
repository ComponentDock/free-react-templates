import { useEffect } from 'react'
import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { CausesCarousel } from './components/CausesCarousel'
import { WhoWeAre } from './components/WhoWeAre'
import { CounterBand } from './components/CounterBand'
import { ServicesGrid } from './components/ServicesGrid'
import { EmergencyBand } from './components/EmergencyBand'
import { JoinUs } from './components/JoinUs'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Meliora — Charity Template'
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSlider />
        <CausesCarousel />
        <WhoWeAre />
        <CounterBand />
        <ServicesGrid />
        <EmergencyBand />
        <JoinUs />
      </main>
      <Footer />
    </div>
  )
}
