import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

type Tab = 'hotels' | 'car' | 'flight'

const tabs: { id: Tab; label: string }[] = [
  { id: 'hotels', label: 'Hotels' },
  { id: 'car', label: 'Car' },
  { id: 'flight', label: 'Flight' },
]

export function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200 py-6 text-center text-sm text-gray-500">
      <p>
        More templates at{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-amber-600 hover:underline"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}

export function HotelsForm() {
  return (
    <div className="flex flex-wrap gap-3">
      <input
        type="text"
        placeholder="Destination"
        aria-label="Destination"
        className="flex-1 min-w-[140px] rounded border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
      />
      <input
        type="date"
        aria-label="Check-in date"
        className="rounded border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
      />
      <input
        type="date"
        aria-label="Check-out date"
        className="rounded border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
      />
      <select
        aria-label="Number of guests"
        className="rounded border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
        defaultValue=""
      >
        <option value="" disabled>
          Guests
        </option>
        <option value="1">1 Guest</option>
        <option value="2">2 Guests</option>
        <option value="3">3 Guests</option>
        <option value="4">4+ Guests</option>
      </select>
    </div>
  )
}

export function CarForm() {
  return (
    <div className="flex flex-wrap gap-3">
      <input
        type="text"
        placeholder="Pick-up location"
        aria-label="Pick-up location"
        className="flex-1 min-w-[140px] rounded border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
      />
      <input
        type="date"
        aria-label="Pick-up date"
        className="rounded border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
      />
      <input
        type="date"
        aria-label="Drop-off date"
        className="rounded border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
      />
      <select
        aria-label="Car type"
        className="rounded border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
        defaultValue=""
      >
        <option value="" disabled>
          Car Type
        </option>
        <option value="economy">Economy</option>
        <option value="compact">Compact</option>
        <option value="suv">SUV</option>
        <option value="luxury">Luxury</option>
      </select>
    </div>
  )
}

export function FlightForm() {
  return (
    <div className="flex flex-wrap gap-3">
      <input
        type="text"
        placeholder="From"
        aria-label="Departure city"
        className="flex-1 min-w-[120px] rounded border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
      />
      <input
        type="text"
        placeholder="To"
        aria-label="Destination city"
        className="flex-1 min-w-[120px] rounded border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
      />
      <input
        type="date"
        aria-label="Departure date"
        className="rounded border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
      />
      <input
        type="date"
        aria-label="Return date"
        className="rounded border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
      />
      <select
        aria-label="Travel class"
        className="rounded border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
        defaultValue=""
      >
        <option value="" disabled>
          Class
        </option>
        <option value="economy">Economy</option>
        <option value="business">Business</option>
        <option value="first">First Class</option>
      </select>
    </div>
  )
}

export interface JourneyBarProps {
  className?: string
}

export function JourneyBar({ className }: JourneyBarProps) {
  const [activeTab, setActiveTab] = useState<Tab>('hotels')

  return (
    <div className={cn('w-full rounded-lg bg-white shadow-lg', className)}>
      {/* Tab navigation */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'flex-1 px-6 py-4 text-sm font-semibold transition-colors',
              activeTab === tab.id
                ? 'border-b-2 border-amber-500 text-amber-600'
                : 'text-gray-500 hover:text-gray-700',
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab panels */}
      <div className="p-5">
        {activeTab === 'hotels' && (
          <div role="tabpanel" id="panel-hotels" aria-labelledby="tab-hotels">
            <HotelsForm />
          </div>
        )}
        {activeTab === 'car' && (
          <div role="tabpanel" id="panel-car" aria-labelledby="tab-car">
            <CarForm />
          </div>
        )}
        {activeTab === 'flight' && (
          <div role="tabpanel" id="panel-flight" aria-labelledby="tab-flight">
            <FlightForm />
          </div>
        )}

        {/* Search button */}
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            className="rounded bg-amber-500 px-8 py-3 text-sm font-semibold text-white shadow transition-colors hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}
