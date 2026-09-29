import { useCallback, useState } from 'react'
import { Navbar } from './components/Navbar'
import { SearchOverlay } from './components/SearchOverlay'
import { ContentSection } from './components/ContentSection'
import { Footer } from './components/Footer'

export function App() {
  const [searchOpen, setSearchOpen] = useState(false)

  const toggleSearch = useCallback(() => setSearchOpen((prev) => !prev), [])
  const closeSearch = useCallback(() => setSearchOpen(false), [])

  return (
    <div className="min-h-screen bg-white font-[Roboto] text-[#212529]">
      <div className="relative">
        <Navbar onToggleSearch={toggleSearch} />
        <SearchOverlay isOpen={searchOpen} onClose={closeSearch} />
      </div>
      <main>
        <ContentSection />
      </main>
      <Footer />
    </div>
  )
}
