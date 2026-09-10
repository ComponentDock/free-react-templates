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
    <section id="contact" className="py-16 bg-mist">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <span className="text-sm font-semibold uppercase tracking-wider text-smoke">
          Stay Updated
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
          Subscribe to Our Newsletter
        </h2>
        <p className="mt-4 text-base text-smoke">
          Get the latest updates, financial tips, and industry insights delivered straight to your
          inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center"
        >
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
            className="min-w-0 flex-1 rounded border border-gray-300 bg-white px-4 py-3 text-sm text-ink placeholder:text-smoke focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded bg-primary-500 px-6 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-primary-600"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
