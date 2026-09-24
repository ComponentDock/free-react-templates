import { useState } from 'react'
import { Mail } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  return (
    <section
      className="bg-gradient-to-b from-dark-bg to-surface py-16"
      aria-label="Newsletter signup"
    >
      <div className="mx-auto max-w-2xl px-4 text-center">
        <h2 className="text-3xl font-bold text-white">Stay in the Loop</h2>
        <p className="mt-3 text-gray-400">
          Get the latest episodes and exclusive content delivered straight to your inbox.
        </p>

        {submitted ? (
          <p className="mt-6 font-semibold text-brand" role="status">
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
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-full border border-border bg-surface px-5 py-3 text-sm text-white placeholder-gray-500 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
            >
              <Mail size={16} />
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
