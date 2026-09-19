import { useState } from 'react'

export function SubscribeSection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4">
        <div
          className="rounded-xl bg-white p-10 text-center shadow-lg"
          style={{ boxShadow: '0 8px 30px rgba(56,74,235,0.1)' }}
        >
          <h2 className="font-heading text-2xl font-bold text-body">Get Update From Anywhere</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">
            Subscribe to our newsletter and stay updated with the latest trends and exclusive
            offers.
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
              className="w-full max-w-sm rounded-full border border-gray-300 px-5 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
            <button
              type="submit"
              className="rounded-full bg-brand px-8 py-3 font-heading text-sm font-medium text-white hover:bg-transparent hover:text-brand hover:ring-2 hover:ring-brand"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
