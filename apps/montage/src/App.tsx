import { useEffect } from 'react'
import { documentTitle, skipLabel } from './data'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { HeroGrid } from './components/HeroGrid'
import { VideoTabs } from './components/VideoTabs'
import { TravelVideos } from './components/TravelVideos'
import { SmallVideos } from './components/SmallVideos'
import { AdBanner } from './components/AdBanner'
import { Footer } from './components/Footer'

/* Montage — single-page video magazine landing (recreation of the ColorLib
   "Videomag" template). Section order matches the reference 1:1: top header
   → navbar → hero grid → tabbed carousels → travel videos → small videos →
   ad banner → footer. */
export function App() {
  useEffect(() => {
    document.title = documentTitle
  }, [])

  return (
    <div className="min-h-screen bg-white font-display text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        {skipLabel}
      </a>
      <Header />
      <Navbar />
      <main id="main">
        <HeroGrid />
        <VideoTabs />
        <TravelVideos />
        <SmallVideos />
        <AdBanner />
      </main>
      <Footer />
    </div>
  )
}
