import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section id="contact" className="bg-gray-100 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div>
            <h4 className="mb-1 text-xl font-bold text-gray-900">Newsletter</h4>
            <p className="text-sm text-gray-500">
              Subscribe to our newsletter and get 20% off your first purchase
            </p>
          </div>
          <div>
            {submitted ? (
              <p className="text-sm font-medium text-green-600">Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <label htmlFor="newsletter-email" className="sr-only">
                  Your email
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="rounded border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:border-coral-500 focus:outline-none focus:ring-1 focus:ring-coral-500"
                />
                <button
                  type="submit"
                  className="rounded bg-coral-500 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-coral-400"
                >
                  subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
