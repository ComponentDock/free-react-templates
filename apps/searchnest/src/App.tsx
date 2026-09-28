import { useEffect } from 'react'
import { SearchFormBar } from './components/SearchFormBar'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Searchnest — Hotel Booking Search'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-body">
      <main className="flex flex-1 items-center justify-center bg-gradient-to-b from-searchnest-peach-start to-searchnest-peach-end px-4 py-20">
        <SearchFormBar />
      </main>
      <Footer />
    </div>
  )
}
