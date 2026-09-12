import { useState } from 'react'
import { Play } from 'lucide-react'
import { locationTabs } from '../data'

/** Tabbed location section with large images and thumbnail navigation. */
export function Location() {
  const [activeTab, setActiveTab] = useState(0)
  const active = locationTabs[activeTab]!

  return (
    <section className="bg-white py-20" data-testid="location">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-navy">Location</h2>

        {/* Large image */}
        <div className="relative mb-8 overflow-hidden rounded">
          <img
            src={active.image}
            alt={active.label}
            className="h-[400px] w-full object-cover"
            loading="lazy"
          />
          <button
            type="button"
            className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-colors hover:bg-primary-600"
            aria-label={`Play video for ${active.label}`}
          >
            <Play size={24} fill="currentColor" />
          </button>
        </div>

        {/* Thumbnail tabs */}
        <ul className="flex justify-center gap-4" role="tablist">
          {locationTabs.map((tab, i) => (
            <li key={tab.label} role="presentation">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === i}
                onClick={() => setActiveTab(i)}
                className={`group flex flex-col items-center gap-2 rounded p-1 transition-all ${
                  activeTab === i ? 'ring-2 ring-brand' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={tab.thumb}
                  alt={tab.label}
                  className="h-20 w-28 rounded object-cover"
                  loading="lazy"
                />
                <span className="text-xs font-semibold text-navy">{tab.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
