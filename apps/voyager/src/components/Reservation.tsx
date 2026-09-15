import { useState } from 'react'
import { Plane, Building2, Car, Ship } from 'lucide-react'

type Tab = 'flight' | 'hotel' | 'car' | 'cruise'

const tabs: { id: Tab; label: string; Icon: typeof Plane }[] = [
  { id: 'flight', label: 'Flight', Icon: Plane },
  { id: 'hotel', label: 'Hotel', Icon: Building2 },
  { id: 'car', label: 'Car Rent', Icon: Car },
  { id: 'cruise', label: 'Cruises', Icon: Ship },
]

export function Reservation() {
  const [activeTab, setActiveTab] = useState<Tab>('flight')

  return (
    <section className="relative z-10 -mt-16" aria-label="Reservation search">
      <div className="mx-auto max-w-6xl px-4">
        <div className="overflow-hidden rounded-lg bg-white shadow-xl">
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            {tabs.map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex flex-1 items-center justify-center gap-2 px-4 py-4 text-sm font-medium transition-colors ${
                  activeTab === id
                    ? 'border-b-2 border-primary-500 text-primary-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                aria-selected={activeTab === id}
                role="tab"
              >
                <Icon size={16} />
                {label}
              </button>
            ))}
          </div>

          {/* Forms */}
          <div className="p-6">
            {activeTab === 'flight' && (
              <form
                className="flex flex-col gap-4 md:flex-row"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex-1">
                  <label className="mb-1 block text-sm font-medium text-gray-700">Where:</label>
                  <input
                    type="text"
                    placeholder="Search Location"
                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label className="mb-1 block text-sm font-medium text-gray-700">Check-in:</label>
                  <input
                    type="text"
                    placeholder="Check-in date"
                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label className="mb-1 block text-sm font-medium text-gray-700">Check-out:</label>
                  <input
                    type="text"
                    placeholder="Check-out date"
                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label className="mb-1 block text-sm font-medium text-gray-700">Guest:</label>
                  <select className="w-full rounded border border-gray-300 px-3 py-2 text-sm">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5+</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button
                    type="submit"
                    className="w-full rounded bg-primary-500 px-6 py-2 text-sm font-semibold text-black transition-colors hover:bg-primary-600 md:w-auto"
                  >
                    Find Flights
                  </button>
                </div>
              </form>
            )}

            {activeTab === 'hotel' && (
              <form
                className="flex flex-col gap-4 md:flex-row"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex items-center">
                  <div>
                    <h3 className="text-lg font-bold text-black">Book Now</h3>
                    <span className="text-xs text-gray-500">Best Price Online</span>
                  </div>
                </div>
                <div className="flex-1">
                  <label className="mb-1 block text-sm font-medium text-gray-700">Check-in:</label>
                  <input
                    type="text"
                    placeholder="Check-in date"
                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label className="mb-1 block text-sm font-medium text-gray-700">Check-out:</label>
                  <input
                    type="text"
                    placeholder="Check-out date"
                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label className="mb-1 block text-sm font-medium text-gray-700">Guest:</label>
                  <select className="w-full rounded border border-gray-300 px-3 py-2 text-sm">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5+</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button
                    type="submit"
                    className="w-full rounded bg-primary-500 px-6 py-2 text-sm font-semibold text-black transition-colors hover:bg-primary-600 md:w-auto"
                  >
                    Find Hotel
                  </button>
                </div>
              </form>
            )}

            {activeTab === 'car' && (
              <form
                className="flex flex-col gap-4 md:flex-row"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex-1">
                  <label className="mb-1 block text-sm font-medium text-gray-700">Where:</label>
                  <input
                    type="text"
                    placeholder="Search Location"
                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Start Date:
                  </label>
                  <input
                    type="text"
                    placeholder="Start date"
                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Return Date:
                  </label>
                  <input
                    type="text"
                    placeholder="Return date"
                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                  />
                </div>
                <div className="flex items-end">
                  <button
                    type="submit"
                    className="w-full rounded bg-primary-500 px-6 py-2 text-sm font-semibold text-black transition-colors hover:bg-primary-600 md:w-auto"
                  >
                    Find Car
                  </button>
                </div>
              </form>
            )}

            {activeTab === 'cruise' && (
              <form
                className="flex flex-col gap-4 md:flex-row"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex-1">
                  <label className="mb-1 block text-sm font-medium text-gray-700">Where:</label>
                  <input
                    type="text"
                    placeholder="Search Location"
                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Start Date:
                  </label>
                  <input
                    type="text"
                    placeholder="Start date"
                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Categories:
                  </label>
                  <select className="w-full rounded border border-gray-300 px-3 py-2 text-sm">
                    <option>Suite</option>
                    <option>Super Deluxe</option>
                    <option>Balcony</option>
                    <option>Economy</option>
                    <option>Luxury</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button
                    type="submit"
                    className="w-full rounded bg-primary-500 px-6 py-2 text-sm font-semibold text-black transition-colors hover:bg-primary-600 md:w-auto"
                  >
                    Find Cruises
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
