import { useState } from 'react'

export function ReservationForm() {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('1')
  const [roomType, setRoomType] = useState('Standard')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="booking" className="relative -mt-24 z-20 flex justify-end px-6">
      <form onSubmit={handleSubmit} className="w-full max-w-md rounded-lg bg-white p-6 shadow-2xl">
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-xs font-semibold text-lounge-600">Check-in</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full rounded border border-lounge-200 px-3 py-2 text-sm focus:border-brand focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-lounge-600">Check-out</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full rounded border border-lounge-200 px-3 py-2 text-sm focus:border-brand focus:outline-none"
            />
          </div>
        </div>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-xs font-semibold text-lounge-600">Guests</label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full rounded border border-lounge-200 px-3 py-2 text-sm focus:border-brand focus:outline-none"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-lounge-600">Room Type</label>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full rounded border border-lounge-200 px-3 py-2 text-sm focus:border-brand focus:outline-none"
            >
              <option value="Standard">Standard</option>
              <option value="Superior">Superior</option>
              <option value="Premier">Premier</option>
              <option value="Family">Family</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="w-full rounded bg-brand py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
        >
          Check Availability
        </button>
      </form>
    </section>
  )
}
