import { useEffect } from 'react'
import { documentTitle, skipLabel } from './data'
import { Navbar } from './components/Navbar'
import { RecentPosts } from './components/RecentPosts'
import { FeaturedGrey } from './components/FeaturedGrey'
import { PostsSidebar } from './components/PostsSidebar'
import { Footer } from './components/Footer'

/* Newsstand — single-page magazine & blog landing (recreation of the
   ColorLib "Webmag" template). Section order matches the reference 1:1:
   fixed header (nav + search overlay + aside drawer) → Recent Posts +
   Most Read sidebar → grey Featured band → Featured Posts + sidebar widgets
   → light footer. */
export function App() {
  useEffect(() => {
    document.title = documentTitle
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
      <main id="main" className="pt-[70px]">
        <RecentPosts />
        <FeaturedGrey />
        <PostsSidebar />
      </main>
      <Footer />
    </div>
  )
}
