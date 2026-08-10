import { useEffect } from 'react'
import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { IntroTeasers } from './components/IntroTeasers'
import { BlogSection } from './components/BlogSection'
import { VideoPromo } from './components/VideoPromo'
import { FeaturedSplit } from './components/FeaturedSplit'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Pixelpress — Gaming Blog Template'
  }, [])

  return (
    <div className="bg-white font-sans text-[#111]">
      <Header />
      <main>
        <HeroSlider />
        <IntroTeasers />
        <BlogSection />
        <VideoPromo />
        <FeaturedSplit />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
