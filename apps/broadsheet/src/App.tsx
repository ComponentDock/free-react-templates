import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeaturedPosts } from './components/FeaturedPosts'
import { PopularNews } from './components/PopularNews'
import { VideoSection } from './components/VideoSection'
import { Editorial } from './components/Editorial'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'BroadSheet — News & Magazine Template'
  }, [])

  return (
    <div className="min-h-screen bg-white text-text-body">
      <TopBar />
      <Navbar />
      <Hero />
      <FeaturedPosts />
      <PopularNews />
      <VideoSection />
      <Editorial />
      <Footer />
    </div>
  )
}
