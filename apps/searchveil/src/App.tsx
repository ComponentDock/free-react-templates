import { useState, useCallback, useEffect } from 'react'
import { Overlay } from './components/Overlay'
import { HintText } from './components/HintText'
import { CloseButton } from './components/CloseButton'
import { SearchInput } from './components/SearchInput'
import { Footer } from './components/Footer'

export function App() {
  const [isOpen, setIsOpen] = useState(true)
  const [query, setQuery] = useState('')

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleQueryChange = useCallback((value: string) => {
    setQuery(value)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  if (!isOpen) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <p className="text-gray-500 text-lg mb-4">Search closed.</p>
        <button
          onClick={() => setIsOpen(true)}
          className="text-gray-600 underline hover:text-gray-900 transition-colors"
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
      <HintText />
      <CloseButton onClose={handleClose} />
      <SearchInput value={query} onChange={handleQueryChange} />
      <Footer />
    </Overlay>
  )
}
