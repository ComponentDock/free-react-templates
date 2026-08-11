import { useState, type FormEvent } from 'react'
import {
  emailLabel,
  emailPlaceholder,
  subscribeButton,
  subscribeError,
  subscribeHeading,
  subscribeParagraph,
  subscribeSectionLabel,
  subscribeSuccess,
} from '../data'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Subscribe() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!emailPattern.test(email)) {
      setError(true)
      return
    }
    setError(false)
    setSubscribed(true)
  }

  return (
    <section aria-label={subscribeSectionLabel} className="bg-paper py-20 dark:bg-white/5">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="font-serif text-3xl font-normal text-ink dark:text-white">
          {subscribeHeading}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-ink/70 dark:text-white/70">
          {subscribeParagraph}
        </p>

        {subscribed ? (
          <p role="status" className="mt-8 font-semibold text-brand">
            {subscribeSuccess}
          </p>
        ) : (
          <form onSubmit={onSubmit} noValidate className="mt-8 flex">
            <label htmlFor="fable-email" className="sr-only">
              {emailLabel}
            </label>
            <input
              id="fable-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={emailPlaceholder}
              aria-invalid={error}
              aria-describedby={error ? 'fable-email-error' : undefined}
              className="h-16 w-full rounded-l-md border border-ink/10 bg-white px-5 text-sm outline-none transition-colors focus:border-brand dark:bg-coal dark:text-white"
            />
            <button
              type="submit"
              className="h-16 shrink-0 rounded-r-md bg-brand px-8 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-primary-700"
            >
              {subscribeButton}
            </button>
          </form>
        )}

        {error && (
          <p id="fable-email-error" role="alert" className="mt-3 text-sm text-red-600">
            {subscribeError}
          </p>
        )}
      </div>
    </section>
  )
}
