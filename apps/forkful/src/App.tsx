import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Welcome } from './components/Welcome'
import { FoodMenu } from './components/FoodMenu'
import { ReservationCta } from './components/ReservationCta'
import { SpecialDishes } from './components/SpecialDishes'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Forkful — Restaurant Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Welcome />
        <FoodMenu />
        <ReservationCta />
        <SpecialDishes />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
