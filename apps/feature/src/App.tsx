import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { BlogList } from './components/BlogList'
import { Pagination } from './components/Pagination'
import { Sidebar } from './components/Sidebar'
import { InstagramStrip } from './components/InstagramStrip'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'

export function App() {
  useEffect(() => {
    document.title = 'Feature — Editorial Blog'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink-body transition-colors dark:bg-gray-950 dark:text-gray-200">
      <Navbar />
      <HeroSlider />
      <main className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid gap-16 py-20 lg:grid-cols-[2fr_1fr] lg:gap-12">
          <div className="min-w-0">
            <BlogList />
            <Pagination />
          </div>
          <Sidebar />
        </div>
      </main>
      <InstagramStrip />
      <Footer />
      <BackToTop />
    </div>
  )
}
