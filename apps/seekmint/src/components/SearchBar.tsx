import { useState, useRef, type KeyboardEvent } from 'react'
import { Search } from 'lucide-react'

interface SearchBarProps {
  placeholder?: string
  onSubmit?: (query: string) => void
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
}

export function SearchBar({ placeholder = 'Search...', onSubmit, onKeyDown }: SearchBarProps) {
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
      className="relative flex w-full max-w-[500px] items-center overflow-hidden rounded-full bg-seekmint-bar-bg"
      style={{
        boxShadow: '0px 8px 24px -8px rgba(0, 0, 0, 0.25)',
      }}
    >
      <input
        ref={inputRef}
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        aria-label={placeholder}
        className="h-[50px] flex-1 border-0 bg-transparent pr-3 pl-5 font-sans text-sm text-seekmint-input-text outline-none placeholder:text-seekmint-placeholder"
      />
      <button
        type="submit"
        aria-label="Search"
        className="mr-1 flex h-[44px] w-[44px] flex-shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-seekmint-btn-bg transition-colors hover:bg-seekmint-btn-hover"
      >
        <Search className="h-5 w-5 text-seekmint-btn-icon" />
      </button>
    </form>
  )
}
