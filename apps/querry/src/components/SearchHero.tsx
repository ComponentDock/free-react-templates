import { useState, type FormEvent } from 'react'
import { Search } from 'lucide-react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function SearchHero() {
  const [query, setQuery] = useState('')

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src="https://picsum.photos/seed/querry-hero/1920/1080"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />

      {/* Light overlay for readability */}
      <div className="absolute inset-0 bg-white/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-4 py-20 sm:px-6">
        <h1 className="mb-8 text-center text-4xl font-bold uppercase tracking-wide text-white drop-shadow-md sm:text-5xl md:text-6xl">
          What Are You Looking For?
        </h1>

        {/* Search form bar */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full items-center overflow-hidden rounded-full bg-white shadow-lg"
        >
          <input
            type="text"
            placeholder="Type to search."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent px-6 py-4 text-gray-800 placeholder-gray-400 outline-none"
            aria-label="Search"
          />
          <button
            type="submit"
            className="flex items-center justify-center px-5 py-4 text-gray-500 transition-colors hover:text-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            aria-label="Search"
          >
            <Search className="h-6 w-6" aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  )
}
