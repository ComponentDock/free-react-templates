import { useEffect } from 'react'
import { BlogGrid } from './components/BlogGrid'
import { CategoryTiles } from './components/CategoryTiles'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { Sidebar } from './components/Sidebar'

export function App() {
  useEffect(() => {
    document.title = 'Savor — Food Magazine Blog'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <Header />
      <main>
        <HeroSlider />
        <CategoryTiles />
        <div className="mx-auto grid max-w-6xl gap-14 px-4 pb-20 sm:px-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <BlogGrid />
          </div>
          <Sidebar />
        </div>
      </main>
      <Footer />
    </div>
  )
}
