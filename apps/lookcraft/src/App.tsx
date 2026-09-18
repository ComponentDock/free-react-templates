import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Gallery } from './components/Gallery'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'LookCraft — Photography Portfolio'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body-text">
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
