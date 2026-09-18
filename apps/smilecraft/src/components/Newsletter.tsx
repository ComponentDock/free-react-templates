import { useState } from 'react'

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      aria-label="Newsletter subscription"
      className="bg-gradient-to-r from-price-blue to-price-green py-16"
    >
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Subscribe to our Newsletter</h2>
        <p className="mt-3 text-sm text-white/80">
          Stay updated with the latest dental tips, news, and exclusive offers.
        </p>

        {submitted ? (
          <p className="mt-6 text-white" role="status">
            Thank you for subscribing!
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Enter your email"
              className="rounded px-4 py-3 text-sm text-ink placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded bg-dark-brown px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-gray-800"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
