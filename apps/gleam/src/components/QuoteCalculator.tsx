import { useMemo, useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export const propertyTypes = ['House', 'Apartment', 'Condo', 'Office'] as const
export const frequencies = ['One-Time', 'Weekly', 'Bi-Weekly', 'Monthly'] as const

export const PROPERTY_FACTOR: Record<(typeof propertyTypes)[number], number> = {
  House: 1,
  Apartment: 0.9,
  Condo: 0.8,
  Office: 1.2,
}

export const FREQUENCY_FACTOR: Record<(typeof frequencies)[number], number> = {
  'One-Time': 1,
  Weekly: 0.75,
  'Bi-Weekly': 0.85,
  Monthly: 0.6,
}

/* Documented estimate formula (matches the demo's $315 default for
   House / 1500 sq ft / 3 bedrooms / One-Time):
   price = propertyFactor × (size × 0.18 + bedrooms × 15) × frequencyFactor */
export function estimatePrice(
  propertyType: (typeof propertyTypes)[number],
  size: number,
  bedrooms: number,
  frequency: (typeof frequencies)[number],
): number {
  const subtotal = size * 0.18 + bedrooms * 15
  return Math.round(PROPERTY_FACTOR[propertyType] * subtotal * FREQUENCY_FACTOR[frequency])
}

const MIN_SIZE = 500
const MAX_SIZE = 5000

export function QuoteCalculator() {
  const [propertyType, setPropertyType] = useState<(typeof propertyTypes)[number]>('House')
  const [size, setSize] = useState(1500)
  const [bedrooms, setBedrooms] = useState(3)
  const [frequency, setFrequency] = useState<(typeof frequencies)[number]>('One-Time')

  const price = useMemo(
    () => estimatePrice(propertyType, size, bedrooms, frequency),
    [propertyType, size, bedrooms, frequency],
  )

  return (
    <div
      id="quote"
      className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl shadow-primary-900/10 ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800 sm:p-8"
    >
      <p className="text-sm font-semibold text-primary-600">Instant Quote</p>
      <h2 className="mt-1 text-xl font-bold text-gray-900 dark:text-white">
        Get your estimated price in seconds
      </h2>

      <div className="mt-6 space-y-5">
        <div>
          <label
            htmlFor="property-type"
            className="text-sm font-semibold text-gray-700 dark:text-gray-300"
          >
            Property Type
          </label>
          <select
            id="property-type"
            value={propertyType}
            onChange={(event) =>
              setPropertyType(event.target.value as (typeof propertyTypes)[number])
            }
            className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          >
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="home-size"
              className="text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
              Home Size
            </label>
            <span className="text-sm font-semibold text-primary-600">{size} sq ft</span>
          </div>
          <input
            id="home-size"
            type="range"
            min={MIN_SIZE}
            max={MAX_SIZE}
            step={100}
            value={size}
            onChange={(event) => setSize(Number(event.target.value))}
            className="mt-2 w-full accent-primary-600"
          />
          <div className="mt-1 flex justify-between text-xs text-gray-400">
            <span>{MIN_SIZE} sq ft</span>
            <span>{MAX_SIZE} sq ft</span>
          </div>
        </div>

        <div>
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Bedrooms</span>
          <div className="mt-1.5 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setBedrooms((value) => Math.max(0, value - 1))}
              disabled={bedrooms === 0}
              aria-label="Decrease bedrooms"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              <Minus className="h-4 w-4" aria-hidden="true" />
            </button>
            <span
              aria-live="polite"
              className="w-6 text-center text-lg font-bold text-gray-900 dark:text-white"
            >
              {bedrooms}
            </span>
            <button
              type="button"
              onClick={() => setBedrooms((value) => Math.min(9, value + 1))}
              aria-label="Increase bedrooms"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div>
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Frequency</span>
          <div
            className="mt-1.5 grid grid-cols-2 gap-2"
            role="group"
            aria-label="Cleaning frequency"
          >
            {frequencies.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setFrequency(option)}
                aria-pressed={frequency === option}
                className={cn(
                  'rounded-full px-3 py-2 text-sm font-semibold transition-colors',
                  frequency === option
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700',
                )}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-primary-50 p-4 dark:bg-primary-900/30">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Estimated Price</p>
          <p
            aria-live="polite"
            className="mt-1 text-3xl font-extrabold text-primary-600 dark:text-primary-400"
          >
            ${price}
          </p>
        </div>

        <button
          type="button"
          className="w-full rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
        >
          Book Now
        </button>
      </div>
    </div>
  )
}
