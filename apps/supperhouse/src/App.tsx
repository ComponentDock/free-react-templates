import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Dishes } from './components/Dishes'
import { VideoSection } from './components/VideoSection'
import { Features } from './components/Features'
import { Menus } from './components/Menus'
import { Chefs } from './components/Chefs'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Supperhouse — Restaurant Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Dishes />
        <VideoSection />
        <Features />
        <Menus />
        <Chefs />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
