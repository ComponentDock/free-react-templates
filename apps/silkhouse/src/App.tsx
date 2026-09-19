import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { Categories } from './components/Categories'
import { NewArrivals } from './components/NewArrivals'
import { CollectionPromo } from './components/CollectionPromo'
import { PopularProducts } from './components/PopularProducts'
import { Features } from './components/Features'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'SilkHouse — Fashion E-Commerce Template'
  }, [])

  return (
    <div className="min-h-screen bg-white text-text-body">
      <Navbar />
      <main>
        <HeroSlider />
        <Categories />
        <NewArrivals />
        <CollectionPromo />
        <PopularProducts />
        <Features />
      </main>
      <Footer />
    </div>
  )
}
