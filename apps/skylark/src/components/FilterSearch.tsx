import { useState } from 'react'
import { Calendar, MapPin, Search } from 'lucide-react'
import { FILTER } from '../data'

/* Filter search — a white form card overlapping the hero bottom with
   Where / Date / Guests fields and a solid blue Search Plane submit.
   Purely presentational (no backend): submitting resets to the first
   guest option and keeps the page in place. */
export function FilterSearch() {
  const [where, setWhere] = useState('')
  const [guests, setGuests] = useState<string>(FILTER.guestOptions[0])

  return (
    <section aria-label="Search flights" className="relative z-10 -mt-16 px-4">
      <div className="mx-auto max-w-6xl bg-white p-6 shadow-[0_20px_30px_rgba(29,42,59,0.1)] sm:p-8">
        <form
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:items-end"
          onSubmit={(event) => {
            event.preventDefault()
            setWhere('')
            setGuests(FILTER.guestOptions[0])
          }}
        >
          <label className="block text-sm font-extrabold text-ink">
            {FILTER.whereLabel}
            <span className="relative mt-1 flex items-center">
              <input
                type="text"
                value={where}
                placeholder={FILTER.wherePlaceholder}
                onChange={(event) => setWhere(event.target.value)}
                className="w-full border-b border-ink/10 bg-transparent py-2.5 pr-8 text-ink outline-none placeholder:text-ink/40"
              />
              <MapPin
                className="pointer-events-none absolute right-0 h-5 w-5 text-brand"
                aria-hidden="true"
              />
            </span>
          </label>

          <label className="block text-sm font-extrabold text-ink">
            {FILTER.dateLabel}
            <span className="relative mt-1 flex items-center">
              <input
                type="text"
                placeholder={FILTER.datePlaceholder}
                className="w-full border-b border-ink/10 bg-transparent py-2.5 pr-8 text-ink outline-none placeholder:text-ink/40"
              />
              <Calendar
                className="pointer-events-none absolute right-0 h-5 w-5 text-brand"
                aria-hidden="true"
              />
            </span>
          </label>

          <label className="block text-sm font-extrabold text-ink">
            {FILTER.guestsLabel}
            <select
              value={guests}
              onChange={(event) => setGuests(event.target.value)}
              className="mt-1 w-full border-b border-ink/10 bg-transparent py-2.5 text-ink outline-none"
            >
              {FILTER.guestOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-brand px-8 py-3.5 text-sm font-extrabold uppercase tracking-[2px] text-white transition-colors hover:bg-brand-deep"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            {FILTER.button}
          </button>
        </form>
      </div>
    </section>
  )
}
