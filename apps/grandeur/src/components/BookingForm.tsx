import { CalendarDays, Users } from 'lucide-react'

export function BookingForm() {
  return (
    <section className="relative z-20 -mt-12 mx-auto max-w-7xl px-4">
      <form
        className="grid grid-cols-2 gap-4 rounded bg-white p-6 shadow-lg md:grid-cols-4"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Check-in */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium uppercase tracking-wide text-body">Check-in</label>
          <div className="flex items-center gap-2 rounded border border-gray-200 px-3 py-2">
            <CalendarDays className="h-4 w-4 text-brand" />
            <input
              type="date"
              aria-label="Check-in date"
              className="w-full bg-transparent text-sm text-ink outline-none"
              defaultValue="2026-09-15"
            />
          </div>
        </div>

        {/* Check-out */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium uppercase tracking-wide text-body">Check-out</label>
          <div className="flex items-center gap-2 rounded border border-gray-200 px-3 py-2">
            <CalendarDays className="h-4 w-4 text-brand" />
            <input
              type="date"
              aria-label="Check-out date"
              className="w-full bg-transparent text-sm text-ink outline-none"
              defaultValue="2026-09-25"
            />
          </div>
        </div>

        {/* Guests */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium uppercase tracking-wide text-body">
            Total Guests
          </label>
          <div className="flex items-center gap-2 rounded border border-gray-200 px-3 py-2">
            <Users className="h-4 w-4 text-brand" />
            <input
              type="number"
              aria-label="Total guests"
              min={1}
              max={20}
              defaultValue={2}
              className="w-full bg-transparent text-sm text-ink outline-none"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col justify-end gap-2">
          <a href="#" className="text-center text-xs text-brand underline hover:text-brand-hover">
            Got a Coupon Code?
          </a>
          <button
            type="submit"
            className="rounded bg-brand px-6 py-3 text-sm font-medium uppercase text-white transition-colors hover:bg-brand-hover"
          >
            Check Availability
          </button>
        </div>
      </form>
    </section>
  )
}
