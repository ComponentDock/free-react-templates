import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { CategoryTiles } from './components/CategoryTiles'
import { CtaBanner } from './components/CtaBanner'
import { PopularProducts } from './components/PopularProducts'
import { BrandsStrip } from './components/BrandsStrip'
import { Footer } from './components/Footer'
import { CartDrawer } from './components/CartDrawer'

export function App() {
  const [cartOpen, setCartOpen] = useState(false)

  useEffect(() => {
    document.title = 'Garment — Fashion & Style Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <Navbar onCartOpen={() => setCartOpen(true)} />
      <main>
        <Hero />
        <CategoryTiles />
        <CtaBanner />
        <PopularProducts />
        <BrandsStrip />
      </main>
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  )
}
