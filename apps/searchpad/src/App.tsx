import { useEffect, type KeyboardEvent } from 'react'
import { SearchInput } from './components/SearchInput'
import { Footer } from './components/Footer'

function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
  if (e.key === 'Enter') {
    e.preventDefault()
  }
}

export function App() {
  useEffect(() => {
    document.title = 'Searchpad — Expandable Search Form'
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-searchpad-bg px-4 font-sans">
      <main className="w-full max-w-[570px]">
        <form aria-label="Search form" onSubmit={(e) => e.preventDefault()} className="w-full">
          <div className="mb-[80px]">
            <SearchInput placeholder="Keyword" variant="round" onKeyDown={handleKeyDown} />
          </div>
          <div>
            <SearchInput placeholder="Keyword" variant="square" onKeyDown={handleKeyDown} />
          </div>
        </form>
      </main>
      <Footer />
    </div>
  )
}
