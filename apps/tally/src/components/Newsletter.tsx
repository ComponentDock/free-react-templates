import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setEmail('')
  }

  return (
    <section className="bg-dark py-16" aria-label="Newsletter">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
        <div>
          <h2 className="text-2xl font-bold text-white md:text-3xl">Subscribe To Our Newsletter</h2>
          <p className="mt-2 text-white/60">
            Stay updated with the latest financial insights and business tips.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2">
          <label htmlFor="newsletter-email" className="sr-only">
            Email
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
          />
          <button
            type="submit"
            className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
