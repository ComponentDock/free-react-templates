import { useState, type FormEvent } from 'react'
import { Reveal } from './Reveal'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      setSubscribed(false)
      return
    }
    setError(null)
    setSubscribed(true)
  }

  return (
    <section id="newsletter" className="py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 to-accent-600 p-8 sm:p-12 lg:p-16">
            <div
              aria-hidden="true"
              className="absolute -top-20 -left-20 h-56 w-56 rounded-full bg-white/10 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-white/10 blur-2xl"
            />

            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-wider text-white/80">Newsletter</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Never Miss an Episode
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
                Get weekly episode summaries, behind-the-scenes content, and exclusive bonus
                material delivered to your inbox every Friday.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
                noValidate
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-white px-6 py-3 text-sm font-bold text-primary-700 transition-colors hover:bg-primary-50"
                >
                  Subscribe
                </button>
              </form>

              {error && (
                <p role="alert" className="mt-3 text-sm font-semibold text-white">
                  {error}
                </p>
              )}
              {subscribed && (
                <p role="status" className="mt-3 text-sm font-semibold text-white">
                  You&rsquo;re on the list! Check your inbox to confirm.
                </p>
              )}

              <p className="mt-6 text-xs text-white/80">
                Join 50,000+ subscribers. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
