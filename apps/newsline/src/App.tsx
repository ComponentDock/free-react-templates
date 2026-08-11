import { useEffect } from 'react'
import { documentTitle, skipLabel } from './data'
import { TopHeader } from './components/TopHeader'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TrendingVideos } from './components/TrendingVideos'
import { Content } from './components/Content'
import { Footer } from './components/Footer'

/* Newsline — single-page news & magazine landing (recreation of the
   ColorLib "Vizew" template). Section order matches the reference 1:1:
   top header → navbar → hero (featured + playlist) → trending grid →
   featured/category blocks + sidebar → footer. */
export function App() {
  useEffect(() => {
    document.title = documentTitle
  }, [])

  return (
    <div className="min-h-screen bg-night font-display text-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        {skipLabel}
      </a>
      <TopHeader />
      <Navbar />
      <main id="main">
        <Hero />
        <TrendingVideos />
        <Content />
      </main>
      <Footer />
    </div>
  )
}
