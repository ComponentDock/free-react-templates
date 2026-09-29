import { useState } from 'react'
import { Search, ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

type Tab = 'hotels' | 'car' | 'flight'

const tabs: { id: Tab; label: string }[] = [
  { id: 'hotels', label: 'HOTELS' },
  { id: 'car', label: 'CAR' },
  { id: 'flight', label: 'FLIGHT' },
]

function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
}

export function SearchTabs() {
  const [activeTab, setActiveTab] = useState<Tab>('hotels')
  const [destination, setDestination] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [travellers, setTravellers] = useState('1 Adult, 0 Children, 1 Room')
  const [travellersOpen, setTravellersOpen] = useState(false)

  const travellerOptions = [
    '1 Adult, 0 Children, 1 Room',
    '2 Adults, 0 Children, 1 Room',
    '2 Adults, 1 Child, 1 Room',
    '2 Adults, 2 Children, 2 Rooms',
  ]

  return (
    <div className="mx-auto w-full max-w-[680px] rounded-lg bg-seekwell-card p-8 shadow-2xl">
      {/* Tab navigation */}
      <nav className="mb-6 flex gap-6" aria-label="Search category">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'border-b-2 pb-1 text-sm font-bold tracking-wide transition-colors',
              activeTab === tab.id
                ? 'border-seekwell-tab-active text-seekwell-tab-active'
                : 'border-transparent text-seekwell-tab-inactive hover:text-seekwell-text',
            )}
            aria-selected={activeTab === tab.id}
            role="tab"
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Search form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Where input — full width */}
        <div className="flex items-center rounded bg-seekwell-input-bg px-4 py-3">
          <label htmlFor="where" className="mr-3 text-sm font-semibold text-seekwell-input-text">
            Where:
          </label>
          <input
            id="where"
            type="text"
            placeholder="City, region or specific hotel"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="flex-1 border-0 bg-transparent text-sm text-seekwell-input-text outline-none placeholder:text-seekwell-input-placeholder"
          />
          <Search className="h-5 w-5 text-seekwell-input-placeholder" aria-hidden="true" />
        </div>

        {/* Check-In + Check-Out — side by side */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center rounded bg-seekwell-input-bg px-4 py-3">
            <label
              htmlFor="check-in"
              className="mr-3 text-sm font-semibold text-seekwell-input-text"
            >
              Check-In:
            </label>
            <input
              id="check-in"
              type="date"
              placeholder="mm/dd/yyyy"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="flex-1 border-0 bg-transparent text-sm text-seekwell-input-text outline-none placeholder:text-seekwell-input-placeholder"
            />
          </div>
          <div className="flex items-center rounded bg-seekwell-input-bg px-4 py-3">
            <label
              htmlFor="check-out"
              className="mr-3 text-sm font-semibold text-seekwell-input-text"
            >
              Check-Out:
            </label>
            <input
              id="check-out"
              type="date"
              placeholder="mm/dd/yyyy"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="flex-1 border-0 bg-transparent text-sm text-seekwell-input-text outline-none placeholder:text-seekwell-input-placeholder"
            />
          </div>
        </div>

        {/* Travellers + Search button — side by side */}
        <div className="grid grid-cols-2 gap-4">
          {/* Travellers dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setTravellersOpen(!travellersOpen)}
              className="flex w-full items-center rounded bg-seekwell-input-bg px-4 py-3 text-left"
              aria-expanded={travellersOpen}
              aria-haspopup="listbox"
            >
              <span className="mr-3 text-sm font-semibold text-seekwell-input-text">
                Travellers:
              </span>
              <span className="flex-1 truncate text-sm text-seekwell-input-text">{travellers}</span>
              <ChevronDown className="h-4 w-4 text-seekwell-input-placeholder" aria-hidden="true" />
            </button>
            {travellersOpen && (
              <ul role="listbox" className="absolute z-10 mt-1 w-full rounded bg-white shadow-lg">
                {travellerOptions.map((option) => (
                  <li
                    key={option}
                    role="option"
                    aria-selected={option === travellers}
                    className={cn(
                      'cursor-pointer px-4 py-2 text-sm hover:bg-gray-100',
                      option === travellers
                        ? 'font-semibold text-seekwell-purple'
                        : 'text-seekwell-input-text',
                    )}
                    onClick={() => {
                      setTravellers(option)
                      setTravellersOpen(false)
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Search button */}
          <button
            type="submit"
            className={cn(
              'flex items-center justify-center rounded bg-seekwell-purple px-8 py-3 text-sm font-bold tracking-wide text-seekwell-text',
              'cursor-pointer transition-colors duration-200 hover:bg-seekwell-purple-hover',
            )}
            aria-label="Search"
          >
            SEARCH
          </button>
        </div>
      </form>
    </div>
  )
}
