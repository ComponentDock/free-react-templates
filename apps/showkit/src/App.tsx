import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { HomeDemos } from './components/HomeDemos'
import { BlogDemos } from './components/BlogDemos'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Showkit — App Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-gray-900 transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HomeDemos />
        <BlogDemos />
      </main>
      <Footer />
    </div>
  )
}
