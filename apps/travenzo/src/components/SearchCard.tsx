import { useState } from 'react'
import { MapPin, Calendar } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

type Tab = 'Hotels' | 'Car' | 'Flight'

const TABS: Tab[] = ['Hotels', 'Car', 'Flight']

function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
}

export function SearchCard() {
  const [activeTab, setActiveTab] = useState<Tab>('Hotels')
  const [destination, setDestination] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [adults, setAdults] = useState(1)
  const [childrenCount, setChildrenCount] = useState(0)
  const [rooms, setRooms] = useState(1)
  const [addFlight, setAddFlight] = useState(true)
  const [addCar, setAddCar] = useState(false)

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-[520px] rounded-xl bg-travenzo-card p-6 shadow-2xl"
    >
      {/* Tabs */}
      <div className="mb-6 flex gap-6 border-b border-travenzo-border pb-3">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={cn(
              'text-sm font-semibold transition-colors',
              activeTab === tab
                ? 'text-travenzo-tab-active'
                : 'text-travenzo-tab-inactive hover:text-travenzo-tab-active',
            )}
            aria-selected={activeTab === tab}
            role="tab"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Going To */}
      <div className="mb-4">
        <label
          htmlFor="going-to"
          className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-travenzo-muted"
        >
          Going To
        </label>
        <div className="flex items-center gap-2 rounded-lg border border-travenzo-border bg-travenzo-card-light px-3 py-2.5">
          <MapPin className="h-4 w-4 text-travenzo-muted" aria-hidden="true" />
          <input
            id="going-to"
            type="text"
            placeholder="DESTINATION, HOTEL NAME"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full border-0 bg-transparent text-sm text-travenzo-text outline-none placeholder:text-travenzo-muted"
          />
        </div>
      </div>

      {/* Check-In / Check-Out */}
      <div className="mb-4 flex gap-3">
        <div className="flex-1">
          <label
            htmlFor="check-in"
            className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-travenzo-muted"
          >
            Check-In
          </label>
          <div className="flex items-center gap-2 rounded-lg border border-travenzo-border bg-travenzo-card-light px-3 py-2.5">
            <Calendar className="h-4 w-4 text-travenzo-muted" aria-hidden="true" />
            <input
              id="check-in"
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full border-0 bg-transparent text-sm text-travenzo-text outline-none"
            />
          </div>
        </div>
        <div className="flex-1">
          <label
            htmlFor="check-out"
            className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-travenzo-muted"
          >
            Check-Out
          </label>
          <div className="flex items-center gap-2 rounded-lg border border-travenzo-border bg-travenzo-card-light px-3 py-2.5">
            <Calendar className="h-4 w-4 text-travenzo-muted" aria-hidden="true" />
            <input
              id="check-out"
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full border-0 bg-transparent text-sm text-travenzo-text outline-none"
            />
          </div>
        </div>
      </div>

      {/* Travellers */}
      <div className="mb-4">
        <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-travenzo-muted">
          Travellers
        </label>
        <div className="rounded-lg border border-travenzo-border bg-travenzo-card-light px-3 py-2.5">
          <div className="flex items-center justify-between">
            <span className="text-sm text-travenzo-text">Adults</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setAdults((a) => Math.max(1, a - 1))}
                className="flex h-6 w-6 items-center justify-center rounded border border-travenzo-border text-xs font-bold text-travenzo-text transition-colors hover:bg-travenzo-card"
                aria-label="Decrease adults"
              >
                -
              </button>
              <span className="w-6 text-center text-sm text-travenzo-text">{adults}</span>
              <button
                type="button"
                onClick={() => setAdults((a) => a + 1)}
                className="flex h-6 w-6 items-center justify-center rounded border border-travenzo-border text-xs font-bold text-travenzo-text transition-colors hover:bg-travenzo-card"
                aria-label="Increase adults"
              >
                +
              </button>
            </div>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-sm text-travenzo-text">Children</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setChildrenCount((c) => Math.max(0, c - 1))}
                className="flex h-6 w-6 items-center justify-center rounded border border-travenzo-border text-xs font-bold text-travenzo-text transition-colors hover:bg-travenzo-card"
                aria-label="Decrease children"
              >
                -
              </button>
              <span className="w-6 text-center text-sm text-travenzo-text">{childrenCount}</span>
              <button
                type="button"
                onClick={() => setChildrenCount((c) => c + 1)}
                className="flex h-6 w-6 items-center justify-center rounded border border-travenzo-border text-xs font-bold text-travenzo-text transition-colors hover:bg-travenzo-card"
                aria-label="Increase children"
              >
                +
              </button>
            </div>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-sm text-travenzo-text">Rooms</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setRooms((r) => Math.max(1, r - 1))}
                className="flex h-6 w-6 items-center justify-center rounded border border-travenzo-border text-xs font-bold text-travenzo-text transition-colors hover:bg-travenzo-card"
                aria-label="Decrease rooms"
              >
                -
              </button>
              <span className="w-6 text-center text-sm text-travenzo-text">{rooms}</span>
              <button
                type="button"
                onClick={() => setRooms((r) => r + 1)}
                className="flex h-6 w-6 items-center justify-center rounded border border-travenzo-border text-xs font-bold text-travenzo-text transition-colors hover:bg-travenzo-card"
                aria-label="Increase rooms"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Checkboxes */}
      <div className="mb-5 flex gap-6">
        <label className="flex items-center gap-2 text-sm text-travenzo-text">
          <input
            type="checkbox"
            checked={addFlight}
            onChange={(e) => setAddFlight(e.target.checked)}
            className="h-4 w-4 rounded border-travenzo-border accent-travenzo-green"
          />
          Add a flight
        </label>
        <label className="flex items-center gap-2 text-sm text-travenzo-text">
          <input
            type="checkbox"
            checked={addCar}
            onChange={(e) => setAddCar(e.target.checked)}
            className="h-4 w-4 rounded border-travenzo-border accent-travenzo-green"
          />
          Add a car
        </label>
      </div>

      {/* Search Button */}
      <button
        type="submit"
        className={cn(
          'w-full cursor-pointer rounded-lg bg-travenzo-green py-3 text-sm font-semibold text-white',
          'transition-colors duration-200 hover:bg-travenzo-green-hover',
        )}
        aria-label="Search"
      >
        Search
      </button>
    </form>
  )
}
