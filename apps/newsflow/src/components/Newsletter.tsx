import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  return (
    <section className="bg-gray-900 py-12" aria-label="Newsletter signup">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <h2 className="text-2xl font-bold text-white">Subscribe to Our Newsletter</h2>
        <p className="mt-2 text-gray-400">
          Get the latest viral stories delivered straight to your inbox.
        </p>
        {submitted ? (
          <p className="mt-4 text-brand font-semibold" role="status">
            Thanks for subscribing!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex gap-2" aria-label="Newsletter form">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand"
            />
            <button
              type="submit"
              className="rounded bg-gradient-to-r from-cta-start to-cta-end px-6 py-3 text-sm font-bold text-white hover:shadow-lg transition-shadow"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
