import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { HomeBanner } from './components/HomeBanner'
import { HotDeals } from './components/HotDeals'
import { FeaturedProducts } from './components/FeaturedProducts'
import { TimerSection } from './components/TimerSection'
import { LatestProducts } from './components/LatestProducts'
import { ClientLogos } from './components/ClientLogos'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Catalogly — E-commerce Shop'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-surface text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <HomeBanner />
        <HotDeals />
        <FeaturedProducts />
        <TimerSection />
        <LatestProducts />
        <ClientLogos />
      </main>
      <Footer />
    </div>
  )
}
