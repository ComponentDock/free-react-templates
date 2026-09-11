import { useEffect } from 'react'
import { TopNav } from './components/TopNav'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { CategoryBanners } from './components/CategoryBanners'
import { NewArrivals } from './components/NewArrivals'
import { DealOfWeek } from './components/DealOfWeek'
import { BestSellers } from './components/BestSellers'
import { Benefits } from './components/Benefits'
import { LatestBlogs } from './components/LatestBlogs'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'ShopLane — E-Commerce Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <TopNav />
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <CategoryBanners />
        <NewArrivals />
        <DealOfWeek />
        <BestSellers />
        <Benefits />
        <LatestBlogs />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
