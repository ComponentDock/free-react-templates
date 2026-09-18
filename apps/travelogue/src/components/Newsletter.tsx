import { useState } from 'react'
import type { FormEvent } from 'react'
import { Mail } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <section className="bg-mist py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
          Subscribe to Our Newsletter
        </h2>
        <p className="mt-4 text-smoke">
          Stay updated with the latest travel deals, tips, and destination guides.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
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
            className="flex-1 rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-ink placeholder:text-smoke focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-400 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
