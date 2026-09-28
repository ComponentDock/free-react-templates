export function Reservation() {
  return (
    <section id="contact" className="bg-paper py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="mb-2 text-center font-display text-3xl font-bold text-ink">Book a Table</h2>
        <p className="mb-10 text-center text-mist">
          Reserve your spot for an unforgettable dining experience
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-ink">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm text-ink placeholder-gray-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm text-ink placeholder-gray-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-1 block text-sm font-medium text-ink">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm text-ink placeholder-gray-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              placeholder="(123) 456-7890"
            />
          </div>

          <div>
            <label htmlFor="date" className="mb-1 block text-sm font-medium text-ink">
              Date
            </label>
            <input
              id="date"
              type="date"
              required
              className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm text-ink focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
          </div>

          <div>
            <label htmlFor="time" className="mb-1 block text-sm font-medium text-ink">
              Time
            </label>
            <input
              id="time"
              type="time"
              required
              className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm text-ink focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
          </div>

          <div>
            <label htmlFor="guests" className="mb-1 block text-sm font-medium text-ink">
              Number of Guests
            </label>
            <input
              id="guests"
              type="number"
              min={1}
              max={20}
              required
              className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm text-ink focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              placeholder="2"
            />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full rounded bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
