import { useState } from 'react'
import type { FormEvent } from 'react'

export function Booking() {
  const [arrivalDate, setArrivalDate] = useState('')
  const [departureDate, setDepartureDate] = useState('')
  const [adults, setAdults] = useState('2')
  const [children, setChildren] = useState('0')
  const [rooms, setRooms] = useState('1')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section aria-label="Booking" className="bg-gray-100 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-center font-heading text-3xl font-bold text-charcoal">
          Book Your Stay
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
          Find the perfect room for your dream vacation.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 rounded-lg bg-white p-8 shadow-md">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <label
                htmlFor="arrival-date"
                className="mb-2 block text-sm font-medium text-charcoal"
              >
                Arrival Date
              </label>
              <input
                id="arrival-date"
                type="date"
                required
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
                className="w-full rounded border border-gray-300 px-4 py-3 text-sm text-charcoal focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
              />
            </div>

            <div>
              <label
                htmlFor="departure-date"
                className="mb-2 block text-sm font-medium text-charcoal"
              >
                Departure Date
              </label>
              <input
                id="departure-date"
                type="date"
                required
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="w-full rounded border border-gray-300 px-4 py-3 text-sm text-charcoal focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
              />
            </div>

            <div>
              <label htmlFor="adults" className="mb-2 block text-sm font-medium text-charcoal">
                Adults
              </label>
              <select
                id="adults"
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                className="w-full rounded border border-gray-300 px-4 py-3 text-sm text-charcoal focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <div>
              <label htmlFor="children" className="mb-2 block text-sm font-medium text-charcoal">
                Children
              </label>
              <select
                id="children"
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                className="w-full rounded border border-gray-300 px-4 py-3 text-sm text-charcoal focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>

            <div>
              <label htmlFor="rooms" className="mb-2 block text-sm font-medium text-charcoal">
                Rooms
              </label>
              <select
                id="rooms"
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                className="w-full rounded border border-gray-300 px-4 py-3 text-sm text-charcoal focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full rounded bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-400"
              >
                CHECK AVAILABILITY
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
