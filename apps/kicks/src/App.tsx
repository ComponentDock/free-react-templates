import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { SaleBanner } from './components/SaleBanner'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { ShopByGender } from './components/ShopByGender'
import { BestSellers } from './components/BestSellers'
import { Partners } from './components/Partners'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Kicks — Shoe Store Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <Navbar />
      <SaleBanner />
      <main>
        <Hero />
        <Intro />
        <ShopByGender />
        <BestSellers />
        <Partners />
      </main>
      <Footer />
    </div>
  )
}
