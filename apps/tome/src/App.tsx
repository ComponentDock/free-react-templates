import { useEffect, useState } from 'react'
import { BlogGrid } from './components/BlogGrid'
import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { Pagination } from './components/Pagination'
import { SlideOutNav } from './components/SlideOutNav'

export function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.title = 'Tome — Blog Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <Header menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((value) => !value)} />
      <SlideOutNav open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main className="lg:flex">
        <HeroSlider />
        <div className="w-full lg:w-[56%]">
          <BlogGrid />
          <Pagination />
        </div>
      </main>
    </div>
  )
}
