import type { FormEvent } from 'react'
import { Calendar, Users, BedDouble } from 'lucide-react'

function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/haven-hero/1600/900)' }}
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-32">
        <div>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Haven A Luxury Hotel
          </h1>
          <p className="mt-6 max-w-md text-lg text-gray-300">
            Here are the best hotel booking sites, including recommendations for international
            travel and for finding low-priced hotel rooms.
          </p>
          <a
            href="#rooms"
            className="mt-8 inline-block border-b-2 border-primary-400 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:text-primary-400"
          >
            Discover Now
          </a>
        </div>

        <div id="booking" className="rounded-lg bg-white/10 p-6 backdrop-blur md:p-8">
          <h2 className="font-display text-xl font-semibold">Booking Your Hotel</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="check-in" className="mb-1 block text-sm font-medium">
                <Calendar className="mr-1 inline h-4 w-4" aria-hidden="true" />
                Check In
              </label>
              <input
                id="check-in"
                type="date"
                className="w-full rounded border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-gray-400 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400"
              />
            </div>
            <div>
              <label htmlFor="check-out" className="mb-1 block text-sm font-medium">
                <Calendar className="mr-1 inline h-4 w-4" aria-hidden="true" />
                Check Out
              </label>
              <input
                id="check-out"
                type="date"
                className="w-full rounded border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-gray-400 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400"
              />
            </div>
            <div>
              <label htmlFor="guests" className="mb-1 block text-sm font-medium">
                <Users className="mr-1 inline h-4 w-4" aria-hidden="true" />
                Guests
              </label>
              <select
                id="guests"
                className="w-full rounded border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400"
              >
                <option value="2">2 Adults</option>
                <option value="3">3 Adults</option>
                <option value="4">4 Adults</option>
              </select>
            </div>
            <div>
              <label htmlFor="room-type" className="mb-1 block text-sm font-medium">
                <BedDouble className="mr-1 inline h-4 w-4" aria-hidden="true" />
                Room
              </label>
              <select
                id="room-type"
                className="w-full rounded border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400"
              >
                <option value="1">1 Room</option>
                <option value="2">2 Rooms</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full rounded bg-primary-400 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary-500"
            >
              Check Availability
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
