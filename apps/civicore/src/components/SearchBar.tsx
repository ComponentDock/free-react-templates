import { useState } from 'react'
import { Search } from 'lucide-react'

export function SearchBar() {
  const [category, setCategory] = useState('')
  const [location, setLocation] = useState('')
  const [keyword, setKeyword] = useState('')

  return (
    <section className="bg-brand py-4">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mx-auto flex max-w-5xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:px-6"
      >
        <select
          aria-label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="flex-1 rounded-[3px] px-4 py-3 text-sm text-ink outline-none"
        >
          <option value="">All Categories</option>
          <option value="part-time">Part Time</option>
          <option value="full-time">Full Time</option>
          <option value="remote">Remote</option>
          <option value="office">Office</option>
        </select>

        <select
          aria-label="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="flex-1 rounded-[3px] px-4 py-3 text-sm text-ink outline-none"
        >
          <option value="">All Locations</option>
          <option value="downtown">Downtown</option>
          <option value="suburbs">Suburbs</option>
          <option value="remote">Remote</option>
        </select>

        <div className="relative flex-1">
          <input
            type="text"
            aria-label="Keyword"
            placeholder="Keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full rounded-[3px] px-4 py-3 pr-10 text-sm text-ink outline-none"
          />
          <Search className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mist" />
        </div>

        <button
          type="submit"
          className="rounded-[3px] bg-ink px-8 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-ink/80"
        >
          Find Job
        </button>
      </form>
    </section>
  )
}
