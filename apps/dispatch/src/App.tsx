import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { TaggedGrid } from './components/TaggedGrid'
import { VideoSection } from './components/VideoSection'
import { LatestArticles } from './components/LatestArticles'
import { Sidebar } from './components/Sidebar'
import { Footer } from './components/Footer'
import { dontMissArticles, trendingArticles } from './data'

export function App() {
  useEffect(() => {
    document.title = 'Dispatch — Magazine & Lifestyle Blog'
  }, [])

  return (
    <div className="min-h-screen bg-page font-sans text-muted transition-colors dark:bg-gray-950 dark:text-gray-300">
      <Navbar />
      <HeroSlider />
      <main className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid gap-14 py-16 lg:grid-cols-[3fr_1fr] lg:gap-12">
          <div className="min-w-0">
            <TaggedGrid title="Don't Miss" articles={dontMissArticles} />
            <TaggedGrid title="What's Trending" articles={trendingArticles} />
            <VideoSection />
            <LatestArticles />
          </div>
          <Sidebar />
        </div>
      </main>
      <Footer />
    </div>
  )
}
