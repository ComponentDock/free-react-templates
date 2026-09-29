import { useEffect } from 'react'
import { SearchHero } from './components/SearchHero'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Seekform — Search Form Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <main className="flex-1">
        <SearchHero />
      </main>
      <Footer />
    </div>
  )
}
