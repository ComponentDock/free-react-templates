import { useEffect } from 'react'
import { Banner } from './components/Banner'
import { BlogGrid } from './components/BlogGrid'
import { Footer } from './components/Footer'
import { LoadMore } from './components/LoadMore'
import { Navbar } from './components/Navbar'
import { Pagination } from './components/Pagination'
import { Sidebar } from './components/Sidebar'
import { SocialConnect } from './components/SocialConnect'

export function App() {
  useEffect(() => {
    document.title = 'Ochre — Blog Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body dark:bg-gray-900">
      <Navbar />
      <main>
        <Banner />
        <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6">
          <div className="grid gap-14 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <BlogGrid />
              <LoadMore />
              <Pagination />
            </div>
            <Sidebar />
          </div>
        </div>
        <SocialConnect />
      </main>
      <Footer />
    </div>
  )
}
