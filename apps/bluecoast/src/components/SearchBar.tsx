import { Search } from 'lucide-react'

const filters = [
  { label: 'For rent', options: ['For rent', 'For sale'] },
  { label: 'All types', options: ['All types', 'Apartment', 'House', 'Villa', 'Condo'] },
  { label: 'City', options: ['City', 'New York', 'Los Angeles', 'Chicago', 'Miami'] },
  { label: 'Bedrooms', options: ['Bedrooms', '1', '2', '3', '4', '5+'] },
  { label: 'Bathrooms', options: ['Bathrooms', '1', '2', '3', '4+'] },
]

export function SearchBar() {
  return (
    <div className="relative z-20 -mt-12 mx-auto max-w-7xl px-4 lg:px-8">
      <div className="rounded-full bg-white p-3 shadow-lg">
        <div className="flex flex-wrap items-center gap-3">
          {filters.map((filter) => (
            <select
              key={filter.label}
              className="flex-1 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm text-text-gray outline-none transition-colors focus:border-brand-primary min-w-[120px]"
              defaultValue={filter.options[0]}
            >
              {filter.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ))}
          <button
            type="button"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-green px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            <Search size={16} />
            search
          </button>
        </div>
      </div>
    </div>
  )
}
