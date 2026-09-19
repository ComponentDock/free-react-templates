import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Banner } from './components/Banner'
import { Category } from './components/Category'
import { MenProducts } from './components/MenProducts'
import { WomenProducts } from './components/WomenProducts'
import { HotDeal } from './components/HotDeal'
import { RelatedProducts } from './components/RelatedProducts'
import { Brand } from './components/Brand'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'BoutiqueHaus — Online Shop Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Banner />
        <Category />
        <MenProducts />
        <WomenProducts />
        <HotDeal />
        <RelatedProducts />
        <Brand />
      </main>
      <Footer />
    </div>
  )
}
