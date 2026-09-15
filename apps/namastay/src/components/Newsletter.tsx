import { useState, type FormEvent } from 'react'

interface NewsletterProps {
  onSubmit?: (email: string) => void
}

export function Newsletter({ onSubmit }: NewsletterProps) {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (trimmed) {
      onSubmit?.(trimmed)
      setEmail('')
    }
  }

  return (
    <section className="bg-paper-alt py-16">
      <div className="mx-auto max-w-xl px-4 text-center">
        <h2 className="font-display mb-4 text-3xl font-bold text-ink">Subscribe</h2>
        <p className="mb-6 text-mist">
          Get the latest yoga tips and updates delivered to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <label htmlFor="newsletter-email" className="sr-only">
            Email
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 rounded border border-brand-light px-4 py-2 text-sm focus:border-brand focus:outline-none"
          />
          <button
            type="submit"
            className="rounded bg-brand px-6 py-2 text-sm font-medium text-white transition hover:bg-brand-dark"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
