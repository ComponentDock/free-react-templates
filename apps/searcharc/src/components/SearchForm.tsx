import { useState } from 'react'
import { Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const CATEGORIES = [
  'All Categories',
  'Web Design',
  'Development',
  'Graphic Design',
  'Marketing',
  'SEO',
  'Business',
] as const

function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
}

export function SearchForm() {
  const [category, setCategory] = useState<string>(CATEGORIES[0])
  const [query, setQuery] = useState('')

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Search form"
      className={cn(
        'flex w-full max-w-[790px] flex-col items-stretch rounded-[3px] bg-white shadow-[0px_8px_20px_0px_rgba(0,0,0,0.15)] sm:flex-row',
      )}
    >
      {/* Category dropdown */}
      <div className="flex items-center border-b border-black/10 sm:border-b-0 sm:border-r sm:border-black/10">
        <label htmlFor="search-category" className="sr-only">
          Category
        </label>
        <select
          id="search-category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Search category"
          className={cn(
            'h-[50px] w-full appearance-none bg-transparent px-4 pr-10 text-sm text-input-text focus:outline-none sm:h-[68px] sm:w-[200px]',
          )}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23e5e5e5' viewBox='0 0 16 16'%3E%3Cpath d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 12px center',
          }}
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Text input */}
      <div className="flex flex-1 items-center border-b border-black/10 sm:border-b-0">
        <label htmlFor="search-query" className="sr-only">
          Search keywords
        </label>
        <input
          id="search-query"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter Keywords?"
          aria-label="Search keywords"
          className={cn(
            'h-[50px] w-full bg-transparent px-8 text-sm text-input-text placeholder:text-input-placeholder focus:outline-none sm:h-[68px]',
          )}
        />
      </div>

      {/* Search button */}
      <button
        type="submit"
        aria-label="Search"
        className={cn(
          'flex h-[50px] w-full items-center justify-center bg-btn-green text-white transition-colors hover:bg-btn-green-hover sm:h-[68px] sm:w-[74px]',
        )}
      >
        <Search size={16} strokeWidth={2} aria-hidden="true" />
      </button>
    </form>
  )
}
