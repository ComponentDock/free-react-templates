import { useState, useRef, useEffect } from 'react'
import { Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface SearchBarProps {
  placeholder?: string
  onSearch?: (query: string) => void
}

export function SearchBar({ placeholder = 'Search...', onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [expanded, setExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setExpanded(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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
      className="flex items-center justify-center"
    >
      <div ref={containerRef} className="relative flex items-center">
        {/* Circular search button */}
        <button
          type="submit"
          aria-label="Search"
          className={cn(
            'relative z-20 flex h-[60px] w-[60px] cursor-pointer items-center justify-center',
            'rounded-full border-0 bg-searchgate-brand shadow-[0_5px_20px_-12px_rgba(0,0,0,0.36)]',
            'transition-colors duration-200 hover:bg-searchgate-brand-hover',
          )}
        >
          <Search className="h-6 w-6 text-white" />
        </button>

        {/* Expandable input */}
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setExpanded(true)}
          aria-label={placeholder}
          className={cn(
            'absolute top-0 z-10 h-[50px] border-0 bg-searchgate-input-bg py-2 pr-4 outline-none',
            'rounded-full pl-[70px] font-sans text-base shadow-[0_5px_20px_-12px_rgba(0,0,0,0.34)]',
            'transition-[width] duration-300 ease-in-out',
            expanded ? 'w-[300px]' : 'w-[150px]',
            'placeholder:text-gray-400',
          )}
          style={expanded ? undefined : { caretColor: 'transparent' }}
        />
      </div>
    </form>
  )
}
