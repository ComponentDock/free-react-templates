import { Search, Calendar, ChevronDown } from 'lucide-react'

const priceOptions = [
  '$5,000',
  '$10,000',
  '$50,000',
  '$100,000',
  '$200,000',
  '$500,000',
  '$1,000,000',
]

export function SearchForm() {
  return (
    <section className="relative z-20 -mt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <form className="rounded-lg bg-white p-6 shadow-xl" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-4 md:grid-cols-5">
            <div className="flex flex-col">
              <label htmlFor="destination" className="mb-1 text-sm font-medium text-gray-700">
                Destination
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  id="destination"
                  type="text"
                  placeholder="Search place"
                  className="w-full rounded border border-gray-300 py-2.5 pl-10 pr-3 text-sm focus:border-sunset-700 focus:outline-none focus:ring-1 focus:ring-sunset-700"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="checkin" className="mb-1 text-sm font-medium text-gray-700">
                Check-in date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  id="checkin"
                  type="text"
                  placeholder="Check In Date"
                  className="w-full rounded border border-gray-300 py-2.5 pl-10 pr-3 text-sm focus:border-sunset-700 focus:outline-none focus:ring-1 focus:ring-sunset-700"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="checkout" className="mb-1 text-sm font-medium text-gray-700">
                Check-out date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  id="checkout"
                  type="text"
                  placeholder="Check Out Date"
                  className="w-full rounded border border-gray-300 py-2.5 pl-10 pr-3 text-sm focus:border-sunset-700 focus:outline-none focus:ring-1 focus:ring-sunset-700"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="price" className="mb-1 text-sm font-medium text-gray-700">
                Price Limit
              </label>
              <div className="relative">
                <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <select
                  id="price"
                  className="w-full appearance-none rounded border border-gray-300 py-2.5 pl-3 pr-10 text-sm focus:border-sunset-700 focus:outline-none focus:ring-1 focus:ring-sunset-700"
                >
                  {priceOptions.map((price) => (
                    <option key={price} value={price}>
                      {price}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full rounded bg-sunset-700 py-2.5 text-sm font-semibold text-white transition hover:bg-sunset-600"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
