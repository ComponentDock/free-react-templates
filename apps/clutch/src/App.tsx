import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Feature } from './components/Feature'
import { CarOffers } from './components/CarOffers'
import { ChooseUs } from './components/ChooseUs'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Clutch — Car Dealership Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Feature />
        <CarOffers />
        <ChooseUs />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
