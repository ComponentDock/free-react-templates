import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-xl px-4 text-center">
        <h2 className="mb-3 text-2xl font-bold text-primary-500">Subscribe to Our Newsletter</h2>
        <p className="mb-6 text-sm text-gray-500">
          Stay updated with our latest collections and exclusive offers
        </p>
        {submitted ? (
          <p className="text-sm font-medium text-green-600">Thank you for subscribing!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-0" aria-label="Newsletter signup">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required={false}
              className="flex-1 border border-gray-300 bg-white px-4 py-3 text-sm focus:border-accent focus:outline-none"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-primary-500 px-6 py-3 text-sm font-semibold uppercase text-white transition hover:bg-primary-600"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
