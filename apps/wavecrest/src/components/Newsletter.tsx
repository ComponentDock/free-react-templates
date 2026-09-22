import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <section className="bg-navy2 py-16">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">Our Newsletter</h2>
        <p className="mt-3 text-white/70">
          Subscribe to receive exclusive offers and updates from Wavecrest.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 flex items-stretch gap-3">
          <label htmlFor="wavecrest-newsletter" className="sr-only">
            Email address
          </label>
          <input
            id="wavecrest-newsletter"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="h-12 min-w-0 flex-1 rounded-full border border-white/25 bg-transparent px-5 text-sm text-white placeholder:text-white/50 focus:border-brand focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Subscribe"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-accent-red"
          >
            <Send className="h-5 w-5" aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  )
}
