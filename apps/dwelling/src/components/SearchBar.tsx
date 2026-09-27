import { Search, SlidersHorizontal } from 'lucide-react'

const propertyTypes = ['All Types', 'Apartment', 'Villa', 'House', 'Office']
const cities = ['All Cities', 'New York', 'Los Angeles', 'Chicago', 'Houston']
const priceRanges = ['Any Price', '$500-$1,000', '$1,000-$2,000', '$2,000-$5,000', '$5,000+']

export function SearchBar() {
  return (
    <section className="relative z-10 -mt-16 px-4">
      <div className="mx-auto max-w-5xl rounded-lg bg-white p-6 shadow-xl">
        <h2 className="mb-4 font-heading text-xl font-bold text-text-dark">
          Where would you rather live?
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label
              htmlFor="search-location"
              className="mb-1 block text-xs font-semibold uppercase tracking-wide text-text-muted"
            >
              Location
            </label>
            <div className="relative">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
              />
              <input
                id="search-location"
                type="text"
                placeholder="Enter city or zip"
                className="w-full rounded border border-gray-200 bg-bg-light py-2.5 pl-10 pr-4 text-sm text-text-dark placeholder:text-text-muted/60 focus:border-brand focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="search-type"
              className="mb-1 block text-xs font-semibold uppercase tracking-wide text-text-muted"
            >
              Property Type
            </label>
            <select
              id="search-type"
              className="w-full appearance-none rounded border border-gray-200 bg-bg-light px-4 py-2.5 text-sm text-text-dark focus:border-brand focus:outline-none"
            >
              {propertyTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="search-city"
              className="mb-1 block text-xs font-semibold uppercase tracking-wide text-text-muted"
            >
              City
            </label>
            <select
              id="search-city"
              className="w-full appearance-none rounded border border-gray-200 bg-bg-light px-4 py-2.5 text-sm text-text-dark focus:border-brand focus:outline-none"
            >
              {cities.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="search-price"
              className="mb-1 block text-xs font-semibold uppercase tracking-wide text-text-muted"
            >
              Price Range
            </label>
            <select
              id="search-price"
              className="w-full appearance-none rounded border border-gray-200 bg-bg-light px-4 py-2.5 text-sm text-text-dark focus:border-brand focus:outline-none"
            >
              {priceRanges.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-4">
          <button className="flex items-center gap-2 rounded border border-gray-200 px-4 py-2.5 text-sm text-text-muted transition-colors hover:border-brand hover:text-brand">
            <SlidersHorizontal size={16} />
            More Filters
          </button>
          <button className="rounded bg-brand px-8 py-2.5 font-heading text-sm font-semibold text-white transition-colors hover:bg-brand-dark">
            Search
          </button>
        </div>
      </div>
    </section>
  )
}
