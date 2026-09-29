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
    document.title = 'Searchpeak — Advanced Search Form'
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-searchpeak-bg px-4 font-sans">
      <main className="w-full max-w-[570px] rounded-lg bg-searchpeak-card p-8 shadow-lg">
        <form aria-label="Search form" onSubmit={(e) => e.preventDefault()} className="w-full">
          <SearchBar
            value={searchValue}
            onChange={setSearchValue}
            onKeyDown={handleKeyDown}
            resultCount={108}
          />
          <hr className="my-4 border-searchpeak-border" />
          <AdvancedSearch />
        </form>
      </main>
      <Footer />
    </div>
  )
}
