import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { ShopByCategory } from './components/ShopByCategory'
import { LatestProducts } from './components/LatestProducts'
import { BestCollection } from './components/BestCollection'
import { ShopMethods } from './components/ShopMethods'
import { Gallery } from './components/Gallery'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-mist transition-colors dark:bg-gray-950 dark:text-white">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <HeroSlider />
        <ShopByCategory />
        <LatestProducts />
        <BestCollection />
        <ShopMethods />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}
