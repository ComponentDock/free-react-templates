import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { PopularProducts } from './components/PopularProducts'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Closet — Fashion Boutique Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-body transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PopularProducts />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
