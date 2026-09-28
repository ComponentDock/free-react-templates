import { type FormEvent } from 'react'

export function ReservationForm() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="reservation" className="bg-white py-8">
      <div className="max-w-5xl mx-auto px-4">
        <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 items-end justify-center">
          <div className="flex flex-col">
            <label htmlFor="res-name" className="text-sm font-medium text-text-dark mb-1">
              Name
            </label>
            <input
              id="res-name"
              type="text"
              aria-label="Name"
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-brand"
              placeholder="Your name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="res-phone" className="text-sm font-medium text-text-dark mb-1">
              Phone
            </label>
            <input
              id="res-phone"
              type="tel"
              aria-label="Phone"
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-brand"
              placeholder="Phone number"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="res-date" className="text-sm font-medium text-text-dark mb-1">
              Date
            </label>
            <input
              id="res-date"
              type="date"
              aria-label="Date"
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-brand"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="res-time" className="text-sm font-medium text-text-dark mb-1">
              Time
            </label>
            <input
              id="res-time"
              type="time"
              aria-label="Time"
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-brand"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="res-person" className="text-sm font-medium text-text-dark mb-1">
              Person
            </label>
            <select
              id="res-person"
              aria-label="Person"
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-brand"
            >
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4+ People</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-brand hover:bg-brand-hover text-white font-semibold py-2 px-6 rounded transition-colors"
          >
            Book a table
          </button>
        </form>
      </div>
    </section>
  )
}
