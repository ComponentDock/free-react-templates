import { useState } from 'react'
import { Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
}

export function SearchFormBar() {
  const [destination, setDestination] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(2)

  const decrementGuests = () => {
    setGuests((prev) => Math.max(1, prev - 1))
  }

  const incrementGuests = () => {
    setGuests((prev) => prev + 1)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-[900px] flex-wrap items-stretch gap-3 rounded-lg bg-white p-3 shadow-lg sm:flex-nowrap"
    >
      {/* GOING TO */}
      <div className="flex flex-1 flex-col justify-center rounded-lg border border-searchnest-border bg-searchnest-white px-4 py-3">
        <label
          htmlFor="going-to"
          className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-searchnest-muted"
        >
          Going To
        </label>
        <input
          id="going-to"
          type="text"
          placeholder="Destination, hotel name"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full border-0 bg-transparent py-1 text-[15px] text-searchnest-text outline-none placeholder:text-searchnest-muted"
        />
      </div>

      {/* CHECK-IN */}
      <div className="flex flex-1 flex-col justify-center rounded-lg border border-searchnest-border bg-searchnest-white px-4 py-3">
        <label
          htmlFor="check-in"
          className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-searchnest-muted"
        >
          Check-In
        </label>
        <input
          id="check-in"
          type="date"
          placeholder="mm/dd/yyyy"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="w-full border-0 bg-transparent py-1 text-[15px] text-searchnest-text outline-none placeholder:text-searchnest-muted"
        />
      </div>

      {/* CHECK-OUT */}
      <div className="flex flex-1 flex-col justify-center rounded-lg border border-searchnest-border bg-searchnest-white px-4 py-3">
        <label
          htmlFor="check-out"
          className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-searchnest-muted"
        >
          Check-Out
        </label>
        <input
          id="check-out"
          type="date"
          placeholder="mm/dd/yyyy"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="w-full border-0 bg-transparent py-1 text-[15px] text-searchnest-text outline-none placeholder:text-searchnest-muted"
        />
      </div>

      {/* GUESTS */}
      <div className="flex items-center rounded-lg border border-searchnest-border bg-searchnest-white px-4 py-3">
        <div className="flex flex-col items-center">
          <span className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-searchnest-muted">
            Guests
          </span>
          <span className="text-[15px] font-medium text-searchnest-text">
            {guests} {guests === 1 ? 'Guest' : 'Guests'}
          </span>
        </div>
        <div className="ml-3 flex flex-col gap-1">
          <button
            type="button"
            onClick={incrementGuests}
            className="flex h-6 w-6 items-center justify-center rounded border border-searchnest-border bg-searchnest-white text-xs font-bold text-searchnest-text transition-colors hover:bg-gray-100"
            aria-label="Increase guests"
          >
            +
          </button>
          <button
            type="button"
            onClick={decrementGuests}
            className="flex h-6 w-6 items-center justify-center rounded border border-searchnest-border bg-searchnest-white text-xs font-bold text-searchnest-text transition-colors hover:bg-gray-100"
            aria-label="Decrease guests"
          >
            -
          </button>
        </div>
      </div>

      {/* Search button */}
      <button
        type="submit"
        className={cn(
          'flex items-center justify-center gap-2 rounded-lg bg-searchnest-gold px-8 py-3 text-[15px] font-semibold text-searchnest-text',
          'cursor-pointer transition-colors duration-200 hover:bg-searchnest-gold-hover',
        )}
        aria-label="Search"
      >
        <Search className="h-4 w-4" aria-hidden="true" />
        Search
      </button>
    </form>
  )
}
