import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { MatchResultCard } from './components/MatchResultCard'
import { LatestNews } from './components/LatestNews'
import { NextMatchSection } from './components/NextMatchSection'
import { VideosSection } from './components/VideosSection'
import { BlogSection } from './components/BlogSection'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Striker — Football Club Template'
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MatchResultCard />
        <LatestNews />
        <NextMatchSection />
        <VideosSection />
        <BlogSection />
      </main>
      <Footer />
    </>
  )
}
