import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { SearchOverlay } from './components/SearchOverlay'
import { Footer } from './components/Footer'

export function App() {
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    document.title = 'Queryvane — Search Form Bar Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <Navbar onSearchToggle={() => setSearchOpen((o) => !o)} />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-16">
        <p className="text-center text-base text-gray-400">
          Click the search icon in the navigation bar to toggle the search form.
        </p>
      </main>
      <Footer />
    </div>
  )
}
