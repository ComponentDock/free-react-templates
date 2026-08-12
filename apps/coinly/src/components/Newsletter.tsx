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
    <section className="bg-gradient-to-r from-grad-start to-grad-end py-14">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-display text-3xl font-medium text-white md:text-4xl">
            Subscribe to our Newsletter
          </h2>
          <p className="mt-3 text-white/90">
            Sign up for our weekly industry updates, insider perspectives and in-depth market
            analysis.
          </p>
        </div>
        <div className="lg:pl-10">
          {subscribed ? (
            <p
              role="status"
              className="rounded-full bg-white/15 px-6 py-4 text-center font-display text-lg text-white"
            >
              Thanks for subscribing — watch your inbox for market updates.
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 sm:flex-row">
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
                className="h-14 w-full rounded-full border-0 px-7 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="h-14 shrink-0 rounded-full bg-gradient-to-r from-grad-start to-grad-end px-9 font-display text-base font-medium text-white ring-2 ring-white/70 transition-opacity hover:opacity-90"
              >
                Get Started
              </button>
            </form>
          )}
          {error ? (
            <p role="alert" className="mt-3 text-sm text-white">
              {error}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  )
}
