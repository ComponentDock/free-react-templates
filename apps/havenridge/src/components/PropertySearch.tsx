import { useState } from 'react'
import { Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

type Tab = 'buy' | 'rent'

export function PropertySearch() {
  const [tab, setTab] = useState<Tab>('buy')

  return (
    <section className="bg-mist py-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Tab pills */}
        <div className="mb-6 flex justify-center gap-2">
          <button
            type="button"
            className={cn(
              'rounded-full px-6 py-2 text-sm font-semibold transition-colors',
              tab === 'buy' ? 'bg-primary-500 text-white' : 'bg-white text-ink hover:bg-gray-100',
            )}
            onClick={() => setTab('buy')}
          >
            Buy Properties
          </button>
          <button
            type="button"
            className={cn(
              'rounded-full px-6 py-2 text-sm font-semibold transition-colors',
              tab === 'rent' ? 'bg-primary-500 text-white' : 'bg-white text-ink hover:bg-gray-100',
            )}
            onClick={() => setTab('rent')}
          >
            Rent Properties
          </button>
        </div>

        {/* Search form */}
        <form
          className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-md sm:flex-row sm:items-end"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex-1">
            <label htmlFor="keyword" className="mb-1 block text-sm font-semibold text-ink">
              Keyword
            </label>
            <input
              id="keyword"
              type="text"
              placeholder="Enter keyword..."
              className="w-full rounded border border-gray-300 px-4 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
          </div>

          <div className="flex-1">
            <label htmlFor="property-type" className="mb-1 block text-sm font-semibold text-ink">
              Property Type
            </label>
            <select
              id="property-type"
              className="w-full rounded border border-gray-300 px-4 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            >
              <option value="">Select Type</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="land">Land</option>
              <option value="industrial">Industrial</option>
            </select>
          </div>

          <div className="flex-1">
            <label htmlFor="location" className="mb-1 block text-sm font-semibold text-ink">
              Location
            </label>
            <input
              id="location"
              type="text"
              placeholder="Enter location..."
              className="w-full rounded border border-gray-300 px-4 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
          </div>

          <div className="flex-1">
            <label htmlFor="price" className="mb-1 block text-sm font-semibold text-ink">
              Price Limit
            </label>
            <input
              id="price"
              type="text"
              placeholder="Max price..."
              className="w-full rounded border border-gray-300 px-4 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded bg-primary-500 px-6 py-2 text-sm font-bold text-white transition-colors hover:bg-primary-600"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            Search
          </button>
        </form>
      </div>
    </section>
  )
}
