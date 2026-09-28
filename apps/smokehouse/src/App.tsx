import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { AboutSection } from './components/AboutSection'
import { ServicesSection } from './components/ServicesSection'
import { MenuSection } from './components/MenuSection'
import { CounterSection } from './components/CounterSection'
import { NewsSection } from './components/NewsSection'
import { TestimonialSection } from './components/TestimonialSection'
import { ReservationSection } from './components/ReservationSection'
import { MapSection } from './components/MapSection'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Smokehouse — Restaurant Template'
  }, [])

  return (
    <div className="min-h-screen font-sans text-text-dark">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <MenuSection />
        <CounterSection />
        <NewsSection />
        <TestimonialSection />
        <ReservationSection />
        <MapSection />
      </main>
      <Footer />
    </div>
  )
}
