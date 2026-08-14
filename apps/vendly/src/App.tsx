import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Perks } from './components/Perks'
import { Collections } from './components/Collections'
import { FeaturedProducts } from './components/FeaturedProducts'
import { BigSale } from './components/BigSale'
import { Footer } from './components/Footer'

/* Vendly — single-page e-commerce / fashion-store template (recreation of
   the "Shoppers" demo): top utility bar → nav → hero → perks →
   collections → featured products → big sale → footer. */
export function App() {
  useEffect(() => {
    document.title = 'Vendly — Fashion Store'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-body">
      <Header />
      <main className="flex-1">
        <Hero />
        <Perks />
        <Collections />
        <FeaturedProducts />
        <BigSale />
        <Footer />
      </main>
    </div>
  )
}
