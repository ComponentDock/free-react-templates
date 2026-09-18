import { useState, type FormEvent } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('success')
      setEmail('')
    } else {
      setStatus('error')
    }
  }

  return (
    <section className="py-16 bg-paper" data-testid="newsletter">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-ink mb-4 font-serif">Subscribe to our Newsletter</h2>
        <p className="text-mist mb-6 max-w-md mx-auto">
          Get the latest updates on new products and upcoming sales
        </p>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex justify-center gap-2 max-w-md mx-auto flex-wrap"
        >
          <label className="sr-only" htmlFor="newsletter-email">
            Email Address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setStatus('idle')
            }}
            placeholder="Enter your email address"
            className="flex-1 min-w-0 px-4 py-3 border border-gray-300 rounded-l focus:outline-none focus:border-brand"
          />
          <button
            type="submit"
            className="bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded-r font-medium transition-colors"
          >
            Subscribe
          </button>
        </form>
        {status === 'success' && (
          <p className="mt-4 text-brand font-medium" role="status">
            Thanks for subscribing! You will receive our latest updates.
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-500 font-medium" role="alert">
            Please enter a valid email address.
          </p>
        )}
      </div>
    </section>
  )
}
