import { useState } from 'react'
import { ChevronDown, ArrowRight } from 'lucide-react'

export function Hero() {
  const [sellType, setSellType] = useState<'sell' | 'rent'>('sell')

  return (
    <section id="home" className="relative min-h-[600px] overflow-hidden">
      {/* Background image */}
      <img
        src="https://picsum.photos/seed/propwise-city/1600/900"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Golden overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/40 via-amber-400/30 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 pt-32 pb-48 sm:px-6">
        <h1 className="text-4xl font-bold uppercase leading-tight tracking-wide text-white md:text-5xl lg:text-6xl">
          We&apos;re Real Estate King
        </h1>
      </div>

      {/* Search card */}
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6" style={{ marginTop: '-80px' }}>
        <div className="rounded-lg bg-white p-6 shadow-xl sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <h2 className="text-lg font-semibold text-heading">Search Properties For</h2>
            <div className="flex overflow-hidden rounded text-sm font-medium">
              <button
                type="button"
                onClick={() => setSellType('sell')}
                className={`px-4 py-1.5 transition-colors ${
                  sellType === 'sell'
                    ? 'bg-brand text-white'
                    : 'bg-gray-100 text-body hover:bg-gray-200'
                }`}
              >
                Sell
              </button>
              <button
                type="button"
                onClick={() => setSellType('rent')}
                className={`px-4 py-1.5 transition-colors ${
                  sellType === 'rent'
                    ? 'bg-brand text-white'
                    : 'bg-gray-100 text-body hover:bg-gray-200'
                }`}
              >
                Rent
              </button>
            </div>
            <ArrowRight className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Location */}
            <div className="relative">
              <label htmlFor="location" className="mb-1 block text-xs font-medium text-body">
                Choose locations
              </label>
              <div className="relative">
                <select
                  id="location"
                  className="w-full appearance-none rounded border border-gray-200 bg-gray-50 px-3 py-2.5 pr-8 text-sm text-heading focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                >
                  <option>Choose locations</option>
                  <option>New York</option>
                  <option>Los Angeles</option>
                  <option>Chicago</option>
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Property Type */}
            <div className="relative">
              <label htmlFor="property-type" className="mb-1 block text-xs font-medium text-body">
                Property Type
              </label>
              <div className="relative">
                <select
                  id="property-type"
                  className="w-full appearance-none rounded border border-gray-200 bg-gray-50 px-3 py-2.5 pr-8 text-sm text-heading focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                >
                  <option>Property Type</option>
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Condo</option>
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Bedrooms */}
            <div className="relative">
              <label htmlFor="bedrooms" className="mb-1 block text-xs font-medium text-body">
                Bedrooms
              </label>
              <div className="relative">
                <select
                  id="bedrooms"
                  className="w-full appearance-none rounded border border-gray-200 bg-gray-50 px-3 py-2.5 pr-8 text-sm text-heading focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                >
                  <option>Bedrooms</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4+</option>
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Search button */}
            <div className="flex items-end">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded bg-brand px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-600"
              >
                Search Properties
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Range sliders row */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {/* Price Range */}
            <div>
              <div className="mb-2 flex items-center justify-between text-xs font-medium text-body">
                <span>Price Range:</span>
                <span className="flex gap-2 text-brand">
                  <span className="rounded bg-brand/10 px-2 py-0.5 text-xs font-semibold">
                    $1000
                  </span>
                  <span className="rounded bg-brand/10 px-2 py-0.5 text-xs font-semibold">
                    $4000
                  </span>
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={5000}
                defaultValue={1000}
                aria-label="Minimum price"
                className="w-full accent-brand"
              />
              <div className="mt-1 flex justify-between text-[10px] text-gray-400">
                <span>0</span>
                <span>1250</span>
                <span>2500</span>
                <span>3750</span>
                <span>5000</span>
              </div>
            </div>

            {/* Area Range */}
            <div>
              <div className="mb-2 flex items-center justify-between text-xs font-medium text-body">
                <span>Area Range (sqm):</span>
                <span className="flex gap-2 text-brand">
                  <span className="rounded bg-brand/10 px-2 py-0.5 text-xs font-semibold">
                    1000
                  </span>
                  <span className="rounded bg-brand/10 px-2 py-0.5 text-xs font-semibold">
                    4000
                  </span>
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={5000}
                defaultValue={1000}
                aria-label="Minimum area"
                className="w-full accent-brand"
              />
              <div className="mt-1 flex justify-between text-[10px] text-gray-400">
                <span>0</span>
                <span>1250</span>
                <span>2500</span>
                <span>3750</span>
                <span>5000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
