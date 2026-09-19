import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeaturedCategories } from './components/FeaturedCategories'
import { FeaturedProducts } from './components/FeaturedProducts'
import { PromoBanner } from './components/PromoBanner'
import { NewArrivals } from './components/NewArrivals'
import { BlogSection } from './components/BlogSection'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-gray-700">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedCategories />
        <FeaturedProducts />
        <PromoBanner />
        <NewArrivals />
        <BlogSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
