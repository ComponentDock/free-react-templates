import { useState, type FormEvent } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email.trim()) {
      setError('Please enter your email address')
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address')
      return
    }
    setError(null)
    setSubscribed(true)
  }

  return (
    <section id="newsletter" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-500 to-purple-500 p-8 sm:p-12 lg:p-16">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-white/10 blur-2xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Never Miss an Episode
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/90">
              Weekly episode summaries, behind-the-scenes notes, and exclusive bonus material
              delivered to your inbox every Friday.
            </p>

            {subscribed ? (
              <p
                role="status"
                className="mt-8 rounded-xl bg-white/15 px-6 py-4 font-semibold text-white"
              >
                Thanks for subscribing! Check your inbox to confirm your email.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="mt-8"
                aria-label="Newsletter signup"
              >
                <div className="flex flex-col gap-3 sm:flex-row">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    aria-invalid={error !== null}
                    className="flex-1 rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 text-white placeholder-white/70 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/60"
                  />
                  <button
                    type="submit"
                    className="rounded-xl bg-white px-8 py-3.5 font-semibold text-red-600 transition-colors hover:bg-gray-100"
                  >
                    Subscribe
                  </button>
                </div>
                {error && (
                  <p role="alert" className="mt-3 text-left text-sm font-medium text-white">
                    {error}
                  </p>
                )}
              </form>
            )}

            <p className="mt-4 text-sm text-white/80">
              Join 50,000+ subscribers. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
