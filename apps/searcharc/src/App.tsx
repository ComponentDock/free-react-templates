import { SearchForm } from './components/SearchForm'
import { Footer } from './components/Footer'
import { useEffect } from 'react'

export function App() {
  useEffect(() => {
    document.title = 'SearchArc — Search Form Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-lavender font-sans">
      <main className="flex flex-1 items-center justify-center px-4 py-6">
        <SearchForm />
      </main>
      <Footer />
    </div>
  )
}
