import { useState } from 'react'
import { QUOTE } from '../content'

interface Errors {
  readonly name?: string
  readonly phone?: string
}

const FIELD_CLASS =
  'w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-base text-ink-800 transition-colors placeholder:text-ink-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white'

const LABEL_CLASS = 'block text-sm font-semibold text-ink-700 dark:text-gray-200'

/** Validates what a phone number needs to be useful, not what a formatter wants. */
function validate(name: string, phone: string): Errors {
  const errors: { name?: string; phone?: string } = {}
  if (name.trim().length < 2) {
    errors.name = QUOTE.nameError
  }
  if (phone.replace(/\D/g, '').length < 7) {
    errors.phone = QUOTE.phoneError
  }
  return errors
}

/**
 * The hero's right rail: three fields, client-side validation, an inline
 * confirmation. Nothing is posted anywhere — the design has no backend.
 */
export function QuoteForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [replacement, setReplacement] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const found = validate(name, phone)
    setErrors(found)
    setSent(Object.keys(found).length === 0)
  }

  return (
    <div
      id="quote"
      className="rounded-2xl border border-ink-100 bg-white p-6 shadow-md sm:p-8 dark:border-gray-800 dark:bg-gray-900"
    >
      <h2 className="text-xl font-bold leading-8 text-ink-800 lg:text-2xl dark:text-white">
        {QUOTE.heading}
      </h2>
      <p className="mt-2 text-base leading-6 text-ink-500 dark:text-gray-300">{QUOTE.blurb}</p>

      {sent ? (
        <p
          role="status"
          className="mt-6 rounded-lg border border-primary-200 bg-primary-50 px-4 py-3 text-base font-semibold text-primary-700"
        >
          {QUOTE.success}
        </p>
      ) : (
        <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
          <div>
            <label htmlFor="quote-name" className={LABEL_CLASS}>
              {QUOTE.nameLabel}
            </label>
            <input
              id="quote-name"
              name="name"
              type="text"
              autoComplete="name"
              value={name}
              placeholder={QUOTE.namePlaceholder}
              aria-describedby={errors.name ? 'quote-name-error' : undefined}
              aria-invalid={errors.name ? true : undefined}
              onChange={(event) => setName(event.target.value)}
              className={`mt-1.5 ${FIELD_CLASS}`}
            />
            {errors.name ? (
              <p id="quote-name-error" role="alert" className="mt-1.5 text-sm text-red-600">
                {errors.name}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="quote-phone" className={LABEL_CLASS}>
              {QUOTE.phoneLabel}
            </label>
            <input
              id="quote-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={phone}
              placeholder={QUOTE.phonePlaceholder}
              aria-describedby={errors.phone ? 'quote-phone-error' : undefined}
              aria-invalid={errors.phone ? true : undefined}
              onChange={(event) => setPhone(event.target.value)}
              className={`mt-1.5 ${FIELD_CLASS}`}
            />
            {errors.phone ? (
              <p id="quote-phone-error" role="alert" className="mt-1.5 text-sm text-red-600">
                {errors.phone}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="quote-replace" className={LABEL_CLASS}>
              {QUOTE.replaceLabel}
            </label>
            <select
              id="quote-replace"
              name="replacement"
              value={replacement}
              onChange={(event) => setReplacement(event.target.value)}
              className={`mt-1.5 ${FIELD_CLASS}`}
            >
              <option value="">{QUOTE.replacePlaceholder}</option>
              {QUOTE.replaceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-primary-600 px-5 py-3 text-base font-bold text-white transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40 focus-visible:ring-offset-2"
          >
            {QUOTE.submit}
          </button>
        </form>
      )}

      <p className="mt-4 text-sm leading-5 text-ink-400 dark:text-gray-400">{QUOTE.note}</p>
    </div>
  )
}
