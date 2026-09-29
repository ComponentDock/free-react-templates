import { useEffect } from 'react'
import { SearchInput } from './components/SearchInput'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'SearchGlow — Minimal Search Form'
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[url('https://picsum.photos/seed/searchglow/1920/1080')] bg-cover bg-center px-4 font-sans">
      <main className="w-full max-w-[390px]">
        <form aria-label="Search form" onSubmit={(e) => e.preventDefault()}>
          <SearchInput />
        </form>
      </main>
      <Footer />
    </div>
  )
}
