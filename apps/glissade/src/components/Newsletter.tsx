import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubscribed(true)
  }

  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="max-w-md">
            <h3 className="text-xl font-semibold text-ink md:text-2xl">
              Subscribe for our Newsletter
            </h3>
            <p className="mt-2 text-sm text-mist">
              Can you imagine what we will be downloading in another decade?
            </p>
          </div>
          <div className="w-full max-w-md">
            {subscribed ? (
              <p className="rounded border border-brand-start/30 bg-brand-start/10 px-4 py-3 text-sm text-brand-start">
                Thank you for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex gap-2">
                <label htmlFor="newsletter-email" className="sr-only">
                  Your email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  aria-invalid={Boolean(error)}
                  className="flex-1 rounded-full border border-border bg-white px-5 py-2.5 text-sm text-ink placeholder:text-mist focus:border-brand-start focus:outline-none focus:ring-1 focus:ring-brand-start"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full border border-white bg-gradient-to-r from-brand-start to-brand-end px-6 py-2.5 text-sm font-medium text-white transition-all hover:from-brand-end hover:to-brand-start"
                >
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>
            )}
            {error && !subscribed ? (
              <p role="alert" className="mt-2 text-xs text-red-500">
                {error}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
