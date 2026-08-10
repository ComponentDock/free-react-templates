import { useState, type FormEvent } from 'react'
import {
  newsletterIntro,
  newsletterNote,
  newsletterPlaceholder,
  newsletterSubmitLabel,
  newsletterSuccess,
  newsletterTitle,
} from '../data'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (email.trim().length === 0) return
    setSubscribed(true)
  }

  return (
    <section aria-label={newsletterTitle} className="mb-7">
      <h2 className="inline-block bg-navy px-5 py-3 text-sm font-semibold uppercase text-white">
        {newsletterTitle}
      </h2>
      <div className="mt-4 bg-white p-4">
        {subscribed ? (
          <p className="text-sm font-light text-body">{newsletterSuccess}</p>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <p className="text-sm font-light leading-relaxed text-body">{newsletterIntro}</p>
            <label htmlFor="newsletter-email" className="sr-only">
              {newsletterPlaceholder}
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={newsletterPlaceholder}
              className="mt-4 w-full border border-gray-300 bg-white px-3 py-2 text-sm font-light text-heading placeholder:text-body/60 focus:border-primary-600 focus:outline-none"
            />
            <button
              type="submit"
              className="mt-3 bg-primary-600 px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60"
            >
              {newsletterSubmitLabel}
            </button>
            <p className="mt-3 text-xs font-light text-body">{newsletterNote}</p>
          </form>
        )}
      </div>
    </section>
  )
}
