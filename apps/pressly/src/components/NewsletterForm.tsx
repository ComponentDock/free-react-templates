import { useState } from 'react'
import {
  newsletterTitle,
  newsletterPlaceholder,
  subscribeLabel,
  emailLabel,
  invalidEmailMessage,
  successMessage,
} from '../data'

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(false)
    setSubmitted(false)

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(true)
      return
    }

    setSubmitted(true)
    setEmail('')
  }

  return (
    <div>
      <h4 className="mb-3 text-lg font-bold text-white">{newsletterTitle}</h4>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label htmlFor="footer-email" className="sr-only">
          {emailLabel}
        </label>
        <input
          id="footer-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={newsletterPlaceholder}
          className="rounded bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-accent"
          aria-invalid={error}
        />
        {error && <p className="text-xs text-red-400">{invalidEmailMessage}</p>}
        {submitted && <p className="text-xs text-green-400">{successMessage}</p>}
        <button
          type="submit"
          className="rounded bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
        >
          {subscribeLabel}
        </button>
      </form>
    </div>
  )
}
