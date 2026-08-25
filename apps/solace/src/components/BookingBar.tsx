import { type FormEvent, useState } from 'react'
import { CalendarDays, Users, ChevronDown } from 'lucide-react'

export function BookingBar() {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [roomType, setRoomType] = useState('')
  const [guests, setGuests] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <section
      aria-label="Booking"
      className="relative z-10 -mt-10 mx-auto max-w-6xl rounded-lg bg-white shadow-xl"
    >
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-5">
        {/* Check-in */}
        <div className="flex items-center gap-3 border-b md:border-b-0 md:border-r border-gray-200 px-5 py-4">
          <CalendarDays size={18} className="text-brand" />
          <div className="flex-1">
            <label htmlFor="checkin" className="block text-xs font-semibold text-muted">
              Check-in
            </label>
            <input
              id="checkin"
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full text-sm text-ink outline-none"
            />
          </div>
        </div>

        {/* Check-out */}
        <div className="flex items-center gap-3 border-b md:border-b-0 md:border-r border-gray-200 px-5 py-4">
          <CalendarDays size={18} className="text-brand" />
          <div className="flex-1">
            <label htmlFor="checkout" className="block text-xs font-semibold text-muted">
              Check-out
            </label>
            <input
              id="checkout"
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full text-sm text-ink outline-none"
            />
          </div>
        </div>

        {/* Room type */}
        <div className="flex items-center gap-3 border-b md:border-b-0 md:border-r border-gray-200 px-5 py-4">
          <ChevronDown size={18} className="text-brand" />
          <div className="flex-1">
            <label htmlFor="room-type" className="block text-xs font-semibold text-muted">
              Room Type
            </label>
            <select
              id="room-type"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full text-sm text-ink outline-none"
            >
              <option value="">Select Room</option>
              <option value="suite">Suite Room</option>
              <option value="family">Family Room</option>
              <option value="deluxe">Deluxe Room</option>
            </select>
          </div>
        </div>

        {/* Guests */}
        <div className="flex items-center gap-3 border-b md:border-b-0 md:border-r border-gray-200 px-5 py-4">
          <Users size={18} className="text-brand" />
          <div className="flex-1">
            <label htmlFor="guests" className="block text-xs font-semibold text-muted">
              Guests
            </label>
            <select
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full text-sm text-ink outline-none"
            >
              <option value="">How Many?</option>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4+ Guests</option>
            </select>
          </div>
        </div>

        {/* Submit */}
        <div className="flex items-center justify-center px-5 py-4">
          <button
            type="submit"
            className="w-full rounded bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
          >
            Check Availability
          </button>
        </div>
      </form>
    </section>
  )
}
