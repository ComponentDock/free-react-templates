import { useEffect } from 'react'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { RecentPosts } from './components/RecentPosts'
import { RetroSection } from './components/RetroSection'
import { Subscribe } from './components/Subscribe'

export function App() {
  useEffect(() => {
    document.title = 'Tidbit — Blog Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <Navbar />
      <main>
        <Hero />
        <RecentPosts />
        <RetroSection />
        <Subscribe />
      </main>
      <Footer />
    </div>
  )
}
