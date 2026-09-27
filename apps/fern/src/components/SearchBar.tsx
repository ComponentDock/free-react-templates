import { Search } from 'lucide-react'

const PROPERTY_TYPES = ['Residence', 'Offices', 'Commercial']
const PRICE_LIMITS = [
  '$5,000',
  '$10,000',
  '$50,000',
  '$100,000',
  '$200,000',
  '$300,000',
  '$500,000',
  '$1,000,000',
]

export function SearchBar() {
  return (
    <section className="bg-brand py-6">
      <div className="mx-auto max-w-7xl px-4">
        <form
          className="grid gap-4 rounded-lg bg-white p-6 shadow-lg md:grid-cols-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label htmlFor="keyword" className="mb-1 block text-sm font-semibold text-ink">
              Keyword
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-mist" size={16} />
              <input
                id="keyword"
                type="text"
                placeholder="Enter keyword"
                className="w-full rounded border border-gray-300 py-2 pl-9 pr-3 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />
            </div>
          </div>

          <div>
            <label htmlFor="property-type" className="mb-1 block text-sm font-semibold text-ink">
              Property Type
            </label>
            <select
              id="property-type"
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            >
              {PROPERTY_TYPES.map((t) => (
                <option key={t} value={t.toLowerCase()}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="price-limit" className="mb-1 block text-sm font-semibold text-ink">
              Price Limit
            </label>
            <select
              id="price-limit"
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            >
              {PRICE_LIMITS.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <button
              type="submit"
              className="w-full rounded bg-brand py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
