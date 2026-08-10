import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import {
  emailLabel,
  emailPlaceholder,
  invalidEmailMessage,
  newsletterHeading,
  subscribeButtonLabel,
  successMessage,
} from '../data'

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

/** Light-gray newsletter band: email input + Subscribe button fused into
    one rounded unit (input left-rounded 5px with a #313b44 border, button
    ink #313b44 right-rounded 5px). */
export function Newsletter() {
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
    <section aria-labelledby="newsletter-heading" className="bg-soft">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h2 id="newsletter-heading" className="text-2xl font-semibold text-ink lg:text-3xl">
          {newsletterHeading}
        </h2>
        <form onSubmit={handleSubmit} noValidate className="mx-auto mt-8 flex max-w-lg">
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
            aria-describedby={error ? 'newsletter-error' : undefined}
            className="h-[50px] w-full rounded-none rounded-l-[5px] border border-ink bg-white px-4 text-sm text-accent placeholder:text-gray-400 focus:border-accent focus:outline-none"
          />
          <Button type="submit" size="lg" className="h-[50px] rounded-none rounded-r-[5px] px-6">
            {subscribeButtonLabel}
          </Button>
        </form>
        {error ? (
          <p id="newsletter-error" role="alert" className="mt-3 text-sm text-red-600">
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
