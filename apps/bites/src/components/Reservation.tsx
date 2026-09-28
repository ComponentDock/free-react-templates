import { useState } from 'react'

export function Reservation() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="reservation" className="py-20">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-4xl font-bold text-ink">Make Reservation</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-brand" />
        </div>

        {submitted ? (
          <div className="rounded-lg bg-light-bg p-8 text-center">
            <p className="font-heading text-xl font-semibold text-ink">
              Thank you! Your reservation request has been received.
            </p>
            <p className="mt-2 text-body">We will confirm shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Enter your name"
              required
              className="w-full rounded border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
            />
            <input
              type="email"
              placeholder="Enter email address"
              required
              className="w-full rounded border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full rounded border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
            />
            <input
              type="text"
              placeholder="Select date & time"
              required
              className="w-full rounded border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
            />
            <select
              required
              className="w-full rounded border border-border bg-white px-4 py-3 text-sm text-body outline-none transition-colors focus:border-brand"
              defaultValue=""
            >
              <option value="" disabled>
                Select event
              </option>
              <option value="dinner">Dinner</option>
              <option value="lunch">Lunch</option>
              <option value="brunch">Brunch</option>
              <option value="private">Private Event</option>
            </select>
            <button
              type="submit"
              className="w-full rounded bg-brand py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              Make Reservation
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
