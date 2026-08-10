import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { newsletterHeading, subscribeLabel, subscribePlaceholder } from '../data'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const value = email.trim()
    if (!value || !EMAIL_PATTERN.test(value)) {
      setError('Please enter a valid email address.')
      setSuccess(false)
      return
    }
    setError(null)
    setSuccess(true)
    setEmail('')
  }

  return (
    <div className="mx-auto max-w-xl text-center">
      <h2 className="font-display text-3xl font-bold text-ink">{newsletterHeading}</h2>
      <form onSubmit={handleSubmit} noValidate className="relative mx-auto mt-8 max-w-md">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={subscribePlaceholder}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? 'newsletter-error' : undefined}
          className="w-full border border-muted bg-white px-5 py-4 pr-14 text-sm text-ink placeholder:text-muted focus:border-primary focus:outline-none"
        />
        <button
          type="submit"
          aria-label={subscribeLabel}
          className="absolute top-0 right-0 flex h-full w-12 items-center justify-center bg-primary text-white transition-colors hover:bg-[#e0a400] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </form>
      {error && (
        <p id="newsletter-error" role="alert" className="mt-3 text-sm text-red-600">
          {error}
        </p>
      )}
      {success && (
        <p role="status" className="mt-3 text-sm text-green-700">
          Thanks for subscribing!
        </p>
      )}
    </div>
  )
}
