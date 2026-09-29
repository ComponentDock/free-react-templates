import { useEffect } from 'react'
import { SearchCard } from './components/SearchCard'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Seekgate — Advanced Search Form'
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-seekgate-bg px-4 font-sans">
      <main className="w-full max-w-[560px]">
        <SearchCard />
      </main>
      <Footer />
    </div>
  )
}
