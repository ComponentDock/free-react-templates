import { useEffect } from 'react'
import { documentTitle, skipLabel } from './data'
import { BlogGrid } from './components/BlogGrid'
import { FeaturedFlex } from './components/FeaturedFlex'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { InstagramStrip } from './components/InstagramStrip'

export function App() {
  useEffect(() => {
    document.title = documentTitle
  }, [])

  return (
    <div className="min-h-screen bg-page font-sans text-muted">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        {skipLabel}
      </a>
      <Header />
      <main id="main">
        <FeaturedFlex />
        <BlogGrid />
        <InstagramStrip />
      </main>
      <Footer />
    </div>
  )
}
