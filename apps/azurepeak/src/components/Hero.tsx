import { useState } from 'react'

export function Hero() {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('2')
  const [rooms, setRooms] = useState('1')

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <img
        src="https://picsum.photos/seed/azurepeak-ocean/1920/1080"
        alt="Ocean view at AzurePeak resort"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-900/60 to-blue-800/80" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 sm:px-6">
        <div className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Welcome to AzurePeak
          </p>
          <h1 className="font-display text-5xl font-bold leading-tight text-white sm:text-7xl">
            Experience Luxury
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Nestled along pristine coastlines, AzurePeak offers an unparalleled escape where
            elegance meets tranquility. Discover world-class hospitality.
          </p>
        </div>

        {/* Glass-morphism booking form */}
        <div
          id="book"
          className="mt-12 w-full max-w-4xl rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-8"
        >
          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
          >
            <div>
              <label htmlFor="check-in" className="mb-1 block text-xs font-medium text-white/70">
                Check-In
              </label>
              <input
                id="check-in"
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-white/50 focus:border-amber-400 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="check-out" className="mb-1 block text-xs font-medium text-white/70">
                Check-Out
              </label>
              <input
                id="check-out"
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-white/50 focus:border-amber-400 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="guests" className="mb-1 block text-xs font-medium text-white/70">
                Guests
              </label>
              <select
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white focus:border-amber-400 focus:outline-none"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n} className="text-gray-900">
                    {n}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="rooms-select"
                className="mb-1 block text-xs font-medium text-white/70"
              >
                Rooms
              </label>
              <select
                id="rooms-select"
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white focus:border-amber-400 focus:outline-none"
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n} className="text-gray-900">
                    {n}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full rounded-lg bg-amber-500 px-6 py-2.5 text-sm font-semibold text-blue-900 transition-colors hover:bg-amber-400"
              >
                Check Availability
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
