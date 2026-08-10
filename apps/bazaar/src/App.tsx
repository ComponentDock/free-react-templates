import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Collections } from './components/Collections'
import { Popular } from './components/Popular'
import { MostRated } from './components/MostRated'
import { NewShoes } from './components/NewShoes'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Bazaar — Fashion & Shoes Shop'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white transition-colors dark:bg-gray-950">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Collections />
        <Popular />
        <MostRated />
        <NewShoes />
      </main>
      <Footer />
    </div>
  )
}
