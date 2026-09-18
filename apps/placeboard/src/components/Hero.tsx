import { Search } from 'lucide-react'
import { useState } from 'react'

export function Hero() {
  const [query, setQuery] = useState('')

  return (
    <section
      className="relative flex h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/placeboard-hero/1920/1080)',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h1
          className="mb-4 text-5xl font-bold text-white md:text-6xl"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Find your perfect place.
        </h1>
        <p className="mb-8 text-lg text-white/80">
          Explore the world's most beautiful destinations with Placeboard
        </p>

        {/* Search form */}
        <form
          className="mx-auto flex max-w-xl overflow-hidden"
          onSubmit={(e) => e.preventDefault()}
          role="search"
          aria-label="Search destinations"
        >
          <label htmlFor="hero-search" className="sr-only">
            Search destinations
          </label>
          <input
            id="hero-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Where do you want to go?"
            className="h-14 flex-1 border-0 bg-white px-5 text-body placeholder-gray-400 outline-none"
          />
          <button
            type="submit"
            className="flex h-14 items-center gap-2 bg-primary px-8 text-sm font-semibold uppercase text-white transition-colors hover:bg-primary-hover"
          >
            <Search className="h-4 w-4" />
            Search
          </button>
        </form>
      </div>
    </section>
  )
}
