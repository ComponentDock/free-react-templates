import { useEffect } from 'react'
import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { AdsRow } from './components/AdsRow'
import { ProductGrid } from './components/ProductGrid'
import { XlAd } from './components/XlAd'
import { IconBoxes } from './components/IconBoxes'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'
import { skipLabel } from './data'

export function App() {
  useEffect(() => {
    document.title = 'Vendio — Online Shop Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        {skipLabel}
      </a>
      <Header />
      <main id="main">
        <HeroSlider />
        <AdsRow />
        <ProductGrid />
        <XlAd />
        <IconBoxes />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
