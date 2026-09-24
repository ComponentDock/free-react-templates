import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { BlogContent } from './components/BlogContent'
import { InstagramFeed } from './components/InstagramFeed'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Byline — Blog & Magazine Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-paper text-mist transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BlogContent />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  )
}
