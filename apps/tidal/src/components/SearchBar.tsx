import { useState } from 'react'
import { Calendar } from 'lucide-react'

const tabs = ['Tour', 'Hotel', 'Destination'] as const

export function SearchBar() {
  const [active, setActive] = useState<(typeof tabs)[number]>('Tour')

  return (
    <section
      aria-label="Search"
      className="relative z-10 -mt-16 mx-auto max-w-5xl rounded-lg bg-white px-6 py-8 shadow-lg sm:px-8"
    >
      <div className="flex gap-1 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={`px-6 py-3 text-sm font-semibold transition-colors ${
              active === tab
                ? 'border-b-2 border-brand text-brand'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label
            htmlFor="search-destination"
            className="mb-1 block text-xs font-medium text-text-secondary"
          >
            Destination
          </label>
          <input
            id="search-destination"
            type="text"
            placeholder="Where to?"
            className="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
        </div>
        <div>
          <label
            htmlFor="search-date"
            className="mb-1 block text-xs font-medium text-text-secondary"
          >
            Date
          </label>
          <div className="relative">
            <input
              id="search-date"
              type="date"
              className="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
            />
            <Calendar
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary"
              aria-hidden="true"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="search-guests"
            className="mb-1 block text-xs font-medium text-text-secondary"
          >
            Guests
          </label>
          <input
            id="search-guests"
            type="number"
            min={1}
            defaultValue={2}
            className="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
        </div>
        <div className="flex items-end">
          <button
            type="button"
            className="w-full rounded bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  )
}
