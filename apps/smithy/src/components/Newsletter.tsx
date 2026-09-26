import { useState, type FormEvent } from 'react'
import { cn } from '@free-react-templates/ui'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <section className="bg-gradient-to-r from-[var(--color-purple)] to-[var(--color-purple-deep)] py-16">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="mb-2 text-3xl font-bold text-white">get update from anywhere</h2>
        <p className="mb-8 text-white/80">
          Subscribe to our newsletter and stay updated with the latest news
        </p>
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-md gap-2">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={cn(
              'flex-1 rounded px-4 py-3 text-sm text-[var(--color-ink)] placeholder:text-gray-400',
            )}
            required
          />
          <button
            type="submit"
            className="rounded bg-white px-6 py-3 text-sm font-semibold text-[var(--color-purple)] transition-opacity hover:opacity-90"
          >
            Get Started
          </button>
        </form>
      </div>
    </section>
  )
}
