import { useState } from 'react'
import { MapPin, Calendar, Users, ChevronDown } from 'lucide-react'
import { TravelTypeTabs } from './TravelTypeTabs'
import { cn } from '@free-react-templates/ui'

export function SearchForm() {
  const [destination, setDestination] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [travelers, setTravelers] = useState('1 adult')
  const [addFlight, setAddFlight] = useState(true)
  const [addCar, setAddCar] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[940px] rounded-[10px] p-[50px_70px_80px] font-body shadow-2xl max-md:p-[30px_15px]"
      style={{
        background: 'linear-gradient(rgba(79,172,254,0.8) 0%, rgba(0,242,254,0.8) 100%)',
      }}
    >
      <h2 className="mb-10 font-heading text-[36px] font-bold text-waypoint-text max-md:text-center">
        Search Hotels
      </h2>

      <TravelTypeTabs />

      <div className="relative mt-7">
        {/* Destination field */}
        <div className="mb-[15px]">
          <div className="relative flex h-[60px] items-center rounded-[3px] bg-white pl-[48px] pr-4">
            <div className="absolute left-0 top-0 flex h-full w-[48px] items-center justify-center">
              <MapPin className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <label
                htmlFor="destination"
                className="block text-[11px] font-black uppercase tracking-wide text-waypoint-muted"
              >
                Going To
              </label>
              <input
                id="destination"
                type="text"
                placeholder="Destination, hotel name"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full border-0 bg-transparent py-2 text-[16px] text-waypoint-text outline-none placeholder:text-waypoint-placeholder"
              />
            </div>
          </div>
        </div>

        {/* Date and travelers row */}
        <div className="mb-6 flex justify-between gap-[15px] max-md:block max-md:space-y-[15px]">
          {/* Check-in */}
          <div className="relative flex h-[60px] flex-1 items-center rounded-[3px] bg-white pl-[48px] pr-4 max-md:w-full">
            <div className="absolute left-0 top-0 flex h-full w-[48px] items-center justify-center">
              <Calendar className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <label
                htmlFor="checkin"
                className="block text-[11px] font-black uppercase tracking-wide text-waypoint-muted"
              >
                Check-In
              </label>
              <input
                id="checkin"
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full border-0 bg-transparent py-2 text-[16px] text-waypoint-text outline-none"
              />
            </div>
          </div>

          {/* Check-out */}
          <div className="relative flex h-[60px] flex-1 items-center rounded-[3px] bg-white pl-[48px] pr-4 max-md:w-full">
            <div className="absolute left-0 top-0 flex h-full w-[48px] items-center justify-center">
              <Calendar className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <label
                htmlFor="checkout"
                className="block text-[11px] font-black uppercase tracking-wide text-waypoint-muted"
              >
                Check-Out
              </label>
              <input
                id="checkout"
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full border-0 bg-transparent py-2 text-[16px] text-waypoint-text outline-none"
              />
            </div>
          </div>

          {/* Travelers */}
          <div className="relative flex h-[60px] flex-1 items-center rounded-[3px] bg-white pl-[48px] pr-4 max-md:w-full">
            <div className="absolute left-0 top-0 flex h-full w-[48px] items-center justify-center">
              <Users className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <div className="flex flex-1 items-center justify-between">
              <div>
                <label
                  htmlFor="travelers"
                  className="block text-[11px] font-black uppercase tracking-wide text-waypoint-muted"
                >
                  Travelers
                </label>
                <select
                  id="travelers"
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  className="border-0 bg-transparent py-2 text-[16px] text-waypoint-text outline-none"
                >
                  <option value="1 adult">1 adult</option>
                  <option value="2 adults">2 adults</option>
                  <option value="3 adults">3 adults</option>
                  <option value="4 adults">4 adults</option>
                  <option value="2 adults, 1 child">2 adults, 1 child</option>
                  <option value="2 adults, 2 children">2 adults, 2 children</option>
                </select>
              </div>
              <ChevronDown className="h-5 w-5 text-gray-500" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Checkboxes and search button row */}
        <div className="flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-4">
          <div className="flex gap-11 max-md:gap-6">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={addFlight}
                onChange={(e) => setAddFlight(e.target.checked)}
                className="h-5 w-5 rounded border-0 accent-green-600"
              />
              <span className="text-[11px] font-black uppercase text-white">Add a Flight</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={addCar}
                onChange={(e) => setAddCar(e.target.checked)}
                className="h-5 w-5 rounded border-0 accent-green-600"
              />
              <span className="text-[11px] font-black uppercase text-white">Add a Car</span>
            </label>
          </div>

          <button
            type="submit"
            className={cn(
              'h-[50px] min-w-[100px] rounded-[3px] border-0 bg-waypoint-orange px-[15px] text-[16px] font-black text-white',
              'cursor-pointer transition-colors duration-200 hover:bg-waypoint-orange-hover',
            )}
          >
            Search
          </button>
        </div>
      </div>
    </form>
  )
}
