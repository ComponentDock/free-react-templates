import { useEffect } from 'react'
import { documentTitle, skipLabel } from './data'
import { FeaturedSlider } from './components/FeaturedSlider'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Pagination } from './components/Pagination'
import { RecentPosts } from './components/RecentPosts'
import { Sidebar } from './components/Sidebar'

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
      <Header />
      <main id="main">
        <Hero />
        <FeaturedSlider />
        <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <RecentPosts />
              <Pagination />
            </div>
            <div className="lg:col-span-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
