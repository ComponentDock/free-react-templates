import { useState, type FormEvent } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="mb-2 text-3xl font-medium text-gray-900">Subscribe for Our Newsletter</h2>
          <p className="mb-6 text-sm text-gray-500">We won&apos;t send any kind of spam</p>
          {submitted ? (
            <p className="text-sm text-green-600">Thank you for subscribing!</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                className="flex-1 border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-brand-500"
              />
              <button
                type="submit"
                className="bg-brand-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-600"
              >
                Get Started
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
