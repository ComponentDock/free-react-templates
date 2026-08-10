import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { BlogSection } from './components/BlogSection'
import { MorePosts } from './components/MorePosts'
import { Sidebar } from './components/Sidebar'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Gazette — Blog & Magazine'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink transition-colors dark:bg-gray-950">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-4 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <BlogSection />
            <MorePosts />
          </div>
          <div className="lg:col-span-4 lg:pl-[5em]">
            <Sidebar />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
