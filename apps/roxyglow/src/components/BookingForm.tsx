import { ArrowRight } from 'lucide-react'

const rooms = ['Suite', 'Family', 'Deluxe', 'Classic', 'Superior', 'Luxury']
const guests = [1, 2, 3, 4, 5, 6]

export function BookingForm() {
  return (
    <section className="relative z-20 -mt-12 mx-auto max-w-7xl px-4">
      <form
        className="grid grid-cols-1 gap-4 rounded bg-white p-6 shadow-lg sm:grid-cols-2 lg:grid-cols-5"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Check-in */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium uppercase tracking-wide text-body">
            Check-in Date
          </label>
          <input
            type="date"
            aria-label="Check-in Date"
            className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-ink outline-none"
            defaultValue="2026-09-20"
          />
        </div>

        {/* Check-out */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium uppercase tracking-wide text-body">
            Check-out Date
          </label>
          <input
            type="date"
            aria-label="Check-out Date"
            className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-ink outline-none"
            defaultValue="2026-09-25"
          />
        </div>

        {/* Room */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium uppercase tracking-wide text-body">Room</label>
          <select
            aria-label="Room type"
            className="w-full rounded border border-gray-200 bg-white px-3 py-2 text-sm text-ink outline-none"
          >
            {rooms.map((room) => (
              <option key={room} value={room}>
                {room}
              </option>
            ))}
          </select>
        </div>

        {/* Guests */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium uppercase tracking-wide text-body">Adult</label>
          <select
            aria-label="Number of adults"
            className="w-full rounded border border-gray-200 bg-white px-3 py-2 text-sm text-ink outline-none"
          >
            {guests.map((g) => (
              <option key={g} value={g}>
                {g} {g === 1 ? 'Adult' : 'Adults'}
              </option>
            ))}
          </select>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center justify-end gap-2">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 bg-ink px-6 py-3 text-sm font-medium uppercase text-white transition-colors hover:bg-ink/80"
          >
            Check Availability <ArrowRight className="h-4 w-4" />
          </button>
          <span className="text-xs font-medium text-brand">Best Price Guaranteed!</span>
        </div>
      </form>
    </section>
  )
}
