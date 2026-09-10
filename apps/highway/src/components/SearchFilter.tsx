import { Search } from 'lucide-react'

const selects = [
  {
    id: 'car-type',
    label: 'Car type',
    options: ['All Types', 'Sedan', 'SUV', 'Hatchback', 'Coupe'],
  },
  { id: 'condition', label: 'Condition', options: ['Any', 'New', 'Used'] },
  {
    id: 'car-model',
    label: 'Car model',
    options: ['All Models', 'Toyota', 'Honda', 'BMW', 'Mercedes'],
  },
  {
    id: 'price-limit',
    label: 'Price limit',
    options: ['Any', '$20/day', '$40/day', '$60/day', '$80/day'],
  },
]

export function SearchFilter() {
  return (
    <section className="bg-white py-4 shadow-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-end gap-4 px-4 sm:px-6">
        {selects.map((sel) => (
          <div key={sel.id} className="min-w-[150px] flex-1">
            <label htmlFor={sel.id} className="mb-1 block text-xs font-semibold text-heading">
              {sel.label}
            </label>
            <select
              id={sel.id}
              className="h-10 w-full border border-black/5 bg-transparent px-3 text-sm text-heading"
            >
              {sel.options.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>
        ))}
        <button
          type="button"
          className="flex h-10 items-center gap-2 bg-brand px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          <Search className="h-4 w-4" />
          Search
        </button>
      </div>
    </section>
  )
}
