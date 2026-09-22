import type { FormEvent } from 'react'
import { Calendar, Users } from 'lucide-react'

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
}

export function BookingBar() {
  return (
    <section id="booking" className="bg-brand">
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-6xl flex-wrap items-end justify-center gap-4 px-4 py-6 sm:px-6"
      >
        <div className="flex flex-col">
          <label
            htmlFor="checkin"
            className="mb-1 text-xs font-semibold uppercase tracking-wide text-white"
          >
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" aria-hidden="true" />
              Check In
            </span>
          </label>
          <input
            id="checkin"
            type="date"
            className="rounded-lg border border-white/30 bg-white/20 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="checkout"
            className="mb-1 text-xs font-semibold uppercase tracking-wide text-white"
          >
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" aria-hidden="true" />
              Check Out
            </span>
          </label>
          <input
            id="checkout"
            type="date"
            className="rounded-lg border border-white/30 bg-white/20 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="adults"
            className="mb-1 text-xs font-semibold uppercase tracking-wide text-white"
          >
            <span className="flex items-center gap-1">
              <Users className="h-3 w-3" aria-hidden="true" />
              Adults
            </span>
          </label>
          <select
            id="adults"
            className="rounded-lg border border-white/30 bg-white/20 px-4 py-3 text-sm text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="children"
            className="mb-1 text-xs font-semibold uppercase tracking-wide text-white"
          >
            <span className="flex items-center gap-1">
              <Users className="h-3 w-3" aria-hidden="true" />
              Children
            </span>
          </label>
          <select
            id="children"
            className="rounded-lg border border-white/30 bg-white/20 px-4 py-3 text-sm text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="rooms"
            className="mb-1 text-xs font-semibold uppercase tracking-wide text-white"
          >
            Rooms
          </label>
          <select
            id="rooms"
            className="rounded-lg border border-white/30 bg-white/20 px-4 py-3 text-sm text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <button
          type="submit"
          className="rounded-lg bg-ink px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-ink-dark"
        >
          Book Now
        </button>
      </form>
    </section>
  )
}
