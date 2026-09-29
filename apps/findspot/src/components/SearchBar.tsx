import { useState, useRef, type KeyboardEvent } from 'react'
import { Search } from 'lucide-react'

interface SearchBarProps {
  placeholder?: string
  onSubmit?: (query: string) => void
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
}

export function SearchBar({
  placeholder = 'Type to search...',
  onSubmit,
  onKeyDown,
}: SearchBarProps) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.(query)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(e)
  }

  return (
    <form
      aria-label="Search form"
      onSubmit={handleSubmit}
      className="flex w-full items-center rounded-lg border border-findspot-bar-border bg-findspot-bar-bg"
    >
      <button
        type="button"
        aria-label="Search icon"
        className="flex h-14 w-14 flex-shrink-0 cursor-pointer items-center justify-center border-0 bg-transparent"
        onClick={() => inputRef.current?.focus()}
      >
        <Search className="h-5 w-5 text-findspot-icon" />
      </button>
      <input
        ref={inputRef}
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        aria-label={placeholder}
        className="h-14 flex-1 border-0 bg-transparent pr-2 font-sans text-sm text-white outline-none placeholder:text-findspot-placeholder"
      />
      <button
        type="submit"
        className="mx-2 h-10 flex-shrink-0 cursor-pointer rounded-lg border-0 bg-findspot-btn px-6 font-sans text-sm font-medium text-white transition-colors hover:bg-findspot-btn-hover"
      >
        Search
      </button>
    </form>
  )
}
