import { useState, type FormEvent } from 'react'
import { Search, MapPin } from 'lucide-react'

const categories = ['Hotel', 'Food', 'Shopping', 'Bar & Pubs', 'Places']

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function Hero() {
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')

  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center pt-20"
      style={{
        backgroundImage:
          'linear-gradient(rgba(26,26,46,0.7), rgba(26,26,46,0.8)), url(https://picsum.photos/seed/dirly-city/1600/900)',
      }}
    >
      <div className="mx-auto w-full max-w-4xl px-4 text-center">
        {/* Subtitle */}
        <p className="mb-2 font-[family-name:var(--font-family-heading)] text-lg italic text-brand">
          Find Nearby Attraction
        </p>

        {/* Main heading */}
        <h1 className="mb-10 font-[family-name:var(--font-family-heading)] text-5xl font-bold italic text-white md:text-6xl">
          Find Nearby Attraction
        </h1>

        {/* Search bar */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto mb-8 flex max-w-2xl items-center overflow-hidden rounded bg-white shadow-lg"
          role="search"
          aria-label="Find nearby attractions"
        >
          <div className="flex flex-1 items-center border-r border-gray-200 px-4">
            <Search className="mr-2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What are you finding?"
              className="w-full py-4 text-sm text-text-dark placeholder-gray-400 focus:outline-none"
              aria-label="What are you finding"
            />
          </div>
          <div className="flex flex-1 items-center px-4">
            <MapPin className="mr-2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              className="w-full py-4 text-sm text-text-dark placeholder-gray-400 focus:outline-none"
              aria-label="Location"
            />
          </div>
          <button
            type="submit"
            className="bg-brand px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
          >
            Search
          </button>
        </form>

        {/* Category tags */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <a
              key={cat}
              href="#categories"
              className="rounded-full bg-black/40 px-5 py-2 text-sm text-white/90 backdrop-blur-sm transition-colors hover:bg-black/60"
            >
              {cat}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
