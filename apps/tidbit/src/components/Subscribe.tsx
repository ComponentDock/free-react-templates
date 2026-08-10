import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import {
  emailLabel,
  emailPlaceholder,
  invalidEmailMessage,
  subscribeButtonLabel,
  subscribeDescription,
  subscribeHeading,
  successMessage,
} from '../data'

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

/** Centered newsletter form: email input + square accent Subscribe button. */
export function Subscribe() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!isValidEmail(email)) {
      setError(invalidEmailMessage)
      setSubscribed(false)
      return
    }
    setError(null)
    setSubscribed(true)
    setEmail('')
  }

  return (
    <section aria-labelledby="subscribe-heading" className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-14 text-center lg:px-6 lg:py-20">
        <h2 id="subscribe-heading" className="text-xl font-bold text-ink sm:text-2xl">
          {subscribeHeading}
        </h2>
        <p className="mx-auto mb-8 mt-4 max-w-xl text-sm leading-relaxed text-body">
          {subscribeDescription}
        </p>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            {emailLabel}
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={emailPlaceholder}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? 'subscribe-error' : undefined}
            className="h-12 flex-1 rounded-none border border-gray-300 bg-white px-4 text-sm text-ink placeholder:text-meta focus:border-accent focus:outline-none"
          />
          <Button type="submit" size="lg" className="h-12 rounded-none px-8">
            {subscribeButtonLabel}
          </Button>
        </form>
        {error ? (
          <p id="subscribe-error" role="alert" className="mt-3 text-sm text-red-600">
            {error}
          </p>
        ) : null}
        {subscribed ? (
          <p role="status" className="mt-3 text-sm font-medium text-accent">
            {successMessage}
          </p>
        ) : null}
      </div>
    </section>
  )
}
