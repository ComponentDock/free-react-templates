import { useState, type FormEvent } from 'react'
import { Search } from 'lucide-react'

interface SearchBarProps {
  onSearch?: (params: { keywords: string; location: string; budget: string }) => void
}

const BUDGET_OPTIONS: string[] = [
  'Budget: $100 - $200',
  'Budget: $200 - $400',
  'Budget: $400 - $600',
  'Budget: $600 - $800',
  'Budget: $800 - $1000',
  'Budget: $1000+',
]

export function SearchBar({ onSearch }: SearchBarProps) {
  const [keywords, setKeywords] = useState('')
  const [location, setLocation] = useState('')
  const [budget, setBudget] = useState('Budget: $100 - $200')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    onSearch?.({ keywords, location, budget })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 flex w-full max-w-5xl flex-col items-center gap-4 sm:flex-row sm:items-end"
      role="search"
      aria-label="Job search"
    >
      <div className="relative w-full sm:w-auto sm:flex-1">
        <label htmlFor="keywords" className="sr-only">
          Keywords
        </label>
        <input
          id="keywords"
          type="text"
          placeholder="Keywords (e.g Job Title, Position...)"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          className="w-full rounded border border-gray-300 bg-white px-4 py-3 pr-10 text-sm text-gray-700 placeholder-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-300"
        />
        <Search className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      </div>

      <div className="relative w-full sm:w-auto sm:flex-1">
        <label htmlFor="location" className="sr-only">
          Location
        </label>
        <input
          id="location"
          type="text"
          placeholder="Location (City, Country...)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full rounded border border-gray-300 bg-white px-4 py-3 pr-10 text-sm text-gray-700 placeholder-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-300"
        />
        <Search className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      </div>

      <div className="w-full sm:w-auto sm:flex-1">
        <label htmlFor="budget" className="sr-only">
          Budget
        </label>
        <select
          id="budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="w-full appearance-none rounded border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-300"
        >
          {BUDGET_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full rounded bg-gray-900 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto"
      >
        Search Job
      </button>
    </form>
  )
}
