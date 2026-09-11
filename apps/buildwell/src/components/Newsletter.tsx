import { useState, type FormEvent } from 'react'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError('A valid email address is required.')
      return
    }
    setError('')
    setSubscribed(true)
  }

  return (
    <section id="newsletter" className="bg-accent py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-2xl font-bold text-brand">Subscribe to Our Newsletter</h2>
        <p className="mt-2 text-sm text-brand/80">
          Get the latest updates and news directly in your inbox.
        </p>
        {subscribed ? (
          <p className="mt-6 rounded-lg border border-brand/30 bg-white/30 px-6 py-3 text-sm font-semibold text-brand">
            Thanks for subscribing!
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              aria-invalid={Boolean(error)}
              className="w-full max-w-sm rounded-sm border border-brand/30 bg-white px-4 py-3 text-sm text-heading placeholder:text-body focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
            <button
              type="submit"
              className="w-full shrink-0 rounded-sm bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-light sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        )}
        {error ? (
          <p role="alert" className="mt-2 text-sm text-red-600">
            {error}
          </p>
        ) : null}
      </div>
    </section>
  )
}
