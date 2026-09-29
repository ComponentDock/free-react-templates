import { useEffect, useState, type KeyboardEvent } from 'react'
import { SearchBar } from './components/SearchBar'
import { AdvancedSearch } from './components/AdvancedSearch'
import { Footer } from './components/Footer'

function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
  if (e.key === 'Enter') {
    e.preventDefault()
  }
}

export function App() {
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    document.title = 'Seekstream — Advanced Search Form'
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-seekstream-bg px-4 font-sans">
      <main className="w-full max-w-[570px] overflow-hidden rounded-lg bg-seekstream-card shadow-lg">
        <form aria-label="Search form" onSubmit={(e) => e.preventDefault()} className="w-full">
          <div className="p-6">
            <SearchBar value={searchValue} onChange={setSearchValue} onKeyDown={handleKeyDown} />
          </div>
          <div className="bg-seekstream-panel p-6">
            <AdvancedSearch />
          </div>
        </form>
      </main>
      <Footer />
    </div>
  )
}
