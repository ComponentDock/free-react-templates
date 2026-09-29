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
      className="relative w-full max-w-[500px] rounded-full bg-seekdot-bar-bg"
      style={{
        boxShadow: '0px 5px 20px -12px rgba(0, 0, 0, 0.34)',
      }}
    >
      <div className="flex h-[50px] items-center">
        <button
          type="button"
          aria-label="Search"
          className="ml-0 flex h-[50px] w-[50px] flex-shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-seekdot-icon-circle transition-colors hover:bg-seekdot-link-hover"
          onClick={() => inputRef.current?.focus()}
        >
          <Search className="h-5 w-5 text-seekdot-icon" />
        </button>
        <input
          ref={inputRef}
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          aria-label={placeholder}
          className="h-full flex-1 border-0 bg-transparent pr-5 pl-3 font-sans text-sm text-seekdot-input-text outline-none placeholder:text-seekdot-placeholder"
        />
      </div>
    </form>
  )
}
