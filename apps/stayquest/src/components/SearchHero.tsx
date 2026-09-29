import { useState, type FormEvent } from 'react'
import { Search, MapPin, Calendar, Users } from 'lucide-react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function SearchHero() {
  const [query, setQuery] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('2')

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src="https://picsum.photos/seed/stayquest-hero/1920/1080"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-20 text-center sm:px-6">
        <h1 className="mb-10 text-4xl font-bold uppercase tracking-wider text-white drop-shadow-lg sm:text-5xl md:text-6xl">
          Search Hotel
        </h1>

        {/* Search form bar */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col rounded-lg bg-white shadow-2xl sm:flex-row sm:items-stretch"
        >
          {/* Location input */}
          <div className="flex flex-1 items-center gap-2 border-b px-4 py-3 sm:border-b-0 sm:border-r sm:px-5">
            <MapPin className="h-5 w-5 shrink-0 text-gray-400" aria-hidden="true" />
            <input
              type="text"
              placeholder="What are you looking for?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
              aria-label="Search query"
            />
          </div>

          {/* Check-in date */}
          <div className="flex flex-1 items-center gap-2 border-b px-4 py-3 sm:border-b-0 sm:border-r sm:px-5">
            <Calendar className="h-5 w-5 shrink-0 text-gray-400" aria-hidden="true" />
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-transparent text-sm text-gray-700 outline-none"
              aria-label="Check-in"
            />
          </div>

          {/* Check-out date */}
          <div className="flex flex-1 items-center gap-2 border-b px-4 py-3 sm:border-b-0 sm:border-r sm:px-5">
            <Calendar className="h-5 w-5 shrink-0 text-gray-400" aria-hidden="true" />
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-transparent text-sm text-gray-700 outline-none"
              aria-label="Check-out"
            />
          </div>

          {/* Guests select */}
          <div className="flex flex-1 items-center gap-2 px-4 py-3 sm:px-5">
            <Users className="h-5 w-5 shrink-0 text-gray-400" aria-hidden="true" />
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-transparent text-sm text-gray-700 outline-none"
              aria-label="Guests"
            >
              <option value="1">1 Adult</option>
              <option value="2">2 Adults</option>
              <option value="3">3 Adults</option>
              <option value="4">4 Adults</option>
            </select>
          </div>

          {/* Search button */}
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-br-lg rounded-tr-lg bg-[#c8a96e] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#b8995e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c8a96e] sm:rounded-bl-none sm:rounded-tl-none"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            Search
          </button>
        </form>
      </div>
    </section>
  )
}
