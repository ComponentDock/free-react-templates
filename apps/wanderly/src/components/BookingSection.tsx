import { useState } from 'react'
import { Search } from 'lucide-react'

const tabs = ['Hotels', 'Flights', 'Places'] as const
type Tab = (typeof tabs)[number]

const formConfigs: Record<Tab, { placeholders: string[] }> = {
  Hotels: { placeholders: ['Choose destination', 'Check-in date', 'Check-out date', 'Guests'] },
  Flights: { placeholders: ['From', 'To', 'Departure date', 'Passengers'] },
  Places: { placeholders: ['Destination', 'Date', 'Duration', 'Travelers'] },
}

export function BookingSection() {
  const [activeTab, setActiveTab] = useState<Tab>('Hotels')
  const config = formConfigs[activeTab]

  return (
    <section id="booking" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 text-center font-semibold text-sm uppercase tracking-wider transition-colors ${
                  activeTab === tab
                    ? 'text-primary-500 border-b-2 border-primary-500 bg-white'
                    : 'text-gray-500 hover:text-navy bg-gray-50'
                }`}
                aria-selected={activeTab === tab}
                role="tab"
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Form */}
          <div className="p-6">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end"
            >
              {config.placeholders.map((placeholder) => (
                <div key={placeholder}>
                  <input
                    type="text"
                    placeholder={placeholder}
                    className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>
              ))}
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-primary-500 text-white px-6 py-3 rounded font-semibold hover:bg-primary-600 transition-colors"
              >
                <Search size={18} /> Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
