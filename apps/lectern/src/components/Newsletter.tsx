import { useState } from 'react'
import type { FormEvent } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <section aria-label="Newsletter" className="bg-mist py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 sm:flex-row sm:justify-between sm:px-6">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-brand">Newsletter</h2>
          <p className="mt-2 max-w-md text-body">
            Subscribe and get the latest news and useful tips, advice and best offer.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex w-full gap-3 sm:w-auto">
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
            className="min-w-0 flex-1 rounded border border-gray-300 bg-white px-4 py-3 text-sm text-ink placeholder:text-gray-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30 sm:w-64 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-orange-600"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
