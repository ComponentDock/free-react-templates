import { Search, CalendarDays } from 'lucide-react'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export function SearchPackage() {
  const [category, setCategory] = useState('')
  const [duration, setDuration] = useState('')
  const [date, setDate] = useState('')
  const [priceRange, setPriceRange] = useState('')

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <h2 className="font-display text-2xl font-bold leading-snug text-ink lg:text-3xl">
            Search suitable and affordable plan for your tour
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-smoke lg:text-base">
            Make she&apos;d moved divided air. Whose tree that replenish tone hath own upon them it
            multiply was blessed is lights make gathering so day dominion so creeping.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 bg-primary-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
          >
            Learn More
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <h3 className="mb-6 font-display text-lg font-bold text-ink">Search Package</h3>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="w-full border border-gray-200 bg-gray-50 px-4 py-3 pr-12 text-sm text-ink placeholder:text-smoke"
              />
              <Search size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-smoke" />
            </div>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-ink"
            >
              <option value="" disabled>
                Category
              </option>
              <option value="adventure">Adventure</option>
              <option value="beach">Beach</option>
              <option value="cultural">Cultural</option>
            </select>

            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-ink"
            >
              <option value="" disabled>
                Tour duration
              </option>
              <option value="3">3 Days</option>
              <option value="5">5 Days</option>
              <option value="7">7 Days</option>
              <option value="10">10+ Days</option>
            </select>

            <div className="relative">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border border-gray-200 bg-gray-50 px-4 py-3 pr-12 text-sm text-ink"
              />
              <CalendarDays
                size={16}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-smoke"
              />
            </div>

            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-ink"
            >
              <option value="" disabled>
                Price range
              </option>
              <option value="budget">Budget ($0–$500)</option>
              <option value="mid">Mid-range ($500–$1500)</option>
              <option value="luxury">Luxury ($1500+)</option>
            </select>

            <button
              type="submit"
              className="mt-2 w-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
            >
              Search Package
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
