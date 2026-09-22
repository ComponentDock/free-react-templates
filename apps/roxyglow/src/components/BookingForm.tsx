const rooms = ['Suite', 'Family', 'Deluxe', 'Classic', 'Superior', 'Luxury']
const guests = Array.from({ length: 6 }, (_, i) => i + 1)

export function BookingForm() {
  return (
    <section className="relative z-20 -mt-16 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-none bg-white p-8 shadow-2xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <label
              htmlFor="checkin"
              className="mb-1 block text-xs font-semibold uppercase tracking-wide text-mist"
            >
              Check-in Date
            </label>
            <input
              id="checkin"
              type="date"
              className="w-full border border-gray-300 px-3 py-2 text-sm text-ink focus:border-brand focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="checkout"
              className="mb-1 block text-xs font-semibold uppercase tracking-wide text-mist"
            >
              Check-out Date
            </label>
            <input
              id="checkout"
              type="date"
              className="w-full border border-gray-300 px-3 py-2 text-sm text-ink focus:border-brand focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="room"
              className="mb-1 block text-xs font-semibold uppercase tracking-wide text-mist"
            >
              Room
            </label>
            <select
              id="room"
              className="w-full border border-gray-300 px-3 py-2 text-sm text-ink focus:border-brand focus:outline-none"
            >
              {rooms.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="guests"
              className="mb-1 block text-xs font-semibold uppercase tracking-wide text-mist"
            >
              Guests
            </label>
            <select
              id="guests"
              className="w-full border border-gray-300 px-3 py-2 text-sm text-ink focus:border-brand focus:outline-none"
            >
              {guests.map((g) => (
                <option key={g} value={g}>
                  {g} Adult{g > 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col justify-end">
            <button
              type="button"
              className="bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-ink-dark"
            >
              Check Availability
            </button>
            <p className="mt-1 text-xs text-brand">Best Price Guaranteed!</p>
          </div>
        </div>
      </div>
    </section>
  )
}
