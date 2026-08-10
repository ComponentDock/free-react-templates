import { useEffect } from 'react'
import { BlogSection } from './components/BlogSection'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'

export function App() {
  useEffect(() => {
    document.title = 'Flamingo — Blog Template'
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}
