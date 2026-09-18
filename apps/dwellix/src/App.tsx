import { useEffect } from 'react'
import { TopHeader } from './components/TopHeader'
import { Navbar } from './components/Navbar'
import { SearchBar } from './components/SearchBar'
import { FeaturedProperties } from './components/FeaturedProperties'
import { WhyChooseUs } from './components/WhyChooseUs'
import { PropertyCategories } from './components/PropertyCategories'
import { CtaBanner } from './components/CtaBanner'
import { LatestNews } from './components/LatestNews'
import { Partners } from './components/Partners'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Dwellix — Real Estate Listing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-body-bg text-body-text transition-colors dark:bg-gray-950 dark:text-white">
      <TopHeader />
      <Navbar />
      <main className="flex-1">
        <SearchBar />
        <FeaturedProperties />
        <WhyChooseUs />
        <PropertyCategories />
        <CtaBanner />
        <LatestNews />
        <Partners />
      </main>
      <Footer />
    </div>
  )
}
