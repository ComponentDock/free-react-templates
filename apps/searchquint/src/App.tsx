import { useState, useCallback, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { SearchOverlay } from './components/SearchOverlay'
import { Content } from './components/Content'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'SearchQuint — Search Form Snippet'
  }, [])

  const [searchOpen, setSearchOpen] = useState(false)

  const toggleSearch = useCallback(() => {
    setSearchOpen((prev) => !prev)
  }, [])

  const closeSearch = useCallback(() => {
    setSearchOpen(false)
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SearchOverlay isOpen={searchOpen} onClose={closeSearch} />
      <Navbar onToggleSearch={toggleSearch} searchOpen={searchOpen} />
      <main className="flex flex-col items-center px-4 py-28 text-center">
        <Content />
      </main>
      <Footer />
    </div>
  )
}
