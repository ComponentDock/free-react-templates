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
    <section className="bg-paper py-16 transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-black text-brand md:text-4xl">Amortization Computation</h2>
        <p className="mt-4 text-gray-500">
          Stay updated with the latest financial insights, tips, and exclusive offers delivered
          straight to your inbox.
        </p>
        {subscribed ? (
          <p className="mt-6 rounded-lg border border-brand/40 bg-brand/10 px-6 py-4 text-brand">
            Thanks for subscribing!
          </p>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mt-6 flex gap-3">
            <label htmlFor="newsletter-email" className="sr-only">
              Enter your email
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              aria-invalid={Boolean(error)}
              className="flex-1 rounded-full border border-gray-300 px-5 py-3 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
            >
              Submit Email
            </button>
          </form>
        )}
        {error ? (
          <p role="alert" className="mt-2 text-sm text-red-500">
            {error}
          </p>
        ) : null}
      </div>
    </section>
  )
}
