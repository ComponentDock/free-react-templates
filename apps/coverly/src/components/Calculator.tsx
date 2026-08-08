import { useState, type FormEvent } from 'react'
import { Calculator as CalculatorIcon, CheckCircle2 } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const coverageTypes = ['Auto', 'Home', 'Life', 'Health'] as const
const ageRanges = ['18-25', '26-35', '36-50', '51-65', '65+'] as const

const inputClasses =
  'mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white'

function estimateSavings(premium: number): number {
  // Illustrative estimate: ~20% of annual premium, rounded to the nearest $10.
  return Math.round((premium * 12 * 0.2) / 10) * 10
}

export function Calculator() {
  const [premium, setPremium] = useState('')
  const [error, setError] = useState('')
  const [savings, setSavings] = useState<number | null>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const parsed = Number(premium)
    if (!Number.isFinite(parsed) || parsed <= 0) {
      setError('Please enter your current monthly premium.')
      setSavings(null)
      return
    }
    setError('')
    setSavings(estimateSavings(parsed))
  }

  return (
    <section id="calculator" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-accent-100 px-3 py-1 text-sm font-medium text-accent-700 dark:bg-accent-900/50 dark:text-accent-300">
            Savings
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            See How Much You Could Save
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Answer two quick questions and get an estimate in seconds.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-800 dark:bg-gray-900"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="coverage-type"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Coverage Type
              </label>
              <select id="coverage-type" className={inputClasses} defaultValue="Auto">
                {coverageTypes.map((type) => (
                  <option key={type} value={type}>
                    {type} Insurance
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="current-premium"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Current Monthly Premium ($)
              </label>
              <input
                id="current-premium"
                type="number"
                min="0"
                placeholder="e.g., 150"
                value={premium}
                onChange={(event) => setPremium(event.target.value)}
                aria-invalid={Boolean(error)}
                className={inputClasses}
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="age-range"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Age Range
              </label>
              <select id="age-range" className={inputClasses} defaultValue="26-35">
                {ageRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {error ? (
            <p role="alert" className="mt-4 text-sm text-red-600 dark:text-red-400">
              {error}
            </p>
          ) : null}

          <Button
            type="submit"
            size="lg"
            className="mt-6 w-full bg-accent-600 shadow-lg shadow-accent-600/25 hover:bg-accent-700 sm:w-auto"
          >
            <CalculatorIcon className="h-5 w-5" aria-hidden="true" />
            Calculate Savings
          </Button>
        </form>

        {savings !== null ? (
          <div
            role="status"
            className="mt-6 flex flex-col items-center gap-2 rounded-2xl border border-accent-200 bg-accent-50 p-6 text-center dark:border-accent-900 dark:bg-accent-900/20"
          >
            <CheckCircle2
              className="h-8 w-8 text-accent-600 dark:text-accent-400"
              aria-hidden="true"
            />
            <p className="text-sm font-medium text-accent-700 dark:text-accent-300">
              Estimated Annual Savings
            </p>
            <p className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Up to ${savings}/year
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              *Estimates are for illustration only. For accurate quotes, contact our advisors.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  )
}
