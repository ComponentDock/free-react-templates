import { Mail } from 'lucide-react'
import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setEmail('')
  }

  return (
    <section className="bg-brand-dark py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-xl text-center">
          <Mail size={32} className="mx-auto mb-4 text-brand-red" />
          <h2 className="text-2xl font-extrabold uppercase text-white">Stay Connected</h2>
          <p className="mt-2 text-sm text-white/60">
            Subscribe to our newsletter and never miss the latest stories.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 flex gap-2">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 focus:border-brand-red focus:outline-none"
            />
            <button
              type="submit"
              className="bg-brand-red px-6 py-3 text-sm font-bold uppercase text-white transition-opacity hover:opacity-80"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
