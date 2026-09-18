import { useState } from 'react'
import { Search, MapPin, Briefcase } from 'lucide-react'

const TABS = ['Find Job', 'Find Candidate'] as const

export function SearchTabs() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>('Find Job')

  return (
    <section id="find-job" className="bg-dark-overlay py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8 flex justify-center">
          <div className="flex rounded-full bg-white/10 p-1">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-6 py-2 text-sm font-medium transition ${
                  activeTab === tab ? 'bg-white text-dark-overlay' : 'text-white hover:bg-white/10'
                }`}
                role="tab"
                aria-selected={activeTab === tab}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded border border-gray-200 px-4 py-3">
              <Search size={18} className="text-brand-blue" />
              <input
                type="text"
                placeholder={
                  activeTab === 'Find Job' ? 'Job title or keyword' : 'Candidate name or skill'
                }
                className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
                aria-label={
                  activeTab === 'Find Job' ? 'Job title or keyword' : 'Candidate name or skill'
                }
              />
            </div>
            <div className="flex items-center gap-3 rounded border border-gray-200 px-4 py-3">
              <MapPin size={18} className="text-brand-blue" />
              <input
                type="text"
                placeholder="Location"
                className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
                aria-label="Location"
              />
            </div>
            <div className="flex items-center gap-3 rounded border border-gray-200 px-4 py-3">
              <Briefcase size={18} className="text-brand-blue" />
              <select
                className="w-full bg-transparent text-sm text-gray-700 outline-none"
                aria-label="Job type"
              >
                <option>All Types</option>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Remote</option>
              </select>
            </div>
            <button className="rounded bg-brand-blue px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-blue/90">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
