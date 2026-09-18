import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section
      className="relative py-20 sm:py-28"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/civicore-newsletter/1200/400)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-ink/70" />

      <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Get Job Information Daily
        </h2>
        <p className="mt-4 text-white/80">
          Subscribe to our newsletter and never miss out on the latest opportunities.
        </p>

        {submitted ? (
          <p className="mt-6 text-lg font-semibold text-brand">Thank you for subscribing!</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              aria-label="Email address"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-[3px] px-4 py-3 text-sm text-ink outline-none"
            />
            <button
              type="submit"
              className="rounded-[3px] bg-brand px-8 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-brand-dark"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
