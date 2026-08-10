import { useEffect, useState } from 'react'
import { BigPosts } from './components/BigPosts'
import { CategoryCards } from './components/CategoryCards'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { InstagramFeed } from './components/InstagramFeed'
import { Navbar } from './components/Navbar'
import { PostGrid } from './components/PostGrid'
import { Preloader } from './components/Preloader'
import { Sidebar } from './components/Sidebar'
import { TopBar } from './components/TopBar'
import { TrendingPanel } from './components/TrendingPanel'

export function App() {
  const [panelOpen, setPanelOpen] = useState(false)

  useEffect(() => {
    document.title = 'Savory — Food Blog Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <Preloader />
      <TopBar />
      <Navbar onOpenPanel={() => setPanelOpen(true)} />
      <main>
        <Hero />
        <CategoryCards />
        <BigPosts />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <PostGrid />
          </div>
          <Sidebar />
        </div>
        <InstagramFeed />
      </main>
      <TrendingPanel open={panelOpen} onClose={() => setPanelOpen(false)} />
      <Footer />
    </div>
  )
}
