import { useState } from 'react'

type Tab = 'Flight' | 'Hotel' | 'Car Rent'

const tabs: Tab[] = ['Flight', 'Hotel', 'Car Rent']

const tabFields: Record<Tab, { label: string; placeholder: string }[]> = {
  Flight: [
    { label: 'From', placeholder: 'New York' },
    { label: 'To', placeholder: 'London' },
    { label: 'Date', placeholder: 'Select date' },
  ],
  Hotel: [
    { label: 'Location', placeholder: 'Paris' },
    { label: 'Date', placeholder: 'Select date' },
    { label: 'Guests', placeholder: '2 Adults' },
  ],
  'Car Rent': [
    { label: 'Pick-up', placeholder: 'Los Angeles' },
    { label: 'Date', placeholder: 'Select date' },
    { label: 'Drop-off', placeholder: 'San Francisco' },
  ],
}

export function SearchTabs() {
  const [activeTab, setActiveTab] = useState<Tab>('Flight')

  return (
    <div className="relative z-20 mx-auto -mt-16 max-w-4xl px-4">
      <div className="rounded-lg bg-white p-6 shadow-xl">
        <div className="mb-6 flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-accent-blue text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          {tabFields[activeTab].map((field) => (
            <div key={field.label}>
              <label className="mb-1 block text-xs font-medium text-text-muted">
                {field.label}
              </label>
              <input
                type="text"
                placeholder={field.placeholder}
                className="w-full rounded border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none"
              />
            </div>
          ))}
          <div className="flex items-end">
            <button className="w-full rounded-full bg-primary px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-dark">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
