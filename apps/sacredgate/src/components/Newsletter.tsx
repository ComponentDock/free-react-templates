import { useState, type FormEvent } from 'react'
import { Mail } from 'lucide-react'

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
    <section className="bg-brand py-16">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <Mail className="mx-auto h-10 w-10 text-white" aria-hidden="true" />
        <h2 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
          Subscribe to Our Newsletter
        </h2>
        <p className="mt-3 text-sm text-white/80">
          Stay updated with the latest sermons, events, and community news.
        </p>
        {subscribed ? (
          <p className="mt-6 rounded bg-white/20 px-6 py-4 text-sm font-medium text-white">
            Thank you for subscribing!
          </p>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mt-6 flex gap-2">
            <label htmlFor="nl-email" className="sr-only">
              Email address
            </label>
            <input
              id="nl-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              aria-invalid={Boolean(error)}
              className="flex-1 rounded-none border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
            />
            <button
              type="submit"
              className="shrink-0 rounded-none bg-ink px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-ink-light"
            >
              Subscribe
            </button>
          </form>
        )}
        {error ? (
          <p role="alert" className="mt-2 text-sm text-white/90">
            {error}
          </p>
        ) : null}
      </div>
    </section>
  )
}
