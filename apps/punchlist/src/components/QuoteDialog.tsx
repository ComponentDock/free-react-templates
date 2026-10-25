import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { X } from 'lucide-react'
import { ADDRESS, EMAIL, HOURS, PHONE_DISPLAY, PHONE_HREF, QUOTE } from '../content'
import { ActionButton } from './ui'

interface QuoteDialogProps {
  readonly open: boolean
  readonly onClose: () => void
}

interface Values {
  name: string
  email: string
  subject: string
  message: string
}

const EMPTY: Values = { name: '', email: '', subject: '', message: '' }

/**
 * The real enquiry form — four labelled controls, per-field errors, a success
 * state and a sidebar with one well-formed phone link. The closing band has no
 * form of its own, so every CTA on the page opens this.
 */
export function QuoteDialog({ open, onClose }: QuoteDialogProps) {
  const [values, setValues] = useState<Values>(EMPTY)
  const [errors, setErrors] = useState<Partial<Values>>({})
  const [sent, setSent] = useState(false)
  const [wasOpen, setWasOpen] = useState(open)
  const nameRef = useRef<HTMLInputElement>(null)

  // Prop-driven reset: reopening the dialog always starts from a clean form.
  if (wasOpen !== open) {
    setWasOpen(open)
    if (open) {
      setValues(EMPTY)
      setErrors({})
      setSent(false)
    }
  }

  useEffect(() => {
    if (!open) {
      return undefined
    }
    nameRef.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) {
    return null
  }

  const update = (field: keyof Values, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const next: Partial<Values> = {}
    if (values.name.trim() === '') {
      next.name = QUOTE.nameError
    }
    if (!/.+@.+\..+/.test(values.email.trim())) {
      next.email = QUOTE.emailError
    }
    if (values.message.trim() === '') {
      next.message = QUOTE.messageError
    }
    setErrors(next)
    if (Object.keys(next).length > 0) {
      return
    }
    setSent(true)
  }

  const fieldClass =
    'mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 dark:border-gray-700 dark:bg-gray-900 dark:text-white'

  return (
    <div className="fixed inset-0 z-[90] flex items-end justify-center sm:items-center">
      <button
        type="button"
        aria-label={QUOTE.close}
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-gray-950/60"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-title"
        data-quote-dialog
        className="relative z-10 max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl bg-white p-6 shadow-2xl sm:rounded-2xl sm:p-8 dark:bg-gray-950"
      >
        <button
          type="button"
          aria-label={QUOTE.close}
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <h2 id="quote-title" className="pr-10 text-2xl font-bold text-gray-900 dark:text-white">
          {QUOTE.title}
        </h2>
        <p className="mt-2 text-sm leading-5 text-gray-600 dark:text-gray-300">{QUOTE.intro}</p>

        <div className="mt-6 grid gap-8 sm:grid-cols-[1fr_15rem]">
          {sent ? (
            <p role="status" className="rounded-lg bg-primary-50 p-5 text-sm text-primary-800">
              {QUOTE.success}
            </p>
          ) : (
            <form className="space-y-4" onSubmit={submit} noValidate>
              <div>
                <label htmlFor="quote-name" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  {QUOTE.nameLabel}
                </label>
                <input
                  id="quote-name"
                  ref={nameRef}
                  name="name"
                  value={values.name}
                  onChange={(event) => update('name', event.target.value)}
                  aria-invalid={errors.name !== undefined}
                  aria-describedby={errors.name === undefined ? undefined : 'quote-name-error'}
                  className={fieldClass}
                />
                {errors.name === undefined ? null : (
                  <p id="quote-name-error" role="alert" className="mt-1 text-xs text-primary-700">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="quote-email"
                  className="text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  {QUOTE.emailLabel}
                </label>
                <input
                  id="quote-email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={(event) => update('email', event.target.value)}
                  aria-invalid={errors.email !== undefined}
                  aria-describedby={errors.email === undefined ? undefined : 'quote-email-error'}
                  className={fieldClass}
                />
                {errors.email === undefined ? null : (
                  <p id="quote-email-error" role="alert" className="mt-1 text-xs text-primary-700">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="quote-subject"
                  className="text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  {QUOTE.subjectLabel}
                </label>
                <input
                  id="quote-subject"
                  name="subject"
                  value={values.subject}
                  onChange={(event) => update('subject', event.target.value)}
                  className={fieldClass}
                />
              </div>

              <div>
                <label
                  htmlFor="quote-message"
                  className="text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  {QUOTE.messageLabel}
                </label>
                <textarea
                  id="quote-message"
                  name="message"
                  rows={5}
                  value={values.message}
                  placeholder={QUOTE.messagePlaceholder}
                  onChange={(event) => update('message', event.target.value)}
                  aria-invalid={errors.message !== undefined}
                  aria-describedby={errors.message === undefined ? undefined : 'quote-message-error'}
                  className={fieldClass}
                />
                {errors.message === undefined ? null : (
                  <p id="quote-message-error" role="alert" className="mt-1 text-xs text-primary-700">
                    {errors.message}
                  </p>
                )}
              </div>

              <ActionButton type="submit" size="md" className="w-full">
                {QUOTE.submit}
              </ActionButton>
            </form>
          )}

          <aside className="border-t border-gray-200 pt-6 text-sm leading-6 text-gray-600 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0 dark:border-gray-800 dark:text-gray-300">
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-gray-900 dark:text-white">
                  {QUOTE.sidebar.phone}
                </dt>
                <dd>
                  <a href={PHONE_HREF} className="hover:text-primary-700">
                    {PHONE_DISPLAY}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 dark:text-white">
                  {QUOTE.sidebar.email}
                </dt>
                <dd>
                  <a href={`mailto:${EMAIL}`} className="hover:text-primary-700">
                    {EMAIL}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 dark:text-white">
                  {QUOTE.sidebar.workshop}
                </dt>
                <dd>{ADDRESS}</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 dark:text-white">
                  {QUOTE.sidebar.hours}
                </dt>
                <dd>
                  <ul>
                    {HOURS.map((row) => (
                      <li key={row.days}>
                        {row.days}: {row.hours}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </div>
  )
}
