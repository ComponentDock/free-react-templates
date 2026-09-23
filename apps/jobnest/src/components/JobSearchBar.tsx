import { type FormEvent } from 'react'
import { Search } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const popularSearches = [
  'Design & Creative',
  'Marketing',
  'Administration',
  'Customer Service',
  'Finance',
  'Teaching',
]

const locations = ['All Location', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo']

const categories = [
  'All Category',
  'Design & Creative',
  'Marketing',
  'Administration',
  'Customer Service',
  'Finance',
  'Teaching',
]

export function JobSearchBar() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-4">
        <form
          onSubmit={handleSubmit}
          className="rounded-lg border border-border-light bg-white p-6 shadow-sm"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {/* Keyword Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
              <input
                type="text"
                placeholder="Job title, keyword..."
                className="w-full rounded border border-border-light bg-bg-light py-3 pl-10 pr-4 text-sm text-text-primary placeholder:text-text-muted focus:border-brand focus:outline-none"
                aria-label="Search keyword"
              />
            </div>

            {/* Location Select */}
            <select
              className="rounded border border-border-light bg-bg-light py-3 px-4 text-sm text-text-primary focus:border-brand focus:outline-none"
              aria-label="Select location"
            >
              {locations.map((loc) => (
                <option key={loc}>{loc}</option>
              ))}
            </select>

            {/* Category Select */}
            <select
              className="rounded border border-border-light bg-bg-light py-3 px-4 text-sm text-text-primary focus:border-brand focus:outline-none"
              aria-label="Select category"
            >
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>

            {/* Find Job Button */}
            <Button
              type="submit"
              variant="primary"
              className="bg-brand text-white hover:bg-brand-hover lg:col-span-1"
            >
              Find Job
            </Button>
          </div>

          {/* Popular Search */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-text-secondary">Popular Search:</span>
            {popularSearches.map((term) => (
              <span
                key={term}
                className="cursor-pointer rounded-full border border-border-light bg-bg-light px-3 py-1 text-xs text-text-secondary hover:border-brand hover:text-brand"
              >
                {term}
              </span>
            ))}
          </div>
        </form>
      </div>
    </section>
  )
}
