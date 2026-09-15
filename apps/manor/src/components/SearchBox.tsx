import { useState } from 'react'
import { Search, ChevronDown, ChevronUp } from 'lucide-react'

const FILTERS_ROW_1 = [
  { name: 'keywords', label: 'Keywords', options: ['Any', 'Keyword 1', 'Keyword 2'] },
  { name: 'property_id', label: 'Property ID', options: ['Any', 'ID 1', 'ID 2'] },
  { name: 'status', label: 'Property Status', options: ['Any', 'Sale', 'Rent'] },
  { name: 'location', label: 'Location', options: ['Any', 'Location 1', 'Location 2'] },
  { name: 'type', label: 'Property Type', options: ['Any', 'Type 1', 'Type 2'] },
]

const FILTERS_ROW_2 = [
  { name: 'bedrooms', label: 'Bedrooms', options: ['Any', '1', '2', '3', '4+'] },
  { name: 'bathrooms', label: 'Bathrooms', options: ['Any', '1', '2', '3+'] },
  { name: 'min_price', label: 'Min Price', options: ['Any', '$100,000', '$200,000', '$500,000'] },
  {
    name: 'max_price',
    label: 'Max Price',
    options: ['Any', '$500,000', '$1,000,000', '$2,000,000'],
  },
  { name: 'min_sqft', label: 'Min Sq Ft', options: ['Any', '500', '1000', '2000'] },
  { name: 'max_sqft', label: 'Max Sq Ft', options: ['Any', '2000', '3000', '5000'] },
]

const FEATURES = [
  'Swimming Pool',
  'Garage',
  'Garden',
  'Patio',
  'Hardwood Floors',
  'Central AC',
  'Fireplace',
  'Balcony',
  'Laundry',
  'Storage',
]

export function SearchBox() {
  const [featuresOpen, setFeaturesOpen] = useState(false)

  return (
    <section className="relative z-20 -mt-16 px-4">
      <div className="mx-auto max-w-6xl rounded-lg bg-white p-6 shadow-xl">
        <div className="mb-4 text-center">
          <Search className="mx-auto mb-2 h-8 w-8 text-coral-400" />
          <h2 className="font-heading text-xl font-semibold text-navy-800">search your home</h2>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {FILTERS_ROW_1.map((filter) => (
              <div key={filter.name}>
                <label
                  htmlFor={filter.name}
                  className="mb-1 block text-xs font-semibold text-gray-500"
                >
                  {filter.label}
                </label>
                <select
                  id={filter.name}
                  name={filter.name}
                  className="w-full rounded border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 focus:border-coral-400 focus:outline-none"
                >
                  {filter.options.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
            {FILTERS_ROW_2.map((filter) => (
              <div key={filter.name}>
                <label
                  htmlFor={filter.name}
                  className="mb-1 block text-xs font-semibold text-gray-500"
                >
                  {filter.label}
                </label>
                <select
                  id={filter.name}
                  name={filter.name}
                  className="w-full rounded border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 focus:border-coral-400 focus:outline-none"
                >
                  {filter.options.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            ))}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full rounded bg-coral-400 px-4 py-2 font-heading text-sm font-semibold text-white transition-colors hover:bg-coral-500"
              >
                search
              </button>
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={() => setFeaturesOpen(!featuresOpen)}
              className="flex items-center gap-1 text-sm font-semibold text-coral-400 hover:text-coral-500"
            >
              Specific features
              {featuresOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
            {featuresOpen && (
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
                {FEATURES.map((feature) => (
                  <label key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-coral-400 focus:ring-coral-400"
                    />
                    {feature}
                  </label>
                ))}
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
