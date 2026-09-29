import { useState } from 'react'
import { X } from 'lucide-react'

export function SearchBar() {
  const [query, setQuery] = useState('')

  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-xl font-semibold text-gray-800 sm:text-2xl">Search Form/Bar</h1>

      <div className="relative flex items-center">
        {/* Pill-shaped input container */}
        <div className="flex items-center rounded-full bg-brand-light pr-14">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            aria-label="Search"
            className="h-12 w-56 rounded-full bg-transparent pl-5 pr-4 text-sm text-gray-700 placeholder-gray-500 outline-2 outline-brand focus:outline-brand sm:w-72"
          />
        </div>

        {/* Circular clear button overlapping the pill's right edge */}
        <button
          type="button"
          onClick={() => setQuery('')}
          aria-label="Clear search"
          className="absolute -right-2 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white shadow-md transition-colors duration-200 hover:bg-brand-dark"
        >
          <X size={18} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  )
}
