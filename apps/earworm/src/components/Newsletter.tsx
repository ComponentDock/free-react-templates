import { useState, type FormEvent } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <section className="relative py-20">
      {/* Background image */}
      <img
        src="https://picsum.photos/seed/podcast-newsletter/1920/500"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <h2 className="text-3xl font-semibold text-white">Sign Up To Newsletter</h2>
          <p className="mt-2 text-white/70">
            Subscribe to receive info on our latest news and episodes
          </p>
        </div>
        <div className="w-full max-w-md">
          {submitted ? (
            <p className="rounded bg-white/20 px-4 py-3 text-center text-sm text-white backdrop-blur-sm">
              Thanks for subscribing!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                required
                className="flex-1 rounded bg-white px-4 py-3 text-sm text-heading placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-brand"
              />
              <button
                type="submit"
                className="rounded bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
