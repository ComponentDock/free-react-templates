import { useEffect } from 'react'
import { SearchBar } from './components/SearchBar'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Findspot — Search Form Bar'
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center bg-findspot-bg font-sans">
      <main className="flex w-full max-w-[600px] flex-col items-center px-4 pt-[8em]">
        <h1 className="mb-3 text-center text-[32px] font-semibold leading-tight text-findspot-heading">
          Findspot
        </h1>
        <p className="mb-10 text-center text-base text-findspot-subtitle">
          Find what you're looking for
        </p>
        <div className="w-full">
          <SearchBar placeholder="Type to search..." />
        </div>
      </main>
      <div className="mt-auto w-full">
        <Footer />
      </div>
    </div>
  )
}
