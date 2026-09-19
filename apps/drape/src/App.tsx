import { useEffect } from 'react'
import { AnnouncementBar } from './components/AnnouncementBar'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { ShopByCategory } from './components/ShopByCategory'
import { NewArrivals } from './components/NewArrivals'
import { ImageWithText } from './components/ImageWithText'
import { Features } from './components/Features'
import { Journal } from './components/Journal'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Drape — Fashion E-Commerce Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-warm-900">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <ShopByCategory />
        <NewArrivals />
        <ImageWithText />
        <Features />
        <Journal />
      </main>
      <Footer />
    </div>
  )
}
