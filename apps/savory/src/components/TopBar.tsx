import { useState, type FormEvent } from 'react'
import { Search, X } from 'lucide-react'
import { SocialIcons } from './SocialIcons'

export function TopBar() {
  const [query, setQuery] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section aria-label="Social header" className="relative bg-ink">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/savory-topbar/1600/300)' }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <SocialIcons />
        <form role="search" onSubmit={handleSubmit} className="flex items-center gap-2">
          <label htmlFor="topbar-search" className="sr-only">
            Search
          </label>
          <input
            id="topbar-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search..."
            className="h-9 w-40 border border-white/30 bg-white/10 px-3 text-sm text-white outline-none placeholder:text-white/60 focus:border-brand sm:w-56"
          />
          {query !== '' && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => setQuery('')}
              className="text-white/80 transition-colors hover:text-brand"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            type="submit"
            aria-label="Submit search"
            className="text-white transition-colors hover:text-brand"
          >
            <Search className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  )
}
