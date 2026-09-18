import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ProductGrid } from './components/ProductGrid'
import { FeaturedBanner } from './components/FeaturedBanner'
import { CollectionsCarousel } from './components/CollectionsCarousel'
import { Footer } from './components/Footer'

export function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.title = 'Draped — Fashion E-Commerce Landing'
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-charcoal-800 dark:text-white">
      <Navbar dark={dark} onToggleDark={() => setDark((d) => !d)} />
      <main className="flex-1">
        <Hero />
        <ProductGrid />
        <FeaturedBanner
          subtitle="#New Summer Collection 2019"
          headline="Jacket"
          image="https://picsum.photos/seed/draped-jacket/1400/600"
        />
        <CollectionsCarousel />
        <FeaturedBanner
          subtitle="#New Summer Collection 2019"
          headline="New Denim Coat"
          image="https://picsum.photos/seed/draped-denim/1400/600"
        />
      </main>
      <Footer />
    </div>
  )
}
