import { useState, useCallback } from 'react'
import { Overlay } from './components/Overlay'
import { CloseButton } from './components/CloseButton'
import { SearchBar } from './components/SearchBar'
import { Footer } from './components/Footer'

export function App() {
  const [isOpen, setIsOpen] = useState(true)
  const [query, setQuery] = useState('')

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleSearch = useCallback((searchQuery: string) => {
    setQuery(searchQuery)
  }, [])

  if (!isOpen) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#f8f9fa]">
        <p className="text-gray-500 text-lg mb-4">Search closed.</p>
        <button
          onClick={() => setIsOpen(true)}
          className="text-[#4a8cf7] underline hover:text-[#3a7ce6] transition-colors"
          aria-label="Reopen search"
        >
          Open search again
        </button>
        {query && (
          <p className="mt-4 text-gray-600 text-sm">
            Last search: <span className="font-medium">{query}</span>
          </p>
        )}
        <Footer />
      </div>
    )
  }

  return (
    <Overlay>
      <CloseButton onClose={handleClose} />
      <SearchBar onSearch={handleSearch} />
      <Footer />
    </Overlay>
  )
}
