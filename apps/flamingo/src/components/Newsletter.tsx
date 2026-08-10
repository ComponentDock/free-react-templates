import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { emailPlaceholder, newsletterHeading, subscribeLabel } from '../data'

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
    <div>
      <h3 className="mb-7 font-heading text-base font-semibold text-white">{newsletterHeading}</h3>
      <form onSubmit={handleSubmit} noValidate className="relative">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={emailPlaceholder}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? 'newsletter-error' : undefined}
          className="h-10 w-full border border-white bg-white px-5 pr-12 text-sm text-heading placeholder:text-muted focus:border-primary focus:outline-none"
        />
        <button
          type="submit"
          aria-label={subscribeLabel}
          className="absolute top-0 right-0 flex h-10 w-10 items-center justify-center bg-primary text-white transition-colors hover:bg-hover-pink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </form>
      {error && (
        <p id="newsletter-error" role="alert" className="mt-3 text-sm text-red-400">
          {error}
        </p>
      )}
      {success && (
        <p role="status" className="mt-3 text-sm text-green-400">
          Thanks for subscribing!
        </p>
      )}
    </div>
  )
}
