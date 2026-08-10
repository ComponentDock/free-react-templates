import { useEffect } from 'react'
import { CategoryBlock } from './components/CategoryBlock'
import { FeaturedGrid } from './components/FeaturedGrid'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { PopularSlider } from './components/PopularSlider'
import { Subscribe } from './components/Subscribe'
import { TrendingSlider } from './components/TrendingSlider'

export function App() {
  useEffect(() => {
    document.title = 'Newsprint — Magazine Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body dark:bg-gray-900">
      <Navbar />
      <main>
        <TrendingSlider />
        <FeaturedGrid />
        <PopularSlider />
        <CategoryBlock />
        <Subscribe />
      </main>
      <Footer />
    </div>
  )
}
