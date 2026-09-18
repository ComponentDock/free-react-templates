import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Header } from './components/Header'
import { MainNav } from './components/MainNav'
import { FeaturedTabs } from './components/FeaturedTabs'
import { MainContent } from './components/MainContent'
import { Entertainment } from './components/Entertainment'
import { LatestArticles } from './components/LatestArticles'
import { Newsletter } from './components/Newsletter'
import { VideoSection } from './components/VideoSection'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Newscope — Magazine News Blog Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-bg-white text-text-dark">
      <TopBar />
      <Header />
      <MainNav />
      <main className="flex-1">
        <FeaturedTabs />
        <MainContent />
        <Entertainment />
        <LatestArticles />
        <VideoSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
