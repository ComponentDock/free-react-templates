import { useState, type FormEvent } from 'react'
import { Search } from 'lucide-react'
import { EMPTY_FILTERS, type ModelFilters } from '../data/models'

const heightOptions = ['5.5', '5.6', '5.7', '5.8', '5.9', '6']
const bustOptions = ['85cm', '90cm', '95cm', '100cm', '105cm', '110cm']
const waistOptions = ['65', '70', '75', '80', '85', '90']
const hipsOptions = ['90', '95', '100', '105', '110', '115']
const eyeOptions = ['Amber', 'Blue', 'Brown', 'Gray', 'Green', 'Black']

const groups = [
  { label: 'Height', name: 'height', options: heightOptions },
  { label: 'Bust', name: 'bust', options: bustOptions },
  { label: 'Weist', name: 'waist', options: waistOptions },
  { label: 'Hips', name: 'hips', options: hipsOptions },
  { label: 'Eye', name: 'eyes', options: eyeOptions },
] as const

export interface SearchBarProps {
  onSearch: (filters: ModelFilters) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [filters, setFilters] = useState<ModelFilters>(EMPTY_FILTERS)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSearch(filters)
  }

  return (
    <section className="bg-brand">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 lg:flex-row lg:items-end lg:gap-5"
        >
          <h2 className="text-lg font-semibold text-white lg:mb-1 lg:mr-2">Search A Model</h2>
          {groups.map((group) => (
            <label
              key={group.name}
              htmlFor={`catwalk-${group.name}`}
              className="flex flex-col gap-1 text-xs font-medium text-white/90"
            >
              {group.label}
              <select
                id={`catwalk-${group.name}`}
                value={filters[group.name]}
                onChange={(event) =>
                  setFilters((current) => ({ ...current, [group.name]: event.target.value }))
                }
                className="h-10 rounded border-0 bg-white px-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/60"
              >
                <option value="">Any</option>
                {group.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          ))}
          <button
            type="submit"
            className="flex h-10 items-center justify-center gap-2 bg-ink px-6 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            Search
          </button>
        </form>
      </div>
    </section>
  )
}
