import { useState, type FormEvent } from 'react'
import { Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const CATEGORIES = [
  'All Categories',
  'Furniture',
  'Electronics',
  'Clothing',
  'Home & Garden',
  'Sports',
]

const DEFAULT_CATEGORY = CATEGORIES[0]!

interface SearchBarProps {
  onSearch?: (query: string, category: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState(DEFAULT_CATEGORY)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSearch?.(query, category)
  }

  return (
    <form
      aria-label="Search form"
      onSubmit={handleSubmit}
      className="flex w-full max-w-[700px] overflow-hidden rounded-sm shadow-lg"
    >
      <input
        type="text"
        placeholder="What are you looking for?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search query"
        className={cn(
          'flex-1 border-0 bg-seekbar-input-bg px-5 py-4 font-sans text-base outline-none',
          'placeholder:text-seekbar-placeholder',
        )}
      />

      <div className="relative border-l border-gray-200 bg-seekbar-input-bg">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Category"
          className="appearance-none border-0 bg-transparent py-4 pl-4 pr-10 font-sans text-sm font-medium uppercase text-seekbar-text outline-none cursor-pointer"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <button
        type="submit"
        aria-label="Search"
        className={cn(
          'flex items-center gap-2 border-0 bg-seekbar-btn px-8 py-4 font-sans text-sm font-semibold uppercase text-white cursor-pointer',
          'transition-colors duration-200 hover:bg-seekbar-btn-hover',
        )}
      >
        <Search className="h-4 w-4" aria-hidden="true" />
        Search
      </button>
    </form>
  )
}
