import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { CategoryGrid } from './components/CategoryGrid'
import { Products } from './components/Products'
import { ExclusiveDeal } from './components/ExclusiveDeal'
import { BrandLogos } from './components/BrandLogos'
import { DealsOfTheWeek } from './components/DealsOfTheWeek'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Strider — Fashion E-Commerce Shop Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-body">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <CategoryGrid />
        <Products />
        <ExclusiveDeal />
        <BrandLogos />
        <DealsOfTheWeek />
      </main>
      <Footer />
    </div>
  )
}
