import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Carousel } from './components/Carousel'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'SlideSpot — Split-Screen Carousel Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Carousel />
      </main>
      <Footer />
    </div>
  )
}
