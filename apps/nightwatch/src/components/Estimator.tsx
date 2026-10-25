import { useState } from 'react'
import type { FormEvent } from 'react'
import { cn } from '@free-react-templates/ui'
import {
  ESTIMATE_DEFAULTS,
  ESTIMATOR,
  EXTRA_LABELS,
  EXTRA_MONTHLY,
  FACILITY_LABELS,
  FACILITY_RATE,
  FREQUENCY_FACTOR,
  FREQUENCY_LABELS,
} from '../content'
import type { ExtraLabel, FacilityLabel, FrequencyLabel } from '../content'
import { estimateText } from '../lib/estimate'

const FIELD_CLASS =
  'h-[46px] w-full rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-base leading-6 text-ink-800 outline-none transition-shadow focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30 dark:border-gray-700 dark:bg-gray-900 dark:text-white'

const LABEL_CLASS = 'block text-sm leading-5 font-semibold text-ink-700 dark:text-gray-300'

const PILL_CLASS =
  'inline-flex cursor-pointer items-center rounded-full border border-ink-200 px-4 py-2 text-sm leading-5 font-semibold text-ink-600 transition-colors peer-checked:border-ink-800 peer-checked:bg-ink-800 peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-primary-500 peer-focus-visible:ring-offset-2 dark:border-gray-700 dark:text-gray-300 dark:peer-checked:bg-primary-500 dark:peer-checked:text-ink-900'

/**
 * The hero's right-hand column: four questions in, an indicative monthly range
 * out. Arithmetic lives in `lib/estimate` so the three readings the design
 * publishes can be pinned without rendering the card.
 */
export function Estimator() {
  const [facility, setFacility] = useState<FacilityLabel>(ESTIMATE_DEFAULTS.facility)
  const [size, setSize] = useState<string>(ESTIMATE_DEFAULTS.size)
  const [frequency, setFrequency] = useState<FrequencyLabel>(ESTIMATE_DEFAULTS.frequency)
  const [extras, setExtras] = useState<ExtraLabel[]>([])
  const [submitted, setSubmitted] = useState(false)

  const estimate = estimateText({
    rate: FACILITY_RATE[facility],
    sqft: Number(size),
    factor: FREQUENCY_FACTOR[frequency],
    extras: extras.map((label) => EXTRA_MONTHLY[label]),
  })

  const toggleExtra = (label: ExtraLabel) => {
    setExtras((current) =>
      current.includes(label) ? current.filter((item) => item !== label) : [...current, label],
    )
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-6 shadow-soft sm:p-8 dark:border-gray-700 dark:bg-gray-950">
      <h2 className="text-xl leading-7 font-bold text-ink-800 dark:text-white">{ESTIMATOR.title}</h2>
      <p className="mt-1 text-sm leading-5 text-ink-500">{ESTIMATOR.subLine}</p>

      <form data-proposal-form onSubmit={submit} className="mt-6 space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="facility" className={LABEL_CLASS}>
              Type of building
            </label>
            <select
              id="facility"
              name="facility"
              className={cn(FIELD_CLASS, 'mt-1.5')}
              value={facility}
              onChange={(event) => setFacility(event.target.value as FacilityLabel)}
            >
              {FACILITY_LABELS.map((label) => (
                <option key={label} value={label}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="size" className={LABEL_CLASS}>
              {ESTIMATOR.sizeLabel}
            </label>
            <input
              id="size"
              name="size"
              type="number"
              inputMode="numeric"
              min={500}
              step={500}
              required
              className={cn(FIELD_CLASS, 'mt-1.5 font-mono')}
              value={size}
              onChange={(event) => setSize(event.target.value)}
            />
          </div>
        </div>

        <fieldset>
          <legend className={LABEL_CLASS}>How often</legend>
          <div className="mt-2.5 flex flex-wrap gap-2.5">
            {FREQUENCY_LABELS.map((label) => (
              <label key={label} className="inline-flex">
                <input
                  type="radio"
                  name="frequency"
                  value={label}
                  className="peer sr-only"
                  checked={frequency === label}
                  onChange={() => setFrequency(label)}
                />
                <span className={PILL_CLASS}>{label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className={LABEL_CLASS}>Anything on top</legend>
          <div className="mt-2.5 flex flex-wrap gap-2.5">
            {EXTRA_LABELS.map((label) => (
              <label key={label} className="inline-flex">
                <input
                  type="checkbox"
                  name="extras"
                  value={label}
                  className="peer sr-only"
                  checked={extras.includes(label)}
                  onChange={() => toggleExtra(label)}
                />
                <span className={PILL_CLASS}>{label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="rounded-xl bg-ink-50 p-5 dark:bg-gray-900">
          <p className="text-xs leading-4 font-bold tracking-[0.3px] text-ink-400 uppercase">
            {ESTIMATOR.rangeLabel}
          </p>
          <p
            data-testid="estimate"
            aria-live="polite"
            className="mt-1.5 font-mono text-3xl leading-9 font-semibold text-ink-800 dark:text-white"
          >
            {estimate}
          </p>
          <p className="mt-2 text-sm leading-5 text-ink-500">{ESTIMATOR.caveat}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={LABEL_CLASS}>
              Your name
            </label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              required
              className={cn(FIELD_CLASS, 'mt-1.5')}
            />
          </div>
          <div>
            <label htmlFor="email" className={LABEL_CLASS}>
              Work email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={cn(FIELD_CLASS, 'mt-1.5')}
            />
          </div>
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-lg bg-primary-500 px-5 py-2.5 text-sm leading-5 font-bold text-ink-900 transition-colors hover:bg-primary-400"
        >
          {ESTIMATOR.submit}
        </button>

        <p className="text-xs leading-4 text-ink-400">{ESTIMATOR.finePrint}</p>

        {submitted ? (
          <p
            role="status"
            className="rounded-lg bg-ink-800 px-4 py-3 text-sm leading-5 text-white"
          >
            {ESTIMATOR.confirmation}
          </p>
        ) : null}
      </form>
    </div>
  )
}
