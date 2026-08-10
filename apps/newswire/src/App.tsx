import { useEffect } from 'react'
import { CategoryColumns } from './components/CategoryColumns'
import { EditorsPick } from './components/EditorsPick'
import { FeaturedPost } from './components/FeaturedPost'
import { Footer } from './components/Footer'
import { HeroCarousel } from './components/HeroCarousel'
import { Navbar } from './components/Navbar'
import { Pagination } from './components/Pagination'
import { PopularPosts } from './components/PopularPosts'
import { RecentNews } from './components/RecentNews'
import { Subscribe } from './components/Subscribe'
import { TopBar } from './components/TopBar'
import { TrendingList } from './components/TrendingList'

export function App() {
  useEffect(() => {
    document.title = 'Newswire — News Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <header className="sticky top-0 z-40 bg-white">
        <TopBar />
        <Navbar />
      </header>
      <main>
        <HeroCarousel />
        <EditorsPick />
        <TrendingList />
        <FeaturedPost />
        <CategoryColumns />
        <RecentNews />
        <PopularPosts />
        <Pagination />
        <Subscribe />
      </main>
      <Footer />
    </div>
  )
}
