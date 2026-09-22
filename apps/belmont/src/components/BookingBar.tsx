import { useState } from 'react'

const days = Array.from({ length: 31 }, (_, i) => i + 1)
const rooms = ['1 Room', '2 Rooms', '3 Rooms', '4 Rooms']

export function BookingBar() {
  const [arrival, setArrival] = useState('')
  const [departure, setDeparture] = useState('')
  const [room, setRoom] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setArrival('')
    setDeparture('')
    setRoom('')
  }

  return (
    <section className="relative -mt-16 z-20 mx-auto max-w-5xl px-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4 rounded bg-white p-6 shadow-lg md:flex-row md:gap-6"
      >
        <div className="flex flex-col">
          <label htmlFor="arrival" className="mb-1 text-xs font-semibold uppercase text-ink">
            Arrival Date
          </label>
          <select
            id="arrival"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
            className="rounded border border-gray-300 px-4 py-2.5 text-sm text-ink"
          >
            <option value="">Select date</option>
            {days.map((d) => (
              <option key={d} value={String(d)}>
                Day {d}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="departure" className="mb-1 text-xs font-semibold uppercase text-ink">
            Departure Date
          </label>
          <select
            id="departure"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            className="rounded border border-gray-300 px-4 py-2.5 text-sm text-ink"
          >
            <option value="">Select date</option>
            {days.map((d) => (
              <option key={d} value={String(d)}>
                Day {d}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="rooms" className="mb-1 text-xs font-semibold uppercase text-ink">
            Rooms
          </label>
          <select
            id="rooms"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            className="rounded border border-gray-300 px-4 py-2.5 text-sm text-ink"
          >
            <option value="">Select rooms</option>
            {rooms.map((r, i) => (
              <option key={r} value={String(i + 1)}>
                {r}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="mt-4 rounded bg-brand px-8 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark md:mt-8"
        >
          Request a Quote
        </button>
      </form>
    </section>
  )
}
