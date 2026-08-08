import { useState } from 'react'
import { Building2, DollarSign, MapPin, Search } from 'lucide-react'
import { Button, cn } from '@free-react-templates/ui'

const tabs = [
  { label: 'Buy', status: 'for-sale' },
  { label: 'Rent', status: 'for-rent' },
  { label: 'Sell', status: 'sell' },
] as const

const locations = [
  'Any Location',
  'Manhattan',
  'Brooklyn',
  'Queens',
  'The Hamptons',
  'Westchester',
  'Greenwich',
] as const

const propertyTypes = [
  'Any Type',
  'House',
  'Apartment',
  'Condo',
  'Townhouse',
  'Land',
  'Commercial',
] as const

const priceRanges = [
  'Any Price',
  'Under $1M',
  '$1M - $2.5M',
  '$2.5M - $5M',
  '$5M - $10M',
  '$10M+',
] as const

const quickStats = [
  { value: '500+', label: 'Properties Listed' },
  { value: '$2B+', label: 'Sales Volume' },
  { value: '15+', label: 'Years Experience' },
] as const

const selectClass =
  'w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 focus:border-primary-500 focus:bg-white focus:outline-none'

export function Hero() {
  const [status, setStatus] = useState<(typeof tabs)[number]['status']>('for-sale')

  return (
    <section id="home" className="relative min-h-[85vh] overflow-hidden bg-gray-900">
      {/* Background image + gradient overlay */}
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/keyhaven-hero/1920/1080"
          alt="Luxury home"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center px-4 py-24 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Find Your <span className="text-primary-500">Dream Home</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-gray-300">
            Discover luxury properties in the most prestigious neighborhoods with our expert
            guidance.
          </p>
        </div>

        {/* Search card */}
        <div className="mt-12 max-w-4xl">
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.status}
                type="button"
                aria-pressed={status === tab.status}
                onClick={() => setStatus(tab.status)}
                className={cn(
                  'rounded-t-xl px-8 py-3 text-sm transition-all',
                  status === tab.status
                    ? 'bg-primary-600 font-bold text-white'
                    : 'bg-white/20 font-medium text-white backdrop-blur-sm hover:bg-white/30',
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <form
            aria-label="Property search"
            onSubmit={(event) => event.preventDefault()}
            className="rounded-2xl rounded-tl-none bg-white p-6 shadow-2xl lg:p-8"
          >
            <input type="hidden" name="status" value={status} />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <label
                  htmlFor="location"
                  className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-900"
                >
                  <MapPin className="h-4 w-4 text-primary-600" aria-hidden="true" />
                  Location
                </label>
                <select id="location" className={selectClass}>
                  {locations.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="property-type"
                  className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-900"
                >
                  <Building2 className="h-4 w-4 text-primary-600" aria-hidden="true" />
                  Property Type
                </label>
                <select id="property-type" className={selectClass}>
                  {propertyTypes.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="price-range"
                  className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-900"
                >
                  <DollarSign className="h-4 w-4 text-primary-600" aria-hidden="true" />
                  Price Range
                </label>
                <select id="price-range" className={selectClass}>
                  {priceRanges.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-end">
                <Button
                  type="submit"
                  className="h-auto w-full rounded-xl px-6 py-3.5 font-bold shadow-lg shadow-primary-600/30 hover:shadow-xl"
                >
                  <Search className="h-5 w-5" aria-hidden="true" />
                  Search
                </Button>
              </div>
            </div>
          </form>
        </div>

        {/* Hero quick stats */}
        <div className="mt-12 flex flex-wrap gap-8 text-white">
          {quickStats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
