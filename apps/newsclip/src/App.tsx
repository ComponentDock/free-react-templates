import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LatestNewsTicker } from './components/LatestNewsTicker'
import { MainContent } from './components/MainContent'
import { CategoryPosts } from './components/CategoryPosts'
import { VideoPosts } from './components/VideoPosts'
import { Editorial } from './components/Editorial'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'NewsClip — News & Magazine'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <Header />
      <main>
        <Hero />
        <LatestNewsTicker />
        <MainContent />
        <CategoryPosts />
        <VideoPosts />
        <Editorial />
      </main>
      <Footer />
    </div>
  )
}
