import { useState, type FormEvent } from 'react'
import { Mail } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-brand-700 via-deep-800 to-deep-950 px-6 py-24"
    >
      <div className="mx-auto max-w-xl text-center">
        <Mail className="mx-auto mb-4 text-accent-yellow" size={40} />
        <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">Subscribe</h2>
        <p className="mt-4 text-white/60">
          Get the latest tracks, tour dates, and exclusive content delivered straight to your inbox.
        </p>

        {submitted ? (
          <p className="mt-8 rounded-full bg-accent-green/20 px-6 py-3 text-sm font-semibold text-accent-green">
            Thanks for subscribing!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 rounded-full bg-white/10 px-6 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent-yellow"
            />
            <button
              type="submit"
              className="rounded-full bg-accent-yellow px-8 py-3 text-sm font-bold text-deep-950 transition-colors hover:bg-accent-yellow/90"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
