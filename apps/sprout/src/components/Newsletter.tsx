import { useState, type FormEvent } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section
      className="relative bg-cover bg-fixed bg-center py-20"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://picsum.photos/seed/sprout-newsletter/1920/600)',
      }}
    >
      <div className="mx-auto max-w-xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">Newsletter</h2>
        <p className="mb-8 text-gray-300">
          Subscribe to receive updates, sermons, and news from our community.
        </p>
        {submitted ? (
          <p className="text-lg font-medium text-brand">Thank you for subscribing!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-none border border-gray-300 bg-white px-4 py-3 text-sm text-ink placeholder:text-gray-400 focus:border-brand focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-none bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
