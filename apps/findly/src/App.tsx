import { Navbar } from './components/Navbar'
import { SearchCard } from './components/SearchCard'
import { Footer } from './components/Footer'
import { useEffect } from 'react'

export function App() {
  useEffect(() => {
    document.title = 'Findly — Travel Services Search'
  }, [])

  return (
    <div className="min-h-screen bg-findly-bg font-sans">
      <Navbar />
      <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-gradient-to-b from-findly-bg via-white to-white px-4 py-20">
        <SearchCard />
      </main>
      <Footer />
    </div>
  )
}
