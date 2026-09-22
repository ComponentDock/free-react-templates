import { useState, type FormEvent } from 'react'
import { Search } from 'lucide-react'

function handleSearch(e: FormEvent) {
  e.preventDefault()
}

export function SearchBox() {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('')

  return (
    <section className="relative z-20 -mt-12 mx-auto max-w-5xl px-4 sm:px-6">
      <form
        onSubmit={handleSearch}
        className="flex flex-col items-stretch gap-4 rounded-lg bg-white p-6 shadow-xl sm:flex-row sm:items-end md:gap-6"
      >
        <div className="flex-1">
          <label htmlFor="check-in" className="mb-1 block text-xs font-medium uppercase text-mist">
            Check in
          </label>
          <input
            id="check-in"
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:border-brand focus:outline-none"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="check-out" className="mb-1 block text-xs font-medium uppercase text-mist">
            Check out
          </label>
          <input
            id="check-out"
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:border-brand focus:outline-none"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="guests" className="mb-1 block text-xs font-medium uppercase text-mist">
            Guests
          </label>
          <input
            id="guests"
            type="number"
            min={1}
            max={10}
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            placeholder="2"
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:border-brand focus:outline-none"
          />
        </div>
        <button
          type="submit"
          aria-label="Search"
          className="flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-red"
        >
          <Search className="h-4 w-4" aria-hidden="true" />
          Search
        </button>
      </form>
    </section>
  )
}
