import { useEffect } from 'react'
import { SearchBar } from './components/SearchBar'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'SearchGate — Animated Search Form'
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-searchgate-bg px-4 font-sans">
      <main className="w-full max-w-[570px]">
        <h1 className="mb-12 text-center font-sans text-[28px] font-normal leading-tight text-black">
          SearchGate
        </h1>
        <SearchBar />
      </main>
      <Footer />
    </div>
  )
}
