import { useState, type FormEvent } from 'react'
import { PROBLEMS, PROBLEM_PLACEHOLDER } from '../data'
import { focusFirstInvalid, quoteError, validateQuote, type QuoteErrors, type QuoteField, type QuoteValues } from '../forms'
import { Toast, useToast } from './Toast'

const FIELD_LABELS: Record<QuoteField, string> = {
  name: 'Your name',
  phone: 'Phone',
  problem: 'What is going on?',
}

const EMPTY: QuoteValues = { name: '', phone: '', problem: '' }

const INPUT =
  'mt-1.5 block w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-base text-ink-800 placeholder:text-ink-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none'

/**
 * Three fields and nothing else, because the page's claim is that three
 * questions are enough. Validation is local: errors on submit and on blur, the
 * first invalid control takes focus, and success resets the fields and raises
 * the house toast. Nothing is sent anywhere.
 */
export function QuoteCard() {
  const [values, setValues] = useState<QuoteValues>(EMPTY)
  const [errors, setErrors] = useState<QuoteErrors>({})
  const { message, notify } = useToast()

  const update = (field: QuoteField, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
  }

  const blur = (field: QuoteField) => {
    setErrors((current) => ({ ...current, [field]: quoteError(field, values[field]) }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const next = validateQuote(values)
    setErrors(next)

    focusFirstInvalid(next, (field) => {
      const control = document.getElementById(`quote-${field}`) as HTMLInputElement
      control.focus()
    })

    if (Object.keys(next).length > 0) {
      return
    }

    setValues(EMPTY)
    notify('Thanks — we will reply within the hour on weekdays.')
  }

  const messageFor = (field: QuoteField) => errors[field]

  return (
    <div
      id="quote"
      data-testid="quote-card"
      className="rounded-2xl border border-ink-100 bg-white p-6 shadow-md lg:p-8"
    >
      <h2 className="text-xl font-bold text-ink-800 lg:text-2xl">Prefer to just ask?</h2>
      <p className="mt-2 text-sm text-ink-500">Three fields. We reply within the hour on weekdays.</p>

      <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
        <div>
          <label htmlFor="quote-name" className="block text-sm font-semibold text-ink-700">
            {FIELD_LABELS.name}
          </label>
          <input
            id="quote-name"
            name="name"
            type="text"
            value={values.name}
            onChange={(event) => update('name', event.target.value)}
            onBlur={() => blur('name')}
            aria-invalid={messageFor('name') === undefined ? undefined : true}
            aria-describedby={messageFor('name') === undefined ? undefined : 'quote-name-error'}
            placeholder="Alex Morgan"
            className={INPUT}
          />
          {messageFor('name') === undefined ? null : (
            <p id="quote-name-error" className="mt-1.5 text-sm text-red-600">
              {messageFor('name')}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="quote-phone" className="block text-sm font-semibold text-ink-700">
            {FIELD_LABELS.phone}
          </label>
          <input
            id="quote-phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={(event) => update('phone', event.target.value)}
            onBlur={() => blur('phone')}
            aria-invalid={messageFor('phone') === undefined ? undefined : true}
            aria-describedby={messageFor('phone') === undefined ? undefined : 'quote-phone-error'}
            placeholder="(555) 090-0900"
            className={INPUT}
          />
          {messageFor('phone') === undefined ? null : (
            <p id="quote-phone-error" className="mt-1.5 text-sm text-red-600">
              {messageFor('phone')}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="quote-problem" className="block text-sm font-semibold text-ink-700">
            {FIELD_LABELS.problem}
          </label>
          <select
            id="quote-problem"
            name="problem"
            value={values.problem}
            onChange={(event) => update('problem', event.target.value)}
            onBlur={() => blur('problem')}
            aria-invalid={messageFor('problem') === undefined ? undefined : true}
            aria-describedby={
              messageFor('problem') === undefined ? undefined : 'quote-problem-error'
            }
            className={INPUT}
          >
            <option value="">{PROBLEM_PLACEHOLDER}</option>
            {PROBLEMS.map((problem) => (
              <option key={problem} value={problem}>
                {problem}
              </option>
            ))}
          </select>
          {messageFor('problem') === undefined ? null : (
            <p id="quote-problem-error" className="mt-1.5 text-sm text-red-600">
              {messageFor('problem')}
            </p>
          )}
        </div>

        <button type="submit" className="btn btn-primary mt-2 w-full justify-center">
          Get my answer
        </button>
      </form>

      <p className="mt-4 text-center text-xs text-ink-400">
        No obligation. We never sell your details.
      </p>

      <Toast message={message} />
    </div>
  )
}
