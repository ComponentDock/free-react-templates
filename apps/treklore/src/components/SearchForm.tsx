import { cn } from '@free-react-templates/ui'
import { Search } from 'lucide-react'

export function SearchForm() {
  return (
    <section aria-label="Search form" className={cn('relative z-10 mx-auto -mt-16 max-w-6xl px-4')}>
      <form
        className="flex flex-col items-stretch gap-4 rounded bg-white p-6 shadow-xl md:flex-row md:items-end"
        role="search"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="mr-auto font-display text-lg font-bold uppercase tracking-wide text-navy">
          Search for your trip
        </h2>

        <div className="flex flex-1 flex-col gap-3 md:flex-row">
          <div className="flex flex-col gap-1">
            <label htmlFor="city" className="sr-only">
              City
            </label>
            <input
              id="city"
              type="text"
              placeholder="City"
              className="rounded border border-gray-200 px-4 py-2 text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="departure" className="sr-only">
              Departure
            </label>
            <input
              id="departure"
              type="text"
              placeholder="Departure"
              className="rounded border border-gray-200 px-4 py-2 text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="arrival" className="sr-only">
              Arrival
            </label>
            <input
              id="arrival"
              type="text"
              placeholder="Arrival"
              className="rounded border border-gray-200 px-4 py-2 text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="budget" className="sr-only">
              Budget
            </label>
            <input
              id="budget"
              type="text"
              placeholder="Budget"
              className="rounded border border-gray-200 px-4 py-2 text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
            />
          </div>
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded bg-navy px-8 py-2.5 font-display text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-brand-blue"
        >
          <Search className="h-4 w-4" />
          Search
        </button>
      </form>
    </section>
  )
}
