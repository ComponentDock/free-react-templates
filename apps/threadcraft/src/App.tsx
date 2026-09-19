import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { CategoryTabs } from './components/CategoryTabs'
import { TrendingProducts } from './components/TrendingProducts'
import { DealOfTheWeek } from './components/DealOfTheWeek'
import { FeaturedProducts } from './components/FeaturedProducts'
import { CollectionGallery } from './components/CollectionGallery'
import { BlogSection } from './components/BlogSection'
import { FeaturesBar } from './components/FeaturesBar'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <main>
        <HeroSlider />
        <CategoryTabs />
        <TrendingProducts />
        <DealOfTheWeek />
        <FeaturedProducts />
        <CollectionGallery />
        <BlogSection />
        <FeaturesBar />
      </main>
      <Footer />
    </div>
  )
}
