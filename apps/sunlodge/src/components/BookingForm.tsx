import { useState, type FormEvent } from 'react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function BookingForm() {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [room, setRoom] = useState('')
  const [guests, setGuests] = useState('')

  return (
    <section id="booking" className="bg-offwhite py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
          {/* Left: text */}
          <div className="max-w-md">
            <h2 className="font-heading text-3xl font-bold text-ink">
              Ullamcorper mattis, pulvinar dapibus.
            </h2>
            <p className="mt-4 leading-relaxed text-mute">
              Leather detail shoulder contrastic colour contour stunning silhouette working peplum.
              Statement buttons cover-up tweaks patch. Book your perfect stay with us today.
            </p>
          </div>

          {/* Right: form */}
          <div className="w-full max-w-md rounded bg-white p-8 shadow-lg">
            <h3 className="mb-6 font-heading text-2xl font-bold text-ink">Book A Room</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="checkin" className="sr-only">
                  Check In
                </label>
                <input
                  id="checkin"
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  placeholder="Check In"
                  className="w-full border border-gray-200 px-4 py-3 text-sm text-ink focus:border-brand focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="checkout" className="sr-only">
                  Check Out
                </label>
                <input
                  id="checkout"
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  placeholder="Check Out"
                  className="w-full border border-gray-200 px-4 py-3 text-sm text-ink focus:border-brand focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="room-select" className="sr-only">
                  Room
                </label>
                <select
                  id="room-select"
                  value={room}
                  onChange={(e) => setRoom(e.target.value)}
                  className="w-full border border-gray-200 px-4 py-3 text-sm text-mute focus:border-brand focus:outline-none"
                >
                  <option value="">Room</option>
                  <option value="deluxe">Deluxe Suite</option>
                  <option value="premium">Premium Room</option>
                  <option value="executive">Executive Suite</option>
                  <option value="family">Family Room</option>
                </select>
              </div>
              <div>
                <label htmlFor="guest-select" className="sr-only">
                  Guest
                </label>
                <select
                  id="guest-select"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full border border-gray-200 px-4 py-3 text-sm text-mute focus:border-brand focus:outline-none"
                >
                  <option value="">Guest</option>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4+ Guests</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-sienna py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-sienna-hover"
              >
                Check Availability
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
