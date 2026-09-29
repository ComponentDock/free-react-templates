import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  if (!isOpen) return null

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (query.trim()) {
      setQuery('')
    }
  }

  return (
    <div className="border-b border-gray-200 bg-overlay">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-6">
        <form onSubmit={handleSubmit} className="flex flex-1 items-center gap-3">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="flex-1 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
          <button
            type="submit"
            className="rounded-full bg-brand px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Search
          </button>
        </form>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close search"
          className="ml-4 text-gray-500 transition-colors hover:text-gray-700"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
