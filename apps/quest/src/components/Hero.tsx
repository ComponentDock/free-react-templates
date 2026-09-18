import { Search } from 'lucide-react'
import { useState, type FormEvent } from 'react'

const DESTINATIONS = ['New York', 'Barcelona', 'Paris', 'London', 'Tokyo'] as const
const CATEGORIES = ['All Categories', 'Hotels', 'Restaurants', 'Shopping'] as const
const PRICES = ['Price Range', '$100 - $499', '$500 - $999', '$1000+'] as const

type Tab = 'places' | 'events'

const handleSubmit = (e: FormEvent) => {
  e.preventDefault()
}

export function Hero() {
  const [activeTab, setActiveTab] = useState<Tab>('places')

  return (
    <section
      className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(14,2,35,0.7), rgba(14,2,35,0.7)), url(https://picsum.photos/seed/quest-hero/1920/1080)',
      }}
    >
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-24">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-3">Discover places near you</h1>
        <p className="text-white/80 text-lg mb-8">This is the best guide of your city</p>

        {/* Tabs */}
        <div className="flex justify-center gap-1 mb-0">
          {(['places', 'events'] as const).map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors ${
                activeTab === tab
                  ? 'bg-white text-brand-dark'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {tab === 'places' ? 'Places' : 'Events'}
            </button>
          ))}
        </div>

        {/* Search form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 flex flex-col md:flex-row gap-3 items-stretch"
          role="search"
          aria-label="Search destinations"
        >
          <select
            className="flex-1 border border-gray-200 px-4 py-3 text-sm text-text-secondary bg-white rounded-none focus:outline-none focus:ring-2 focus:ring-brand"
            aria-label="Destination"
          >
            {DESTINATIONS.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
          <select
            className="flex-1 border border-gray-200 px-4 py-3 text-sm text-text-secondary bg-white rounded-none focus:outline-none focus:ring-2 focus:ring-brand"
            aria-label="Category"
          >
            {CATEGORIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <select
            className="flex-1 border border-gray-200 px-4 py-3 text-sm text-text-secondary bg-white rounded-none focus:outline-none focus:ring-2 focus:ring-brand"
            aria-label="Price range"
          >
            {PRICES.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
          <button
            type="submit"
            className="bg-brand hover:bg-brand-hover text-white font-bold px-8 py-3 flex items-center justify-center gap-2 transition-colors"
          >
            <Search className="w-4 h-4" />
            Search
          </button>
        </form>
      </div>

      {/* Social sidebar */}
      <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-3">
        <span className="text-white text-xs font-semibold tracking-widest uppercase [writing-mode:vertical-lr]">
          Follow us
        </span>
        <div className="w-px h-12 bg-white/40" />
        {['facebook', 'twitter', 'linkedin', 'instagram'].map((s) => (
          <a
            key={s}
            href="#"
            aria-label={s}
            className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-xs hover:bg-brand transition-colors"
          >
            {s.charAt(0).toUpperCase()}
          </a>
        ))}
      </div>
    </section>
  )
}
