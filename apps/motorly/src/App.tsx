import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { ChooseUs } from './components/ChooseUs'
import { Products } from './components/Products'
import { Stats } from './components/Stats'
import { News } from './components/News'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Motorly — Garage Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <ChooseUs />
        <Products />
        <Stats />
        <News />
      </main>
      <Footer />
    </div>
  )
}
