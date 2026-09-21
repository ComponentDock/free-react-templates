import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Menu } from './components/Menu'
import { Gallery } from './components/Gallery'
import { Reservation } from './components/Reservation'
import { ChefsQuotes } from './components/ChefsQuotes'
import { FeaturedDishes } from './components/FeaturedDishes'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Skyline — Restaurant Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Menu />
        <Gallery />
        <Reservation />
        <ChefsQuotes />
        <FeaturedDishes />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
