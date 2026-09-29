import { useEffect } from 'react'
import { SearchBar } from './components/SearchBar'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'SeekSpot — Search Form Bar Widget'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f5f5] font-sans">
      <main className="flex flex-1 items-center justify-center px-4">
        <SearchBar />
      </main>
      <Footer />
    </div>
  )
}
