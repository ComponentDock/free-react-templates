import { useState, type FormEvent } from 'react'
import { Calculator as CalculatorIcon, Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const destinations = [
  'New York, USA',
  'Los Angeles, USA',
  'London, UK',
  'Frankfurt, Germany',
  'Shanghai, China',
  'Singapore',
  'Sydney, Australia',
  'Dubai, UAE',
]

const options = [
  { name: 'Economy', delivery: '7–10 days', multiplier: 1, popular: false },
  { name: 'Standard', delivery: '3–5 days', multiplier: 1.6, popular: true },
  { name: 'Express', delivery: '1–2 days', multiplier: 2.4, popular: false },
  { name: 'Same Day', delivery: 'Today', multiplier: 3.2, popular: false },
]

const baseRate = 120

export function Calculator() {
  const [destination, setDestination] = useState('')
  const [option, setOption] = useState(options[1]!)
  const [estimated, setEstimated] = useState<number | null>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEstimated(destination ? Math.round(baseRate * option.multiplier) : null)
  }

  return (
    <section id="calculator" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <p className="text-center text-sm font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
          Instant Pricing
        </p>
        <h2 className="mt-3 text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
          Calculate Your Shipping Cost
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600 dark:text-gray-300">
          Pick a destination and delivery speed to get an instant estimate — no sign-up required.
        </p>

        <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10 dark:border-gray-800 dark:bg-gray-950">
          <form onSubmit={handleSubmit} noValidate>
            <div>
              <label
                htmlFor="destination"
                className="text-sm font-semibold text-gray-900 dark:text-white"
              >
                Destination
              </label>
              <select
                id="destination"
                value={destination}
                onChange={(event) => setDestination(event.target.value)}
                className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
              >
                <option value="">Select destination</option>
                {destinations.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <fieldset className="mt-8">
              <legend className="text-sm font-semibold text-gray-900 dark:text-white">
                Shipping Speed
              </legend>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {options.map((item) => (
                  <label
                    key={item.name}
                    className={cn(
                      'relative flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors',
                      option.name === item.name
                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-950'
                        : 'border-gray-200 hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700',
                    )}
                  >
                    <input
                      type="radio"
                      name="shipping-option"
                      value={item.name}
                      checked={option.name === item.name}
                      onChange={() => setOption(item)}
                      className="mt-1 h-4 w-4 accent-primary-600"
                    />
                    <span>
                      <span className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                          {item.name}
                        </span>
                        {item.popular && (
                          <span className="rounded-full bg-accent-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                            Most Popular
                          </span>
                        )}
                      </span>
                      <span className="mt-1 block text-xs text-gray-500 dark:text-gray-400">
                        {item.delivery}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary-500/25 transition-colors hover:bg-primary-700 sm:w-auto"
            >
              <CalculatorIcon className="h-5 w-5" aria-hidden="true" />
              Calculate Shipping Cost
            </button>
          </form>

          {estimated !== null && (
            <div
              role="status"
              className="mt-8 flex items-center justify-between gap-4 rounded-xl bg-gray-50 px-6 py-5 dark:bg-gray-900"
            >
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Estimated Total
                </p>
                <p className="mt-1 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  ${estimated.toFixed(2)}
                </p>
              </div>
              <span className="flex items-center gap-2 text-sm font-semibold text-status-500">
                <Check className="h-5 w-5" aria-hidden="true" />
                No hidden fees
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
