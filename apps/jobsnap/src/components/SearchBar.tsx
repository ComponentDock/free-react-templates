import { Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export function SearchBar() {
  return (
    <div className="relative z-10 mx-auto -mt-10 max-w-4xl px-4">
      <div className={cn('flex items-center gap-4 rounded bg-white px-5 py-4', 'shadow-lg')}>
        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
            aria-hidden="true"
          />
          <input
            type="text"
            placeholder="Search Jobs..."
            aria-label="Search jobs"
            className="w-full rounded border border-gray-300 py-2 pl-10 pr-3 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          />
        </div>

        <div className="relative">
          <select
            aria-label="Category"
            className="appearance-none rounded border border-gray-300 bg-white px-4 py-2 pr-8 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          >
            <option value="">Categories</option>
            <option value="Design">Design</option>
            <option value="Development">Development</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
          </select>
          <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
            <svg
              className="h-4 w-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        <button
          type="button"
          className="rounded bg-brand px-6 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
        >
          Search
        </button>
      </div>
    </div>
  )
}
