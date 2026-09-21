import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { CategoryBanners } from './components/CategoryBanners'
import { ProductTabs } from './components/ProductTabs'
import { HotDeal } from './components/HotDeal'
import { InstagramFeed } from './components/InstagramFeed'
import { BlogPosts } from './components/BlogPosts'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = "Threadline — Men's Fashion Template"
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header />
      <main>
        <Hero />
        <CategoryBanners />
        <ProductTabs />
        <HotDeal />
        <InstagramFeed />
        <BlogPosts />
      </main>
      <Footer />
    </div>
  )
}
