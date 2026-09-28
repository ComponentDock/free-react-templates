import { useState, type FormEvent } from 'react'
import { Search } from 'lucide-react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function SearchHero() {
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')

  return (
    <section className="relative flex min-h-screen items-center justify-start overflow-hidden">
      {/* Background image */}
      <img
        src="https://picsum.photos/seed/seekly-hero/1920/1080"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <h1 className="mb-8 text-4xl font-bold text-white drop-shadow-lg sm:text-5xl md:text-6xl">
          Discover the Amazing City
        </h1>

        {/* Search form bar */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 rounded-lg bg-black/60 p-4 sm:flex-row sm:items-center"
        >
          <input
            type="text"
            placeholder="What are you looking for?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 rounded bg-white px-4 py-3 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-brand"
            aria-label="Search query"
          />
          <input
            type="text"
            placeholder="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="flex-1 rounded bg-white px-4 py-3 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-brand"
            aria-label="Location"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded bg-brand px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
            Search
          </button>
        </form>
      </div>
    </section>
  )
}
