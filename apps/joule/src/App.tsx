import { useEffect } from 'react'
import { TopHeader } from './components/TopHeader'
import { MainHeader } from './components/MainHeader'
import { Navigation } from './components/Navigation'
import { NewProducts } from './components/NewProducts'
import { HotDeal } from './components/HotDeal'
import { TopSelling } from './components/TopSelling'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Joule — eCommerce Shop'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-body-bg font-sans transition-colors dark:bg-dark-bg">
      <TopHeader />
      <MainHeader />
      <Navigation />
      <main className="flex-1">
        <NewProducts />
        <HotDeal />
        <TopSelling />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
