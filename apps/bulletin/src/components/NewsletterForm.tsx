import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { z } from 'zod'
import {
  emailLabel,
  emailPlaceholder,
  invalidEmailMessage,
  newsletterBlurb,
  newsletterTitle,
  subscribeLabel,
  successMessage,
} from '../data'

const emailSchema = z.string().email(invalidEmailMessage)

/** Newsletter widget: full-width field input, 54px square accent
    subscribe button, zod validation with per-field error and success
    state (reference: .newsletter-widget + .newsbox-btn w-100). */
export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = emailSchema.safeParse(email)
    if (!result.success) {
      setError(result.error.issues[0]!.message)
      setSubscribed(false)
      return
    }
    setError(null)
    setSubscribed(true)
    setEmail('')
  }

  return (
    <div className="bg-mist p-8">
      <h4 className="text-lg font-bold">{newsletterTitle}</h4>
      <p className="mt-3 mb-5 text-sm leading-relaxed text-meta">{newsletterBlurb}</p>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="newsletter-email" className="sr-only">
          {emailLabel}
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
            if (error) setError(null)
          }}
          placeholder={emailPlaceholder}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? 'newsletter-error' : undefined}
          className="h-[54px] w-full bg-field px-5 text-center text-xs text-ink italic outline-none placeholder:text-meta focus:border focus:border-accent"
        />
        <Button type="submit" className="mt-4 h-[54px] w-full rounded-none text-lg font-semibold">
          {subscribeLabel}
        </Button>
      </form>
      {error ? (
        <p id="newsletter-error" role="alert" className="mt-3 text-xs text-red-600">
          {error}
        </p>
      ) : null}
      {subscribed ? (
        <p role="status" className="mt-3 text-xs font-medium text-accent">
          {successMessage}
        </p>
      ) : null}
    </div>
  )
}
