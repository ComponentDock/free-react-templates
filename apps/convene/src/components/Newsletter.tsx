import { useState, type FormEvent } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="relative overflow-hidden bg-ink py-16 dark:bg-gray-900">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/convene-newsletter/1600/400"
          alt=""
          className="h-full w-full object-cover opacity-15"
          aria-hidden="true"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8 rounded-lg bg-white/10 p-8 backdrop-blur-sm sm:flex-row sm:justify-between">
          <div>
            <h3 className="font-display text-2xl font-bold text-white">Subscribe Newsletter</h3>
            <p className="mt-1 text-sm text-gray-300">
              Subscribe to our newsletter and don&apos;t miss anything
            </p>
          </div>
          {submitted ? (
            <p className="text-sm font-medium text-brand">Thanks for subscribing!</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex w-full gap-2 sm:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="w-full rounded-full bg-white/20 px-5 py-3 text-sm text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-brand sm:w-72"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-gradient-to-r from-brand to-brand-pink px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
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
