import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Header } from './components/Header'
import { CategoryNav } from './components/CategoryNav'
import { TrendingGrid } from './components/TrendingGrid'
import { LatestPosts } from './components/LatestPosts'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Headliner — Magazine & News Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <TopBar />
      <Header />
      <CategoryNav />
      <main className="flex-1">
        <TrendingGrid />
        <LatestPosts />
      </main>
      <Footer />
    </div>
  )
}
