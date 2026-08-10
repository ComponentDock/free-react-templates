import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
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
import { SectionTitle } from './SectionTitle'

const emailSchema = z.string().email(invalidEmailMessage)

/** NEWSLETTER widget: 45px email input with a 1px accent border and a
    45×45 solid-accent paper-plane submit button; zod validation with
    per-field error and success state (reference: .nwsltr-primary-1). */
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
    <div>
      <SectionTitle>{newsletterTitle}</SectionTitle>
      <p className="mb-5 text-sm leading-relaxed text-meta">{newsletterBlurb}</p>
      <form onSubmit={handleSubmit} noValidate className="relative">
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
          className="h-[45px] w-full border border-accent bg-white pr-[65px] pl-5 text-sm text-ink outline-none transition-colors placeholder:text-ash focus:border-accent"
        />
        <button
          type="submit"
          aria-label={subscribeLabel}
          className="absolute top-0 right-0 flex h-[45px] w-[45px] items-center justify-center bg-accent text-ink transition-colors hover:bg-ink hover:text-white"
        >
          <Send className="h-5 w-5" aria-hidden="true" />
        </button>
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
