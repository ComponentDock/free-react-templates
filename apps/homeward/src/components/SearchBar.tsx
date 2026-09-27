import { Search } from 'lucide-react'

export function SearchBar() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-8 text-center text-2xl font-bold text-heading sm:text-3xl">
          Find Your Home
        </h2>
        <form className="flex flex-col gap-4 md:flex-row">
          <div className="flex-1">
            <label htmlFor="property-type" className="mb-1 block text-xs font-medium text-body">
              Property Type
            </label>
            <select
              id="property-type"
              defaultValue=""
              className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-sm text-heading focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            >
              <option value="" disabled>
                Select Type
              </option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
            </select>
          </div>
          <div className="flex-1">
            <label htmlFor="rooms" className="mb-1 block text-xs font-medium text-body">
              No of Rooms
            </label>
            <select
              id="rooms"
              defaultValue=""
              className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-sm text-heading focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            >
              <option value="" disabled>
                Select Rooms
              </option>
              <option value="1">1 Room</option>
              <option value="2">2 Rooms</option>
              <option value="3">3 Rooms</option>
              <option value="4">4+ Rooms</option>
            </select>
          </div>
          <div className="flex-1">
            <label htmlFor="location" className="mb-1 block text-xs font-medium text-body">
              Location
            </label>
            <select
              id="location"
              defaultValue=""
              className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-sm text-heading focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            >
              <option value="" disabled>
                Select Location
              </option>
              <option value="downtown">Downtown</option>
              <option value="suburbs">Suburbs</option>
              <option value="rural">Rural</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              className="flex items-center gap-2 rounded bg-accent px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-accent-dark"
            >
              <Search className="h-4 w-4" aria-hidden="true" />
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
