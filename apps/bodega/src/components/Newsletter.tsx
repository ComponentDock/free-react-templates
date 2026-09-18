import { Send } from 'lucide-react'
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
    <section className="py-12 bg-brand" aria-label="Newsletter subscription">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Send size={28} className="text-heading" />
          <h2 className="text-2xl md:text-3xl font-bold text-heading">Sign Up for a Newsletter</h2>
        </div>
        {submitted ? (
          <p className="text-heading font-medium">Thank you for subscribing!</p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 w-full px-4 py-3 text-sm border border-heading/20 bg-white focus:outline-none focus:ring-2 focus:ring-heading/40"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-heading text-white font-bold uppercase tracking-[2px] text-sm px-8 py-3 hover:bg-black transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
