import { useState } from 'react'
import { Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const CATEGORIES = ['New Arrivals', 'Ladies', 'Mens', 'Accessories', 'Sale'] as const

function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
}

export function HeroSearch() {
  const [query, setQuery] = useState('')

  return (
    <section
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-4"
      style={{
        backgroundImage: "url('https://picsum.photos/seed/querywell-hero/1920/1080')",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center gap-6">
        {/* Heading */}
        <h1 className="text-center font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl md:text-5xl">
          What Are You Looking For?
        </h1>

        {/* Search bar */}
        <form
          onSubmit={handleSubmit}
          aria-label="Search form"
          className="flex w-full items-center bg-search-bg"
        >
          <label htmlFor="search-query" className="sr-only">
            Search
          </label>
          <input
            id="search-query"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type to search."
            aria-label="Search"
            className="flex-1 bg-transparent px-6 py-4 text-sm text-white placeholder:text-search-placeholder focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Search"
            className="flex items-center justify-center px-5 py-4 text-white transition-colors hover:text-white/80"
          >
            <Search size={20} strokeWidth={2} aria-hidden="true" />
          </button>
        </form>

        {/* Category links */}
        <nav aria-label="Categories" className="flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((cat) => (
            <a
              key={cat}
              href={`#${cat.toLowerCase().replace(/\s+/g, '-')}`}
              className={cn(
                'rounded-sm bg-category-bg px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-category-hover hover:text-white',
              )}
            >
              {cat}
            </a>
          ))}
        </nav>
      </div>
    </section>
  )
}
