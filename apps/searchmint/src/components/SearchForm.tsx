import { useState } from 'react'
import { Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface SearchFormProps {
  placeholder?: string
  onSearch?: (query: string) => void
}

export function SearchForm({ placeholder = 'Search...', onSearch }: SearchFormProps) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      onSearch?.(query.trim())
    }
  }

  return (
    <form
      aria-label="Search form"
      onSubmit={handleSubmit}
      className="flex w-full items-center justify-between rounded-[2px] bg-transparent transition-all duration-300"
    >
      <input
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label={placeholder}
        className={cn(
          'h-[50px] flex-1 rounded-[2px] border-none bg-searchmint-input-bg py-0 pl-5 pr-4',
          'text-sm shadow-[0_5px_20px_-12px_rgba(0,0,0,0.2)] placeholder:text-black/70',
          'focus:shadow-[0_5px_20px_-12px_rgba(0,0,0,0.34)] focus:outline-none',
        )}
      />
      <button
        type="submit"
        aria-label="Search"
        className={cn(
          'ml-2 flex h-[50px] w-[90px] cursor-pointer items-center justify-center',
          'rounded-[2px] border-none bg-searchmint-brand shadow-[0_5px_20px_-12px_rgba(0,0,0,0.34)]',
          'font-sans text-sm text-white transition-colors duration-200 hover:bg-searchmint-brand-hover',
          'focus:outline-none',
        )}
      >
        <Search className="mr-1 h-4 w-4" />
        Search
      </button>
    </form>
  )
}
