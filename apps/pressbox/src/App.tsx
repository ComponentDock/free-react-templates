import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { HeroCarousel } from './components/HeroCarousel'
import { TrendingPosts } from './components/TrendingPosts'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Pressbox — News & Magazine Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-body text-brand-body">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <HeroCarousel />
        <TrendingPosts />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
