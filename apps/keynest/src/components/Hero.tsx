import { useState } from 'react'
import { MapPin, Search } from 'lucide-react'

const TABS = ['Buy Property', 'Rent Property'] as const
const PROPERTY_TYPES = ['House', 'Apartment', 'Villa', 'Office']
const BEDROOMS = ['1', '2', '3', '4+']

export function Hero() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>('Buy Property')

  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center bg-cover bg-center py-16"
      style={{
        backgroundImage:
          'linear-gradient(rgba(20, 12, 64, 0.7), rgba(20, 12, 64, 0.8)), url(https://picsum.photos/seed/keynest-hero/1600/900)',
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl">
            Find Your Dream Home
          </h1>
          <p className="mb-8 text-lg text-gray-200">We Have Over Million Properties For You</p>

          {/* Tabs */}
          <div className="mb-0 flex gap-0">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-t-lg px-6 py-3 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-white text-primary'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search form */}
          <form className="flex flex-col gap-3 rounded-b-lg rounded-tr-lg bg-white p-4 shadow-lg sm:flex-row">
            <div className="relative flex-1">
              <MapPin
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Location"
                className="w-full rounded border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm text-heading outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <select className="rounded border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-heading outline-none focus:border-primary">
              <option>Property Type</option>
              {PROPERTY_TYPES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
            <select className="rounded border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-heading outline-none focus:border-primary">
              <option>Bedroom</option>
              {BEDROOMS.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded bg-primary px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
            >
              <Search size={16} />
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
