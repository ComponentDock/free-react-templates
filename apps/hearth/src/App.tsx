import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { About } from './components/About'
import { CounterStrip } from './components/CounterStrip'
import { MenuSection } from './components/MenuSection'
import { TestimonyCarousel } from './components/TestimonyCarousel'
import { StaffSection } from './components/StaffSection'
import { Reservation } from './components/Reservation'
import { Footer } from './components/Footer'

/**
 * Hearth — single-page restaurant template. Section order mirrors the
 * reference design 1:1: navbar → split hero slider → about → animated
 * counter strip → menu grid → testimony carousel → chef staff → reservation
 * form → dark footer.
 */
export function App() {
  useEffect(() => {
    document.title = 'Hearth — Restaurant Template'
  }, [])
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <HeroSlider />
        <About />
        <CounterStrip />
        <MenuSection />
        <TestimonyCarousel />
        <StaffSection />
        <Reservation />
      </main>
      <Footer />
    </div>
  )
}
