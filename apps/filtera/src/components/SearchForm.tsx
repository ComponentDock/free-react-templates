import { useState, type FormEvent } from 'react'
import { Search } from 'lucide-react'

const FILTERS = [
  {
    name: 'category',
    label: 'Category',
    options: ['Accessories', 'Clothing', 'Footwear', 'Electronics'],
  },
  { name: 'color', label: 'Color', options: ['Red', 'Blue', 'Green', 'Black', 'White'] },
  { name: 'size', label: 'Size', options: ['S', 'M', 'L', 'XL', 'XXL'] },
  { name: 'sale', label: 'Sale', options: ['On Sale', 'Clearance', 'Regular Price'] },
  {
    name: 'time',
    label: 'Time',
    options: ['Last time', 'Today', 'This week', 'This month', 'This year'],
  },
  { name: 'type', label: 'Type', options: ['New arrivals', 'Best sellers', 'Featured'] },
] as const

export interface FilterState {
  query: string
  category: string
  color: string
  size: string
  sale: string
  time: string
  type: string
}

const INITIAL_STATE: FilterState = {
  query: '',
  category: '',
  color: '',
  size: '',
  sale: '',
  time: '',
  type: '',
}

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function SearchForm() {
  const [filters, setFilters] = useState<FilterState>(INITIAL_STATE)

  function handleReset() {
    setFilters(INITIAL_STATE)
  }

  function handleFilterChange(name: string, value: string) {
    setFilters((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section className="flex flex-1 items-center justify-center px-4 py-20">
      <form onSubmit={handleSubmit} className="w-full max-w-[790px]">
        {/* Basic search bar */}
        <div className="overflow-hidden rounded-[34px] shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
          <div className="relative">
            <input
              type="text"
              placeholder="Type Keywords"
              value={filters.query}
              onChange={(e) => handleFilterChange('query', e.target.value)}
              className="h-[70px] w-full border-0 bg-gradient-to-r from-brand via-brand/70 to-accent px-10 text-lg text-white placeholder-white/90 outline-none focus:outline-none"
              aria-label="Search keywords"
            />
            <div className="pointer-events-none absolute right-0 top-0 flex h-full w-[60px] items-center justify-center">
              <Search className="h-[34px] w-[34px] text-white" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Advanced search panel */}
        <div className="mt-[5px] rounded-[10px] bg-white p-10 shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
          <span className="mb-6 block text-sm text-[#555]">ADVANCED SEARCH</span>

          {/* Filter rows */}
          <div className="mb-5 flex flex-col gap-5 sm:flex-row sm:justify-between">
            {FILTERS.slice(0, 3).map((filter) => (
              <div key={filter.name} className="w-full sm:w-[calc((100%-40px)/3)]">
                <FilterSelect
                  name={filter.name}
                  label={filter.label}
                  options={filter.options}
                  value={filters[filter.name]}
                  onChange={handleFilterChange}
                />
              </div>
            ))}
          </div>

          <div className="mb-[46px] flex flex-col gap-5 sm:flex-row sm:justify-between">
            {FILTERS.slice(3, 6).map((filter) => (
              <div key={filter.name} className="w-full sm:w-[calc((100%-40px)/3)]">
                <FilterSelect
                  name={filter.name}
                  label={filter.label}
                  options={filter.options}
                  value={filters[filter.name]}
                  onChange={handleFilterChange}
                />
              </div>
            ))}
          </div>

          {/* Results + action buttons */}
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center text-sm text-gray-400">
              <span className="mr-1.5 font-bold text-gray-800">108</span>
              results
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleReset}
                className="cursor-pointer border-0 bg-transparent px-4 py-2 text-sm font-normal text-gray-500 transition-colors hover:text-black focus:outline-none"
              >
                RESET
              </button>
              <button
                type="submit"
                className="relative cursor-pointer overflow-hidden rounded-[20px] border-0 bg-gradient-to-r from-brand via-brand/70 to-accent px-6 py-2.5 text-sm font-normal text-white shadow-[0_2px_5px_rgba(0,0,0,0.15)] transition-all hover:shadow-md focus:outline-none"
              >
                SEARCH
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}

interface FilterSelectProps {
  name: string
  label: string
  options: readonly string[]
  value: string
  onChange: (name: string, value: string) => void
}

function FilterSelect({ name, label, options, value, onChange }: FilterSelectProps) {
  return (
    <div className="relative h-10">
      <select
        aria-label={label}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        className="h-full w-full appearance-none rounded-[20px] border-0 bg-gray-300 px-5 pr-10 text-sm text-white outline-none focus:ring-2 focus:ring-brand/50"
      >
        <option value="">{label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {/* Custom chevron icon */}
      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
        <svg
          fill="#999"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
        </svg>
      </div>
    </div>
  )
}
