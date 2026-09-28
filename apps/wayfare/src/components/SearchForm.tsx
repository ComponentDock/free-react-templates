import { useState } from 'react'
import { MapPin, Calendar, Users } from 'lucide-react'

export interface SearchFormProps {
  onSubmit?: (data: {
    destination: string
    checkIn: string
    checkOut: string
    travelers: string
    addFlight: boolean
    addCar: boolean
  }) => void
}

export function SearchForm({ onSubmit }: SearchFormProps) {
  const [destination, setDestination] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [travelers, setTravelers] = useState('1 adult')
  const [addFlight, setAddFlight] = useState(true)
  const [addCar, setAddCar] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSubmit?.({ destination, checkIn, checkOut, travelers, addFlight, addCar })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-b-lg bg-surface p-6"
      aria-label="Hotel search form"
    >
      {/* Destination */}
      <div className="mb-4">
        <label
          htmlFor="destination"
          className="mb-1 block text-xs font-semibold uppercase tracking-wider text-gray-400"
        >
          Going To
        </label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            id="destination"
            type="text"
            placeholder="Destination, hotel name"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full rounded bg-white py-3 pl-10 pr-4 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand"
          />
        </div>
      </div>

      {/* Dates + Travelers row */}
      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <label
            htmlFor="checkin"
            className="mb-1 block text-xs font-semibold uppercase tracking-wider text-gray-400"
          >
            Check-In
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              id="checkin"
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full rounded bg-white py-3 pl-10 pr-4 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="checkout"
            className="mb-1 block text-xs font-semibold uppercase tracking-wider text-gray-400"
          >
            Check-Out
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              id="checkout"
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full rounded bg-white py-3 pl-10 pr-4 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="travelers"
            className="mb-1 block text-xs font-semibold uppercase tracking-wider text-gray-400"
          >
            Travelers
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <select
              id="travelers"
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
              className="w-full appearance-none rounded bg-white py-3 pl-10 pr-4 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand"
            >
              <option value="1 adult">1 adult</option>
              <option value="2 adults">2 adults</option>
              <option value="3 adults">3 adults</option>
              <option value="1 adult, 1 child">1 adult, 1 child</option>
              <option value="2 adults, 1 child">2 adults, 1 child</option>
              <option value="2 adults, 2 children">2 adults, 2 children</option>
            </select>
          </div>
        </div>
      </div>

      {/* Checkboxes */}
      <div className="mb-5 flex flex-wrap gap-6">
        <label className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white">
          <input
            type="checkbox"
            checked={addFlight}
            onChange={(e) => setAddFlight(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-brand focus:ring-brand"
          />
          Add a Flight
        </label>
        <label className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white">
          <input
            type="checkbox"
            checked={addCar}
            onChange={(e) => setAddCar(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-brand focus:ring-brand"
          />
          Add a Car
        </label>
      </div>

      {/* Search button */}
      <button
        type="submit"
        className="rounded bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-surface"
      >
        Search
      </button>
    </form>
  )
}
