import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Header } from './components/Header'
import { MainNav } from './components/MainNav'
import { Banner } from './components/Banner'
import { Characteristics } from './components/Characteristics'
import { DealsOfTheWeek } from './components/DealsOfTheWeek'
import { PopularCategories } from './components/PopularCategories'
import { Adverts } from './components/Adverts'
import { BestSellers } from './components/BestSellers'
import { HotNewArrivals } from './components/HotNewArrivals'
import { Brands } from './components/Brands'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'
import { Copyright } from './components/Copyright'

export function App() {
  useEffect(() => {
    document.title = 'TechVault — E-Commerce Tech Store Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <TopBar />
      <Header />
      <MainNav />
      <main>
        <Banner />
        <Characteristics />
        <DealsOfTheWeek />
        <PopularCategories />
        <Adverts />
        <BestSellers />
        <HotNewArrivals />
        <Brands />
        <Newsletter />
      </main>
      <Footer />
      <Copyright />
    </div>
  )
}
