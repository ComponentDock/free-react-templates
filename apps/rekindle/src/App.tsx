import { useEffect } from 'react'
import { Banner } from './components/Banner'
import { BlogGrid } from './components/BlogGrid'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Pagination } from './components/Pagination'
import { Sidebar } from './components/Sidebar'
import { skipLabel } from './data'

export function App() {
  useEffect(() => {
    document.title = 'Rekindle — Blog Magazine Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-muted">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        {skipLabel}
      </a>
      <Navbar />
      <main id="main">
        <Banner />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <BlogGrid />
            <Pagination />
          </div>
          <div className="lg:col-span-4">
            <Sidebar />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
