import { useEffect } from 'react'
import { SearchHero } from './components/SearchHero'
import { CategoryNav } from './components/CategoryNav'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Querry — Fashion Search Form Hero Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <SearchHero />
      <CategoryNav />
      <Footer />
    </div>
  )
}
