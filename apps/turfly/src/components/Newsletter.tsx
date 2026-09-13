import { useState } from 'react'
import type { FormEvent } from 'react'
import { Send } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <section aria-labelledby="newsletter-heading" className="bg-primary-400 py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:flex-row sm:text-left sm:px-6">
        <div className="sm:flex-1">
          <h2 id="newsletter-heading" className="text-2xl font-bold text-white">
            Subscribe to our Newsletter
          </h2>
          <p className="mt-2 text-sm text-primary-100">
            Get seasonal lawn care tips and exclusive offers delivered to your inbox.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2 sm:justify-end">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your email address"
            className="min-w-0 flex-1 rounded bg-white px-4 py-3 text-sm text-ink placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-400"
          />
          <button
            type="submit"
            className="inline-flex shrink-0 items-center gap-2 rounded bg-charcoal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
