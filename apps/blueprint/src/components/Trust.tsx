import { useState } from 'react'
import type { FormEvent } from 'react'

export function Trust() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <section aria-label="Trust" className="bg-gradient-to-br from-primary-400 to-accent-400">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <h2 className="font-display text-3xl font-semibold text-white">
          Already trusted by over 10,000 users
        </h2>
        <p className="mt-5 leading-relaxed text-white/90">
          Subscribe to receive Blueprint tips from instructors right to your inbox.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row"
        >
          <label htmlFor="subscribe-email" className="sr-only">
            Email address
          </label>
          <input
            id="subscribe-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your email address"
            className="w-full min-w-0 flex-1 rounded-full border-0 bg-white px-6 py-3.5 text-sm text-ink placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-white/30"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-mint-400 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-mint-500"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  )
}
