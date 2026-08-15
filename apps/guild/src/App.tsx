import { useEffect } from 'react'
import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { BlogSection } from './components/BlogSection'
import { BlogListSection } from './components/BlogListSection'
import { VideoSection } from './components/VideoSection'
import { Footer } from './components/Footer'
import { siteName, skipLabel } from './data'

export function App() {
  useEffect(() => {
    document.title = `${siteName} — Gaming Community Website`
  }, [])

  return (
    <div className="min-h-screen bg-section font-sans text-meta">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[99999] focus:bg-brand focus:px-4 focus:py-2 focus:text-ink"
      >
        {skipLabel}
      </a>
      <Header />
      <main id="main">
        <HeroSlider />
        <BlogSection />
        <BlogListSection />
        <VideoSection />
      </main>
      <Footer />
    </div>
  )
}
