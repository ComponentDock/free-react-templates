import { useEffect } from 'react'
import { BlogGrid } from './components/BlogGrid'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Pagination } from './components/Pagination'
import { Sidebar } from './components/Sidebar'

export function App() {
  useEffect(() => {
    document.title = 'Glyph — Blog Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <Navbar />
      <main>
        <Hero />
        <div className="mx-auto max-w-6xl px-4 py-[120px] lg:px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <BlogGrid />
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
