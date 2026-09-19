import { useState } from 'react'
import { Search } from 'lucide-react'

const TABS = ['hotels', 'car rentals', 'flights', 'trips', 'cruises', 'activities']

export function SearchPanel() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="search" className="relative z-20 -mt-16 max-w-6xl mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex overflow-x-auto border-b">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`flex-shrink-0 px-6 py-4 text-sm font-semibold uppercase tracking-wide transition-colors ${
                i === activeTab
                  ? 'text-trek-orange border-b-2 border-trek-orange'
                  : 'text-trek-muted hover:text-trek-text'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-trek-muted uppercase mb-1">
                destination
              </label>
              <input
                type="text"
                placeholder="Where are you going?"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-trek-orange"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-trek-muted uppercase mb-1">
                check in
              </label>
              <input
                type="date"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-trek-orange"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-trek-muted uppercase mb-1">
                check out
              </label>
              <input
                type="date"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-trek-orange"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-trek-muted uppercase mb-1">
                adults
              </label>
              <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-trek-orange">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
              </select>
            </div>
            <div>
              <button
                type="button"
                className="w-full bg-gradient-to-r from-trek-orange to-trek-purple text-white py-3 rounded-full text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Search size={16} />
                search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
