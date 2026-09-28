import { useEffect } from 'react'
import { SearchForm } from './components/SearchForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Filtera — Fancy Search Form Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-bg font-sans text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <SearchForm />
      <Footer />
    </div>
  )
}
