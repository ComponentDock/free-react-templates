import { useState, type FormEvent } from 'react'
import { Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const CATEGORIES = ['New Arrivals', 'Ladies', 'Mens', 'Accessories', 'Sale'] as const

export interface CategoryPillsProps {
  className?: string
  onSelect?: (category: string) => void
}

export function CategoryPills({ className, onSelect }: CategoryPillsProps) {
  return (
    <div className={cn('flex flex-wrap justify-center gap-2', className)}>
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onSelect?.(cat)}
          className="rounded-full bg-black/60 px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-black/80 sm:text-sm"
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
}

export interface SearchHeroProps {
  className?: string
}

export function SearchHero({ className }: SearchHeroProps) {
  const [query, setQuery] = useState('')

  return (
    <section
      className={cn(
        'relative flex min-h-screen items-center justify-center bg-cover bg-center',
        className,
      )}
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/seekform-hero/1920/1080)',
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center gap-6 px-4">
        <h1 className="text-center text-3xl font-bold text-white drop-shadow-md sm:text-4xl md:text-5xl">
          What are you looking for?
        </h1>

        <form role="search" onSubmit={handleSubmit} className="flex w-full items-center">
          <div className="relative w-full">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
              aria-hidden="true"
            />
            <input
              type="search"
              role="searchbox"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-full border-0 bg-white py-4 pl-12 pr-6 text-base text-gray-800 shadow-lg outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-white/50"
            />
          </div>
        </form>

        <CategoryPills />
      </div>
    </section>
  )
}
