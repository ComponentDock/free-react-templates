import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Gallery } from './components/Gallery'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Gaze — Photography Gallery Template'
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
