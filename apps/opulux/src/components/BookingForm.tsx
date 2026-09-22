import { useState } from 'react'

const ROOM_TYPES = [
  'Suite',
  'Family Room',
  'Deluxe Room',
  'Classic Room',
  'Superior Room',
  'Luxury Room',
]
const GUESTS = ['1 Adult', '2 Adults', '3 Adults', '4 Adults', '5 Adults', '6 Adults']

export function BookingForm() {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [roomType, setRoomType] = useState('')
  const [guests, setGuests] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="booking" className="relative z-20 -mt-16">
      <div className="mx-auto max-w-7xl px-4">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-lg bg-off-white p-6 shadow-lg md:flex-row md:items-end"
        >
          <div className="flex-1">
            <label
              htmlFor="checkin"
              className="mb-1 block text-xs font-semibold uppercase tracking-wider text-dark-brown"
            >
              Check-in Date
            </label>
            <input
              id="checkin"
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm"
            />
          </div>

          <div className="flex-1">
            <label
              htmlFor="checkout"
              className="mb-1 block text-xs font-semibold uppercase tracking-wider text-dark-brown"
            >
              Check-out Date
            </label>
            <input
              id="checkout"
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm"
            />
          </div>

          <div className="flex-1">
            <label
              htmlFor="room-type"
              className="mb-1 block text-xs font-semibold uppercase tracking-wider text-dark-brown"
            >
              Room
            </label>
            <select
              id="room-type"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm"
            >
              <option value="">Select room</option>
              {ROOM_TYPES.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label
              htmlFor="guests"
              className="mb-1 block text-xs font-semibold uppercase tracking-wider text-dark-brown"
            >
              Customer
            </label>
            <select
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm"
            >
              <option value="">Select guests</option>
              {GUESTS.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="rounded bg-gold px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold-dark"
          >
            Check Availability
          </button>
        </form>
      </div>
    </section>
  )
}
