import { Search, ChevronDown } from 'lucide-react'

const PROPERTY_TYPES = [
  'Type',
  'Commercial',
  'Office',
  'Residential',
  'Villa',
  'Condominium',
  'Apartment',
]
const PROPERTY_STATUSES = ['Type', 'Rent', 'Sale']
const PRICE_LIMITS = [
  '$5,000',
  '$10,000',
  '$50,000',
  '$100,000',
  '$200,000',
  '$300,000',
  '$400,000',
  '$500,000',
  '$600,000',
  '$700,000',
  '$800,000',
  '$900,000',
  '$1,000,000',
  '$2,000,000',
]

export function SearchForm() {
  return (
    <section className="bg-bg-light py-0">
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end"
          >
            {/* Location */}
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-text-secondary mb-1"
              >
                Location
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
                <input
                  id="location"
                  type="text"
                  placeholder="City/Locality Name"
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded text-sm focus:outline-none focus:border-brand"
                />
              </div>
            </div>

            {/* Property Type */}
            <div>
              <label
                htmlFor="property-type"
                className="block text-sm font-medium text-text-secondary mb-1"
              >
                Property Type
              </label>
              <div className="relative">
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary pointer-events-none" />
                <select
                  id="property-type"
                  className="w-full appearance-none pr-10 pl-3 py-3 border border-gray-300 rounded text-sm focus:outline-none focus:border-brand"
                >
                  {PROPERTY_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Property Status */}
            <div>
              <label
                htmlFor="property-status"
                className="block text-sm font-medium text-text-secondary mb-1"
              >
                Property Status
              </label>
              <div className="relative">
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary pointer-events-none" />
                <select
                  id="property-status"
                  className="w-full appearance-none pr-10 pl-3 py-3 border border-gray-300 rounded text-sm focus:outline-none focus:border-brand"
                >
                  {PROPERTY_STATUSES.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Price Limit */}
            <div>
              <label
                htmlFor="price-limit"
                className="block text-sm font-medium text-text-secondary mb-1"
              >
                Price Limit
              </label>
              <div className="relative">
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary pointer-events-none" />
                <select
                  id="price-limit"
                  className="w-full appearance-none pr-10 pl-3 py-3 border border-gray-300 rounded text-sm focus:outline-none focus:border-brand"
                >
                  {PRICE_LIMITS.map((price) => (
                    <option key={price} value={price}>
                      {price}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Search button */}
            <div>
              <button
                type="submit"
                className="w-full bg-brand hover:bg-brand-hover text-dark font-bold py-3 px-6 transition-colors"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
