import { useEffect } from 'react'
import { BlogList } from './components/BlogList'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Pagination } from './components/Pagination'
import { skipLabel } from './data'

export function App() {
  useEffect(() => {
    document.title = 'Vellum — Blog Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand focus:px-4 focus:py-2 focus:text-ink"
      >
        {skipLabel}
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <BlogList />
        <Pagination />
      </main>
      <Footer />
    </div>
  )
}
