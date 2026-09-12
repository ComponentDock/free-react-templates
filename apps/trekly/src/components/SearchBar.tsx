import { MapPin, Calendar, DollarSign, Search } from 'lucide-react'

const priceOptions = ['$5,000', '$10,000', '$50,000', '$100,000', '$200,000', '$500,000']

export function SearchBar() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-ocean-600">
            Explore
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">Where Do You Want to Go?</h2>
          <p className="mt-2 text-gray-500">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-2xl bg-gray-50 p-6 shadow-sm ring-1 ring-gray-100"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <div className="relative">
              <label
                htmlFor="destination"
                className="mb-1 block text-xs font-semibold text-gray-600"
              >
                Destination
              </label>
              <div className="pointer-events-none absolute bottom-3 left-3 text-gray-400">
                <MapPin className="h-4 w-4" />
              </div>
              <input
                id="destination"
                type="text"
                placeholder="Search place"
                className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-9 pr-3 text-sm text-gray-700 placeholder-gray-400 focus:border-ocean-500 focus:outline-none focus:ring-1 focus:ring-ocean-500"
              />
            </div>
            <div className="relative">
              <label htmlFor="checkin" className="mb-1 block text-xs font-semibold text-gray-600">
                Check-in Date
              </label>
              <div className="pointer-events-none absolute bottom-3 left-3 text-gray-400">
                <Calendar className="h-4 w-4" />
              </div>
              <input
                id="checkin"
                type="text"
                placeholder="Check In Date"
                className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-9 pr-3 text-sm text-gray-700 placeholder-gray-400 focus:border-ocean-500 focus:outline-none focus:ring-1 focus:ring-ocean-500"
              />
            </div>
            <div className="relative">
              <label htmlFor="checkout" className="mb-1 block text-xs font-semibold text-gray-600">
                Check-out Date
              </label>
              <div className="pointer-events-none absolute bottom-3 left-3 text-gray-400">
                <Calendar className="h-4 w-4" />
              </div>
              <input
                id="checkout"
                type="text"
                placeholder="Check Out Date"
                className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-9 pr-3 text-sm text-gray-700 placeholder-gray-400 focus:border-ocean-500 focus:outline-none focus:ring-1 focus:ring-ocean-500"
              />
            </div>
            <div className="relative">
              <label htmlFor="price" className="mb-1 block text-xs font-semibold text-gray-600">
                Price Limit
              </label>
              <div className="pointer-events-none absolute bottom-3 left-3 text-gray-400">
                <DollarSign className="h-4 w-4" />
              </div>
              <select
                id="price"
                className="w-full appearance-none rounded-lg border border-gray-200 bg-white py-3 pl-9 pr-3 text-sm text-gray-700 focus:border-ocean-500 focus:outline-none focus:ring-1 focus:ring-ocean-500"
              >
                {priceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-ocean-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:ring-offset-2"
              >
                <Search className="h-4 w-4" />
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
