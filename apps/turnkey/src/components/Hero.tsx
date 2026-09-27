import { useState } from 'react'
import { Search } from 'lucide-react'

export function Hero() {
  const [mode, setMode] = useState<'sell' | 'rent'>('sell')

  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex items-end justify-center bg-cover bg-center pb-24"
      style={{ backgroundImage: "url('https://picsum.photos/seed/turnkey-hero/1920/1080')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">We&apos;re Real Estate King</h1>

        {/* Search form */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-sm font-medium">Search Properties For</span>
            <button
              type="button"
              className="relative w-16 h-8 rounded-full bg-brand/30 transition-colors"
              onClick={() => setMode(mode === 'sell' ? 'rent' : 'sell')}
              aria-label={`Switch to ${mode === 'sell' ? 'rent' : 'sell'} mode`}
            >
              <span
                className="absolute top-1 left-1 w-6 h-6 rounded-full bg-brand transition-transform"
                style={{ transform: mode === 'rent' ? 'translateX(32px)' : 'none' }}
              />
            </button>
            <span className="text-sm">
              {mode === 'sell' ? (
                <>
                  Sell <span className="mx-1">→</span>
                </>
              ) : (
                <>
                  <span className="mr-1">←</span> Rent
                </>
              )}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <select
              className="w-full px-4 py-3 rounded bg-white text-heading text-sm border-0 focus:ring-2 focus:ring-brand"
              aria-label="Choose location"
            >
              <option>Choose Locations</option>
              <option>New York</option>
              <option>Los Angeles</option>
              <option>Chicago</option>
            </select>
            <select
              className="w-full px-4 py-3 rounded bg-white text-heading text-sm border-0 focus:ring-2 focus:ring-brand"
              aria-label="Property type"
            >
              <option>Property Type</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Condo</option>
            </select>
            <select
              className="w-full px-4 py-3 rounded bg-white text-heading text-sm border-0 focus:ring-2 focus:ring-brand"
              aria-label="Number of bedrooms"
            >
              <option>Bedrooms</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4+</option>
            </select>
            <select
              className="w-full px-4 py-3 rounded bg-white text-heading text-sm border-0 focus:ring-2 focus:ring-brand"
              aria-label="Price range"
            >
              <option>Price Range</option>
              <option>$100k - $300k</option>
              <option>$300k - $500k</option>
              <option>$500k+</option>
            </select>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded text-sm font-medium transition-colors"
            >
              Search Properties
              <Search size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
