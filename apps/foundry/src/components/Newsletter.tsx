import { useState } from 'react'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [done, setDone] = useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!EMAIL_RE.test(email)) {
      setError(true)
      setDone(false)
      return
    }
    setError(false)
    setDone(true)
    setEmail('')
  }

  return (
    <section id="newsletter" className="relative bg-coal py-20">
      <img
        src="https://picsum.photos/seed/foundry-newsletter/1600/500"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-coal/70" />

      <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="font-display text-4xl font-bold uppercase leading-tight text-white">
          Sign up for a Newsletter
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-white/70">
          Get the latest project news, milestones, and insights from our construction crews straight
          to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4 sm:flex-row" noValidate>
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
              setDone(false)
            }}
            placeholder="Enter your email"
            className="w-full flex-1 border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-brand focus:outline-none"
          />
          <button
            type="submit"
            className="bg-brand px-8 py-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-brand-dark"
          >
            Subscribe
          </button>
        </form>

        {error && (
          <p role="alert" className="mt-4 text-sm font-semibold text-red-300">
            Please enter a valid email address.
          </p>
        )}
        {done && (
          <p role="status" className="mt-4 text-sm font-semibold text-brand">
            You have subscribed successfully!
          </p>
        )}
      </div>
    </section>
  )
}
