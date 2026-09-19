import { useState } from 'react'
import type { FormEvent } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <section className="bg-mist py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">
              Join our list and receive exclusives
            </h2>
            <p className="mt-2 text-sm text-ink/60">
              Subscribe to our newsletter and get 20% off your first purchase.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-0">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              className="flex-1 border border-gray-300 bg-white px-4 py-3 text-sm text-ink placeholder:text-gray-400 focus:border-primary-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-primary-400 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent-400"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
