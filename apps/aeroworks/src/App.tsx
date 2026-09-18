import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Feature } from './components/Feature'
import { CarListings } from './components/CarListings'
import { ChooseUs } from './components/ChooseUs'
import { LatestNews } from './components/LatestNews'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'AeroWorks — Car Dealership & Rental Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-text-dark">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Feature />
        <CarListings />
        <ChooseUs />
        <LatestNews />
      </main>
      <Footer />
    </div>
  )
}
