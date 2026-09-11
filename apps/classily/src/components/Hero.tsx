import { useState, type FormEvent } from 'react'
import { Search } from 'lucide-react'

const categories = [
  'All Categories',
  'Real Estate',
  'Jobs',
  'Vehicles',
  'Electronics',
  'Furniture',
  'Fashion',
] as const
type Category = (typeof categories)[number]

function handleSearch(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
}

export function Hero() {
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')
  const [category, setCategory] = useState<Category>(categories[0])

  return (
    <section id="home" className="relative overflow-hidden bg-ink dark:bg-gray-950">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/classily-hero/1600/900"
          alt="Workspace with laptop and coffee"
          className="h-full w-full object-cover opacity-40 grayscale"
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 lg:py-32">
        <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Find What You Need
        </h1>
        <p className="mt-4 text-base text-gray-300 sm:text-lg">
          Browse thousands of classified ads across every category
        </p>

        <form
          onSubmit={handleSearch}
          className="mx-auto mt-10 flex flex-col gap-3 rounded-lg bg-white p-4 shadow-xl sm:flex-row sm:items-center"
          role="search"
        >
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="What are you looking for?"
            aria-label="Search query"
            className="flex-1 rounded-md border border-gray-300 px-4 py-3 text-sm text-ink placeholder:text-mist focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          />
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Location"
            aria-label="Location"
            className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-ink placeholder:text-mist focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand sm:w-48"
          />
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value as Category)}
            aria-label="Category"
            className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-ink focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand sm:w-48"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            Search
          </button>
        </form>
      </div>
    </section>
  )
}
