import { useState, type FormEvent } from 'react'
import { CalendarDays } from 'lucide-react'

export function Reservation() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="reservation" className="bg-ink py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-4 text-center font-display text-4xl font-bold">Reserve a Table</h2>
        <p className="mb-12 text-center text-gray-400">
          Book your evening at Skyline — we&apos;ll set the stage for an unforgettable dining
          experience.
        </p>

        {submitted ? (
          <div className="mx-auto max-w-lg rounded-lg border border-brand/40 bg-brand/10 p-8 text-center">
            <p className="font-display text-xl font-bold text-brand">Reservation Received!</p>
            <p className="mt-2 text-gray-300">
              We&apos;ll confirm your booking shortly. Thank you for choosing Skyline.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2"
          >
            <div className="flex flex-col">
              <label htmlFor="event-name" className="mb-1 text-sm text-gray-300">
                Event Name
              </label>
              <input
                id="event-name"
                name="event-name"
                type="text"
                placeholder="Birthday Dinner"
                required
                className="rounded border border-gray-600 bg-gray-800 px-4 py-3 text-white placeholder:text-gray-500 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="event-date" className="mb-1 text-sm text-gray-300">
                Event Date
              </label>
              <div className="relative">
                <input
                  id="event-date"
                  name="event-date"
                  type="date"
                  required
                  className="w-full rounded border border-gray-600 bg-gray-800 px-4 py-3 text-white focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                />
                <CalendarDays
                  className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="event-time" className="mb-1 text-sm text-gray-300">
                Event Time
              </label>
              <select
                id="event-time"
                name="event-time"
                required
                className="rounded border border-gray-600 bg-gray-800 px-4 py-3 text-white focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              >
                <option value="">Select time</option>
                <option value="17:00">5:00 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="20:00">8:00 PM</option>
                <option value="21:00">9:00 PM</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="guests" className="mb-1 text-sm text-gray-300">
                Number of Guests
              </label>
              <select
                id="guests"
                name="guests"
                required
                className="rounded border border-gray-600 bg-gray-800 px-4 py-3 text-white focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              >
                <option value="">Select guests</option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6+ Guests</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-1 text-sm text-gray-300">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(555) 123-4567"
                required
                className="rounded border border-gray-600 bg-gray-800 px-4 py-3 text-white placeholder:text-gray-500 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="contact-name" className="mb-1 text-sm text-gray-300">
                Contact Name
              </label>
              <input
                id="contact-name"
                name="contact-name"
                type="text"
                placeholder="Your name"
                required
                className="rounded border border-gray-600 bg-gray-800 px-4 py-3 text-white placeholder:text-gray-500 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />
            </div>

            <div className="flex flex-col sm:col-span-2">
              <label htmlFor="special-requests" className="mb-1 text-sm text-gray-300">
                Special Requests
              </label>
              <textarea
                id="special-requests"
                name="special-requests"
                rows={3}
                placeholder="Allergies, seating preferences, etc."
                className="rounded border border-gray-600 bg-gray-800 px-4 py-3 text-white placeholder:text-gray-500 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full rounded bg-brand py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
              >
                Book Now
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
