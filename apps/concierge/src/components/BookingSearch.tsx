import { Calendar, Users } from 'lucide-react'
import { BOOKING } from '../data'

/** Booking search — white widget card overlapping the hero bottom with two
    date fields, a persons select, and a full-width "Find now" pill. */
export function BookingSearch() {
  return (
    <section className="bg-light py-0" aria-label="Search availability">
      <div className="mx-auto max-w-7xl px-4">
        <form
          className="relative z-10 -mt-12 grid gap-4 bg-white p-6 shadow-[0_15px_30px_rgba(0,0,0,0.1)] md:grid-cols-2 lg:grid-cols-4 lg:p-8"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="relative flex items-center">
            <Calendar
              className="pointer-events-none absolute left-3 h-5 w-5 text-mute"
              aria-hidden="true"
            />
            <label htmlFor="arrival" className="sr-only">
              {BOOKING.arrivalLabel}
            </label>
            <input
              id="arrival"
              type="date"
              placeholder={BOOKING.arrivalLabel}
              className="h-14 w-full border border-black/10 bg-transparent pl-10 pr-3 text-sm transition-colors focus:border-black/20 focus:outline-none"
            />
          </div>

          <div className="relative flex items-center">
            <Calendar
              className="pointer-events-none absolute left-3 h-5 w-5 text-mute"
              aria-hidden="true"
            />
            <label htmlFor="departure" className="sr-only">
              {BOOKING.departureLabel}
            </label>
            <input
              id="departure"
              type="date"
              placeholder={BOOKING.departureLabel}
              className="h-14 w-full border border-black/10 bg-transparent pl-10 pr-3 text-sm transition-colors focus:border-black/20 focus:outline-none"
            />
          </div>

          <div className="relative flex items-center">
            <Users
              className="pointer-events-none absolute left-3 h-5 w-5 text-mute"
              aria-hidden="true"
            />
            <label htmlFor="persons" className="sr-only">
              {BOOKING.personsLabel}
            </label>
            <select
              id="persons"
              className="h-14 w-full appearance-none border border-black/10 bg-transparent pl-10 pr-3 text-sm transition-colors focus:border-black/20 focus:outline-none"
            >
              {BOOKING.persons.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="h-14 w-full rounded-full bg-brand px-6 font-bold text-ink transition-colors hover:bg-brand-hover"
          >
            {BOOKING.submitLabel}
          </button>
        </form>
      </div>
    </section>
  )
}
