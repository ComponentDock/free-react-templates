import { Search } from 'lucide-react'

const propertyTypes = ['Commercial', 'Residential', 'Villa', 'Condominium', 'Apartment']
const propertyStatuses = ['Rent', 'Sale']
const bedOptions = ['1', '2', '3', '4', '5']

export function PropertySearch() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="rounded-lg bg-surface p-6 shadow-md">
          <h2 className="mb-6 text-xl font-semibold text-primary">Search Property</h2>
          <form
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label htmlFor="keyword" className="mb-1 block text-sm font-medium text-gray-700">
                Keyword
              </label>
              <input
                id="keyword"
                type="text"
                placeholder="Enter keyword"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="location" className="mb-1 block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                id="location"
                type="text"
                placeholder="Enter location"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="type" className="mb-1 block text-sm font-medium text-gray-700">
                Property Type
              </label>
              <select
                id="type"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="">All Types</option>
                {propertyTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="status" className="mb-1 block text-sm font-medium text-gray-700">
                Property Status
              </label>
              <select
                id="status"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="">All</option>
                {propertyStatuses.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="beds" className="mb-1 block text-sm font-medium text-gray-700">
                Min Beds
              </label>
              <select
                id="beds"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="">Any</option>
                {bedOptions.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="minPrice" className="mb-1 block text-sm font-medium text-gray-700">
                Min Price
              </label>
              <input
                id="minPrice"
                type="number"
                placeholder="$0"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="maxPrice" className="mb-1 block text-sm font-medium text-gray-700">
                Max Price
              </label>
              <input
                id="maxPrice"
                type="number"
                placeholder="$1,000,000"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accent-dark"
              >
                <Search size={16} />
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
