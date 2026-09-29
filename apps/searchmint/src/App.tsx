import { useEffect } from 'react'
import { SearchForm } from './components/SearchForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'SearchMint — Minimal Search Bar'
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-searchmint-bg px-4 font-sans">
      <main className="w-full max-w-[640px]">
        <h1 className="mb-12 text-center font-sans text-[28px] font-normal leading-tight text-black">
          Find What You Need
        </h1>
        <SearchForm />
      </main>
      <Footer />
    </div>
  )
}
