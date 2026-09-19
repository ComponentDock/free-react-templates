import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Categories } from './components/Categories'
import { MenProducts } from './components/MenProducts'
import { WomenProducts } from './components/WomenProducts'
import { Countdown } from './components/Countdown'
import { RelatedProducts } from './components/RelatedProducts'
import { BrandLogos } from './components/BrandLogos'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Shopcraft — Ecommerce Store Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Categories />
        <MenProducts />
        <WomenProducts />
        <Countdown />
        <RelatedProducts />
        <BrandLogos />
      </main>
      <Footer />
    </div>
  )
}
