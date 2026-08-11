import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { FeaturedPosts } from './components/FeaturedPosts'
import { BlogGrid } from './components/BlogGrid'
import { PopularTags } from './components/PopularTags'
import { Footer } from './components/Footer'
import { skipLabel } from './data'

export function App() {
  useEffect(() => {
    document.title = 'Sonder — Lifestyle Blog Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        {skipLabel}
      </a>
      <Navbar />
      <main id="main">
        <FeaturedPosts />
        <BlogGrid />
        <PopularTags />
      </main>
      <Footer />
    </div>
  )
}
