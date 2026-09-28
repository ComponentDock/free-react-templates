import { useState } from 'react'
import { Search, MapPin } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
}

export function SearchCard() {
  const [destination, setDestination] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(2)

  const incrementGuests = () => setGuests((prev) => prev + 1)
  const decrementGuests = () => setGuests((prev) => Math.max(1, prev - 1))

  return (
    <div id="search" className="w-full max-w-5xl">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-findly-dark sm:text-5xl">
          Find Your Next Adventure
        </h1>
        <p className="mt-4 text-lg text-findly-muted">
          Search thousands of destinations and travel experiences
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto flex w-full flex-wrap items-stretch gap-3 rounded-2xl bg-white p-4 shadow-lg sm:flex-nowrap"
      >
        {/* Destination */}
        <div className="flex flex-1 flex-col justify-center rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3">
          <label
            htmlFor="destination"
            className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-findly-muted"
          >
            Going To
          </label>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-findly-amber" aria-hidden="true" />
            <input
              id="destination"
              type="text"
              placeholder="City, country, or region"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full border-0 bg-transparent py-1 text-[15px] text-findly-dark outline-none placeholder:text-findly-muted"
            />
          </div>
        </div>

        {/* Check-in */}
        <div className="flex flex-1 flex-col justify-center rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3">
          <label
            htmlFor="check-in"
            className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-findly-muted"
          >
            Check-In
          </label>
          <input
            id="check-in"
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full border-0 bg-transparent py-1 text-[15px] text-findly-dark outline-none"
          />
        </div>

        {/* Check-out */}
        <div className="flex flex-1 flex-col justify-center rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3">
          <label
            htmlFor="check-out"
            className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-findly-muted"
          >
            Check-Out
          </label>
          <input
            id="check-out"
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full border-0 bg-transparent py-1 text-[15px] text-findly-dark outline-none"
          />
        </div>

        {/* Guests */}
        <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3">
          <div className="flex flex-col items-center">
            <span className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-findly-muted">
              Guests
            </span>
            <span className="text-[15px] font-medium text-findly-dark">
              {guests} {guests === 1 ? 'Guest' : 'Guests'}
            </span>
          </div>
          <div className="ml-3 flex flex-col gap-1">
            <button
              type="button"
              onClick={incrementGuests}
              className="flex h-6 w-6 items-center justify-center rounded border border-gray-200 bg-white text-xs font-bold text-findly-dark transition-colors hover:bg-gray-100"
              aria-label="Increase guests"
            >
              +
            </button>
            <button
              type="button"
              onClick={decrementGuests}
              className="flex h-6 w-6 items-center justify-center rounded border border-gray-200 bg-white text-xs font-bold text-findly-dark transition-colors hover:bg-gray-100"
              aria-label="Decrease guests"
            >
              −
            </button>
          </div>
        </div>

        {/* Search button */}
        <button
          type="submit"
          className={cn(
            'flex items-center justify-center gap-2 rounded-xl bg-findly-amber px-8 py-3 text-[15px] font-semibold text-white shadow-sm',
            'cursor-pointer transition-colors duration-200 hover:bg-findly-amber-hover',
          )}
          aria-label="Search"
        >
          <Search className="h-4 w-4" aria-hidden="true" />
          Search
        </button>
      </form>
    </div>
  )
}
