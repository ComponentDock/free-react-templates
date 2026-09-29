import { useState, type FormEvent } from 'react'
import { Search, ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

type FilterKey = 'Accessories' | 'Color' | 'Size' | 'Sale' | 'Time' | 'Type'

const FILTER_ROWS: { label: FilterKey; options: string[] }[][] = [
  [
    { label: 'Accessories', options: ['All', 'Bags', 'Belts', 'Hats', 'Scarves'] },
    { label: 'Color', options: ['All', 'Red', 'Blue', 'Green', 'Black', 'White'] },
    { label: 'Size', options: ['All', 'XS', 'S', 'M', 'L', 'XL'] },
  ],
  [
    { label: 'Sale', options: ['All', 'Yes', 'No'] },
    { label: 'Time', options: ['All', 'Today', 'This Week', 'This Month'] },
    { label: 'Type', options: ['All', 'New', 'Used', 'Refurbished'] },
  ],
]

function FilterSelect({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: string[]
  value: string
  onChange: (val: string) => void
}) {
  return (
    <div className="relative">
      <label htmlFor={`filter-${label}`} className="sr-only">
        {label}
      </label>
      <select
        id={`filter-${label}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none rounded border border-seekgate-border bg-white px-3 py-2.5 pr-9 text-sm text-seekgate-text outline-none focus:border-seekgate-accent focus:ring-1 focus:ring-seekgate-accent"
        aria-label={label}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-seekgate-muted"
        aria-hidden="true"
      />
    </div>
  )
}

function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
}

export interface SearchCardProps {
  className?: string
}

export function SearchCard({ className }: SearchCardProps) {
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState<Record<FilterKey, string>>({
    Accessories: 'All',
    Color: 'All',
    Size: 'All',
    Sale: 'All',
    Time: 'All',
    Type: 'All',
  })
  const [resultCount] = useState(108)

  function handleFilterChange(label: FilterKey, value: string) {
    setFilters((prev) => ({ ...prev, [label]: value }))
  }

  function handleReset() {
    setQuery('')
    setFilters({
      Accessories: 'All',
      Color: 'All',
      Size: 'All',
      Sale: 'All',
      Time: 'All',
      Type: 'All',
    })
  }

  return (
    <div className={cn('rounded bg-seekgate-card p-6 shadow-lg sm:p-8', className)}>
      <form onSubmit={handleSubmit} aria-label="Search form">
        {/* Main search input */}
        <div className="flex items-center border-b border-seekgate-divider pb-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type Keywords"
            className="flex-1 border-0 bg-transparent text-base text-seekgate-text outline-none placeholder:text-seekgate-muted"
            aria-label="Search keywords"
          />
          <Search className="h-5 w-5 text-seekgate-muted" aria-hidden="true" />
        </div>

        {/* Advanced Search section */}
        <div className="mt-5">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-seekgate-muted">
            Advanced Search
          </h2>

          {FILTER_ROWS.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="mb-3 grid grid-cols-3 gap-3"
              role="group"
              aria-label={`Filter row ${rowIdx + 1}`}
            >
              {row.map((filter) => (
                <FilterSelect
                  key={filter.label}
                  label={filter.label}
                  options={filter.options}
                  value={filters[filter.label]}
                  onChange={(val) => handleFilterChange(filter.label, val)}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Bottom row: results count + actions */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm">
            <span className="font-semibold text-seekgate-accent">{resultCount}</span>{' '}
            <span className="text-seekgate-muted">results</span>
          </p>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="text-sm font-medium text-seekgate-text transition-colors hover:text-seekgate-accent"
            >
              RESET
            </button>
            <button
              type="submit"
              className="rounded bg-seekgate-accent px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-seekgate-accent-hover"
            >
              SEARCH
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
