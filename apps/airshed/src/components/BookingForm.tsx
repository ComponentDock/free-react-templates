import { useState } from 'react'
import { BOOKING } from '../content'

interface Errors {
  readonly name?: string
  readonly phone?: string
  readonly problem?: string
}

const FIELD_CLASS =
  'w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-base text-ink-800 transition-colors placeholder:text-ink-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white'

const LABEL_CLASS = 'block text-sm font-semibold text-ink-700 dark:text-gray-200'

/** Three fields, judged by what makes a callback possible. */
export function validateBooking(name: string, phone: string, problem: string): Errors {
  const errors: { name?: string; phone?: string; problem?: string } = {}
  if (name.trim().length < 2) {
    errors.name = BOOKING.nameError
  }
  if (phone.replace(/\D/g, '').length < 7) {
    errors.phone = BOOKING.phoneError
  }
  if (problem === '') {
    errors.problem = BOOKING.problemError
  }
  return errors
}

/**
 * The hero's right rail: name, phone and a problem select, validated in place,
 * confirmed in place. Nothing is posted anywhere — the design has no backend.
 */
export function BookingForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [problem, setProblem] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const found = validateBooking(name, phone, problem)
    setErrors(found)
    const ok = Object.keys(found).length === 0
    setSent(ok)
    if (ok) {
      setName('')
      setPhone('')
      setProblem('')
    }
  }

  return (
    <div
      id="hero-form"
      className="rounded-2xl border border-ink-100 bg-white p-6 shadow-md sm:p-8 dark:border-gray-800 dark:bg-gray-900"
    >
      <h2 className="text-xl font-bold leading-8 text-ink-800 lg:text-2xl dark:text-white">
        {BOOKING.heading}
      </h2>
      <p className="mt-2 text-sm leading-5 text-ink-500 dark:text-gray-300">{BOOKING.blurb}</p>

      {sent ? (
        <p
          role="status"
          className="mt-6 rounded-lg border border-primary-200 bg-primary-50 px-4 py-3 text-base font-semibold text-primary-700"
        >
          {BOOKING.success}
        </p>
      ) : (
        <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
          <div>
            <label htmlFor="booking-name" className={LABEL_CLASS}>
              {BOOKING.nameLabel}
            </label>
            <input
              id="booking-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={name}
              placeholder={BOOKING.namePlaceholder}
              aria-describedby={errors.name ? 'booking-name-error' : undefined}
              aria-invalid={errors.name ? true : undefined}
              onChange={(event) => setName(event.target.value)}
              className={`mt-1.5 ${FIELD_CLASS}`}
            />
            {errors.name ? (
              <p id="booking-name-error" role="alert" className="mt-1.5 text-sm text-red-600">
                {errors.name}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="booking-phone" className={LABEL_CLASS}>
              {BOOKING.phoneLabel}
            </label>
            <input
              id="booking-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              value={phone}
              placeholder={BOOKING.phonePlaceholder}
              aria-describedby={errors.phone ? 'booking-phone-error' : undefined}
              aria-invalid={errors.phone ? true : undefined}
              onChange={(event) => setPhone(event.target.value)}
              className={`mt-1.5 ${FIELD_CLASS}`}
            />
            {errors.phone ? (
              <p id="booking-phone-error" role="alert" className="mt-1.5 text-sm text-red-600">
                {errors.phone}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="booking-problem" className={LABEL_CLASS}>
              {BOOKING.problemLabel}
            </label>
            <select
              id="booking-problem"
              name="problem"
              required
              value={problem}
              aria-describedby={errors.problem ? 'booking-problem-error' : undefined}
              aria-invalid={errors.problem ? true : undefined}
              onChange={(event) => setProblem(event.target.value)}
              className={`mt-1.5 ${FIELD_CLASS}`}
            >
              <option value="">{BOOKING.problemPlaceholder}</option>
              {BOOKING.problemOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.problem ? (
              <p id="booking-problem-error" role="alert" className="mt-1.5 text-sm text-red-600">
                {errors.problem}
              </p>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-primary-600 px-5 py-3 text-base font-bold text-white transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40 focus-visible:ring-offset-2"
          >
            {BOOKING.submit}
          </button>
        </form>
      )}

      <p className="mt-4 text-center text-xs leading-4 text-ink-500 dark:text-gray-400">
        {BOOKING.note}
      </p>
    </div>
  )
}
