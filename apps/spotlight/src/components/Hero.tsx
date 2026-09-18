import { MapPin, Search } from 'lucide-react'
import { useState } from 'react'

const categories = [
  'All Categories',
  'Apartment',
  'Restaurant',
  'Eat & Drink',
  'Events',
  'Fitness',
  'Others',
]

export function Hero() {
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')
  const [category, setCategory] = useState('')

  return (
    <section
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/spotlight-hero/1600/900)' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 w-full max-w-4xl px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Find Nearby <span className="text-primary">Places</span>
        </h1>
        <p className="mb-8 text-lg text-white/80">
          Explore top-rated attractions, activities and more!
        </p>

        {/* Search form */}
        <form
          className="mx-auto max-w-3xl rounded-lg bg-white p-2 shadow-lg"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-2 md:flex-row">
            <div className="flex flex-1 items-center gap-2 rounded border border-border px-3 py-2">
              <Search className="h-4 w-4 flex-shrink-0 text-body" />
              <input
                type="text"
                placeholder="What are you looking for?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-sm text-heading outline-none placeholder:text-gray-400"
              />
            </div>
            <div className="flex flex-1 items-center gap-2 rounded border border-border px-3 py-2">
              <MapPin className="h-4 w-4 flex-shrink-0 text-body" />
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-transparent text-sm text-heading outline-none placeholder:text-gray-400"
              />
            </div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded border border-border bg-white px-3 py-2 text-sm text-heading"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="rounded bg-primary px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
