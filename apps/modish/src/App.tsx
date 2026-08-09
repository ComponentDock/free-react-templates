import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { LatestProducts } from './components/LatestProducts'
import { TopSelling } from './components/TopSelling'
import { Banner } from './components/Banner'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Modish — Fashion Store'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <LatestProducts />
        <TopSelling />
        <Banner />
      </main>
      <Footer />
    </div>
  )
}
