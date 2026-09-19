import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { NewArrivals } from './components/NewArrivals'
import { DealOfWeek } from './components/DealOfWeek'
import { PopularItems } from './components/PopularItems'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Merch — E-Commerce Fashion Store'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <NewArrivals />
        <DealOfWeek />
        <PopularItems />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
