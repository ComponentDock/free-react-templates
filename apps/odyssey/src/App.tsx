import { useEffect } from 'react'
import { BlogList } from './components/BlogList'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { PostSlider } from './components/PostSlider'
import { Sidebar } from './components/Sidebar'
import { skipLabel } from './data'

export function App() {
  useEffect(() => {
    document.title = 'Odyssey — Travel Blog Template'
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
        <Hero />
        <PostSlider />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <BlogList />
            </div>
            <Sidebar />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
