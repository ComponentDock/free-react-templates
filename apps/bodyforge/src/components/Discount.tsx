import { useState } from 'react'
import type { FormEvent } from 'react'

export function Discount() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <section
      className="relative bg-cover bg-center py-32"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/bodyforge-discount/1920/600)' }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold uppercase text-white">
          Get <span className="text-brand">25% Discount</span>
        </h2>
        <p className="mt-4 text-lg text-white/80">
          Subscribe to our newsletter and receive a 25% discount on your first membership purchase.
        </p>
        <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md gap-2">
          <label htmlFor="discount-email" className="sr-only">
            Email address
          </label>
          <input
            id="discount-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 rounded border border-white/30 bg-white/10 px-5 py-3 text-white placeholder:text-white/50 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
          <button
            type="submit"
            className="rounded bg-brand px-8 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-brand-dark"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
