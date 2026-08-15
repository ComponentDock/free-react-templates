import { useEffect } from 'react'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { NewArrivals } from './components/NewArrivals'
import { PopularItems } from './components/PopularItems'
import { ShopMethods } from './components/ShopMethods'
import { VideoBanner } from './components/VideoBanner'
import { WatchChoice } from './components/WatchChoice'
import { siteName, skipLabel } from './data'

export function App() {
  useEffect(() => {
    document.title = `${siteName} — Select Your New Perfect Style`
  }, [])

  return (
    <div className="min-h-screen bg-paper font-body text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        {skipLabel}
      </a>
      <Header />
      <main id="main">
        <HeroSlider />
        <NewArrivals />
        <Gallery />
        <PopularItems />
        <VideoBanner />
        <WatchChoice />
        <ShopMethods />
      </main>
      <Footer />
    </div>
  )
}
