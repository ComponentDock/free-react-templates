import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { BlogFeed } from './components/BlogFeed'
import { Pagination } from './components/Pagination'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Inkwell — Personal Blog'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink transition-colors dark:bg-gray-950">
      <Navbar />
      <Hero />
      <main>
        <BlogFeed />
        <Pagination />
      </main>
      <Newsletter />
      <Footer />
    </div>
  )
}
