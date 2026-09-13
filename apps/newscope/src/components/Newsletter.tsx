import { useState } from 'react'
import { Mail } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="bg-bg-dark py-12 text-white">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <div className="mb-3 font-body text-3xl font-black">5039</div>
        <div className="mb-4 font-ui text-sm uppercase tracking-wider text-text-lighter">
          Subscribers
        </div>
        <p className="mb-6 font-body text-base text-gray-300">
          Get all latest content delivered to your email a few times a month.
        </p>
        <form onSubmit={handleSubmit} className="flex justify-center gap-2">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" size={16} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-64 rounded-sm border border-gray-600 bg-bg-darker py-2.5 pl-9 pr-3 font-ui text-sm text-white placeholder-text-light focus:border-brand-pink focus:outline-none"
              aria-label="Email address"
            />
          </div>
          <button
            type="submit"
            className="rounded-sm bg-brand-pink px-6 py-2.5 font-ui text-sm font-bold text-white transition-colors hover:bg-brand-pink/90"
          >
            {submitted ? 'Subscribed!' : 'Subscribe'}
          </button>
        </form>
        {submitted && (
          <p className="mt-4 font-ui text-sm text-brand-green">Thank you for subscribing!</p>
        )}
      </div>
    </section>
  )
}
