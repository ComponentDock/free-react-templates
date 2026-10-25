import { useEffect, useRef, useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { QUOTE } from '../content'
import { validateName, validateNeed, validatePhone } from '../lib/forms'

interface QuoteErrors {
  readonly name?: string
  readonly phone?: string
  readonly need?: string
}

/** 4 s is the reference's toast dwell. */
const TOAST_MS = 4000

function fieldClass(invalid: boolean) {
  return cn(
    'mt-1.5 block w-full rounded-lg border bg-white px-4 py-3 text-base text-ink-800 transition-colors placeholder:text-ink-300 focus:outline-none focus:ring-2 focus:ring-primary-500/20',
    invalid ? 'border-red-500 focus:border-red-500' : 'border-ink-200 focus:border-primary-500',
  )
}

/**
 * The three-field quote card. The reference's form is inert (`data-form` binds
 * to nothing), so the recreation validates locally, resets on success and never
 * touches the network.
 */
export function QuoteCard() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [need, setNeed] = useState('')
  const [errors, setErrors] = useState<QuoteErrors>({})
  const [sent, setSent] = useState(false)

  const nameRef = useRef<HTMLInputElement | null>(null)
  const phoneRef = useRef<HTMLInputElement | null>(null)
  const needRef = useRef<HTMLSelectElement | null>(null)

  useEffect(() => {
    if (!sent) return
    const id = setTimeout(() => setSent(false), TOAST_MS)
    return () => clearTimeout(id)
  }, [sent])

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const next: QuoteErrors = {
      name: validateName(name) ?? undefined,
      phone: validatePhone(phone) ?? undefined,
      need: validateNeed(need) ?? undefined,
    }
    setErrors(next)

    if (next.name !== undefined) {
      nameRef.current?.focus()
      return
    }
    if (next.phone !== undefined) {
      phoneRef.current?.focus()
      return
    }
    if (next.need !== undefined) {
      needRef.current?.focus()
      return
    }

    setName('')
    setPhone('')
    setNeed('')
    setSent(true)
  }

  return (
    <div
      id="quote"
      className="rounded-2xl border border-ink-100 bg-white p-6 shadow-md lg:p-8"
    >
      <h2 className="text-xl font-bold text-ink-800 lg:text-2xl">{QUOTE.heading}</h2>
      <p className="mt-2 text-sm text-ink-500">{QUOTE.sub}</p>

      <form onSubmit={onSubmit} noValidate className="mt-6 space-y-4">
        <div>
          <label htmlFor="quote-name" className="text-sm font-medium text-ink-700">
            {QUOTE.nameLabel}
          </label>
          <input
            ref={nameRef}
            id="quote-name"
            name="name"
            type="text"
            value={name}
            placeholder={QUOTE.namePlaceholder}
            autoComplete="name"
            aria-invalid={errors.name !== undefined}
            aria-describedby={errors.name === undefined ? undefined : 'quote-name-error'}
            onChange={(event) => setName(event.target.value)}
            onBlur={() => setErrors((prev) => ({ ...prev, name: validateName(name) ?? undefined }))}
            className={fieldClass(errors.name !== undefined)}
          />
          {errors.name !== undefined && (
            <p id="quote-name-error" className="mt-1.5 text-xs font-medium text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="quote-phone" className="text-sm font-medium text-ink-700">
            {QUOTE.phoneLabel}
          </label>
          <input
            ref={phoneRef}
            id="quote-phone"
            name="phone"
            type="tel"
            value={phone}
            placeholder={QUOTE.phonePlaceholder}
            autoComplete="tel"
            aria-invalid={errors.phone !== undefined}
            aria-describedby={errors.phone === undefined ? undefined : 'quote-phone-error'}
            onChange={(event) => setPhone(event.target.value)}
            onBlur={() =>
              setErrors((prev) => ({ ...prev, phone: validatePhone(phone) ?? undefined }))
            }
            className={fieldClass(errors.phone !== undefined)}
          />
          {errors.phone !== undefined && (
            <p id="quote-phone-error" className="mt-1.5 text-xs font-medium text-red-600">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="quote-need" className="text-sm font-medium text-ink-700">
            {QUOTE.selectLabel}
          </label>
          <select
            ref={needRef}
            id="quote-need"
            name="need"
            value={need}
            aria-invalid={errors.need !== undefined}
            aria-describedby={errors.need === undefined ? undefined : 'quote-need-error'}
            onChange={(event) => setNeed(event.target.value)}
            onBlur={() => setErrors((prev) => ({ ...prev, need: validateNeed(need) ?? undefined }))}
            className={fieldClass(errors.need !== undefined)}
          >
            <option value="">{QUOTE.selectPlaceholder}</option>
            {QUOTE.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.need !== undefined && (
            <p id="quote-need-error" className="mt-1.5 text-xs font-medium text-red-600">
              {errors.need}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-primary-600 px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
        >
          {QUOTE.submit}
        </button>
      </form>

      {sent && (
        <p
          role="status"
          className="mt-3 flex items-center gap-2 rounded-lg bg-primary-50 px-3 py-2 text-xs font-semibold text-primary-700"
        >
          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
          {QUOTE.success}
        </p>
      )}

      <p className="mt-3 text-center text-xs text-ink-400">{QUOTE.footnote}</p>
    </div>
  )
}
