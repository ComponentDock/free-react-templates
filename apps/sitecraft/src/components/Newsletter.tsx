import { useState } from 'react'
import type { FormEvent } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <section aria-label="Newsletter" className="relative bg-brand py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-white">Subscribe Newsletter</h2>
        <p className="mt-3 text-white/80">Subscribe our newsletter and get latest update</p>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="min-w-0 flex-1 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button
            type="submit"
            className="rounded bg-white px-8 py-3 text-sm font-semibold text-brand transition-colors hover:bg-gray-100"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  )
}
