import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { CategoryNav } from './components/CategoryNav'
import { HeroBanners } from './components/HeroBanners'
import { ProductSlider } from './components/ProductSlider'
import { DealsOfTheDay } from './components/DealsOfTheDay'
import { LatestProducts } from './components/LatestProducts'
import { PickedForYou } from './components/PickedForYou'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Wares — E-Commerce Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-mist transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <CategoryNav />
        <HeroBanners />
        <ProductSlider />
        <DealsOfTheDay />
        <LatestProducts />
        <PickedForYou />
      </main>
      <Footer />
    </div>
  )
}
