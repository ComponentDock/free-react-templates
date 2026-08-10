import { useEffect } from 'react'
import { Header } from './components/Header'
import { StoriesStrip } from './components/StoriesStrip'
import { FeaturedSlider } from './components/FeaturedSlider'
import { PostGrid } from './components/PostGrid'
import { Pagination } from './components/Pagination'
import { Sidebar } from './components/Sidebar'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Trove'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-muted">
      <Header />
      <main>
        <StoriesStrip />
        <FeaturedSlider />
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <PostGrid />
            <Pagination />
          </div>
          <Sidebar />
        </div>
      </main>
      <Footer />
    </div>
  )
}
