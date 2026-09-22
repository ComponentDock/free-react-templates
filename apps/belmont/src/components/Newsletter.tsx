import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setEmail('')
    }
  }

  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">Our Newsletter</h2>
          <p className="mt-3 text-mist">
            Subscribe to receive exclusive offers, travel tips, and updates about our luxury resort.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 rounded border border-gray-300 px-4 py-3 text-sm text-ink placeholder-light focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          />
          <button
            type="submit"
            className="rounded bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
