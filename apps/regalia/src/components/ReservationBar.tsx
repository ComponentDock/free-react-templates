import { CalendarDays } from 'lucide-react'

export function ReservationBar() {
  return (
    <section id="reservation" className="bg-brand-green py-6" aria-label="Reservation form">
      <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-center gap-4 px-4">
        <div>
          <label
            htmlFor="checkin"
            className="mb-1 block text-xs font-medium uppercase tracking-wider text-gray-300"
          >
            Check In
          </label>
          <div className="relative">
            <input
              id="checkin"
              type="date"
              className="rounded bg-white px-3 py-2 pl-9 text-sm text-gray-700"
            />
            <CalendarDays
              size={16}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="checkout"
            className="mb-1 block text-xs font-medium uppercase tracking-wider text-gray-300"
          >
            Check Out
          </label>
          <div className="relative">
            <input
              id="checkout"
              type="date"
              className="rounded bg-white px-3 py-2 pl-9 text-sm text-gray-700"
            />
            <CalendarDays
              size={16}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="guests"
            className="mb-1 block text-xs font-medium uppercase tracking-wider text-gray-300"
          >
            Guests
          </label>
          <select id="guests" className="rounded bg-white px-3 py-2 text-sm text-gray-700">
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4+ Guests</option>
          </select>
        </div>
        <button className="rounded bg-accent-gold px-8 py-2.5 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-accent-gold-light">
          Book Now
        </button>
      </div>
    </section>
  )
}
