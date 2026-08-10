import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { BlogFeed } from './components/BlogFeed'
import { ShareRail } from './components/ShareRail'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Marginalia — Blog Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <BlogFeed />
      </main>
      <ShareRail />
      <Footer />
    </div>
  )
}
