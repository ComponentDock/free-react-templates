import { Search } from 'lucide-react'

export function FilterBar() {
  return (
    <section className="bg-white py-8 shadow-md" aria-label="Property search filter">
      <div className="mx-auto max-w-7xl px-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col md:flex-row items-center gap-4"
          aria-label="Search properties"
        >
          <div className="flex-1 w-full">
            <input
              type="text"
              placeholder="Enter keyword..."
              className="w-full border border-gray-300 px-4 py-3 text-sm focus:border-primary focus:outline-none"
              aria-label="Search keyword"
            />
          </div>
          <div className="flex-1 w-full">
            <select
              className="w-full border border-gray-300 px-4 py-3 text-sm text-gray-500 focus:border-primary focus:outline-none"
              aria-label="Select city"
              defaultValue=""
            >
              <option value="" disabled>
                Select City
              </option>
              <option value="new-york">New York</option>
              <option value="los-angeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
              <option value="houston">Houston</option>
            </select>
          </div>
          <div className="flex-1 w-full">
            <select
              className="w-full border border-gray-300 px-4 py-3 text-sm text-gray-500 focus:border-primary focus:outline-none"
              aria-label="Select state"
              defaultValue=""
            >
              <option value="" disabled>
                Select State
              </option>
              <option value="ny">New York</option>
              <option value="ca">California</option>
              <option value="il">Illinois</option>
              <option value="tx">Texas</option>
            </select>
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 bg-primary text-white font-bold uppercase text-sm px-8 py-3 hover:bg-primary-dark transition w-full md:w-auto justify-center"
          >
            <Search className="h-4 w-4" />
            Search
          </button>
        </form>
      </div>
    </section>
  )
}
