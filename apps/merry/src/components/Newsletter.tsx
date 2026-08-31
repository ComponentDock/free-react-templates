import { useState } from 'react'
import { Mail, CheckCircle } from 'lucide-react'

function validateEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) {
      setError('Please enter your email address.')
      return
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-gray-950 dark:bg-gray-950">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
        <div className="rounded-3xl border border-gray-800 bg-gray-900/50 p-8 sm:p-12 backdrop-blur">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-brand/20 p-3">
            <Mail className="h-6 w-6 text-brand" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Stay in the Loop
          </h2>
          <p className="mt-4 text-gray-400">
            Subscribe to our newsletter for the latest carousel designs, tips, and inspiration
            delivered to your inbox.
          </p>

          {submitted ? (
            <div className="mt-8 flex items-center justify-center gap-3 rounded-2xl bg-green-500/10 border border-green-500/30 p-6">
              <CheckCircle className="h-6 w-6 text-green-400" />
              <p className="text-green-300 font-medium">
                Thanks for subscribing! Check your inbox for a confirmation.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (error) setError('')
                }}
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-gray-700 bg-gray-800 px-5 py-3 text-white placeholder-gray-500 outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
                aria-describedby={error ? 'newsletter-error' : undefined}
                aria-invalid={!!error}
              />
              <button
                type="submit"
                className="rounded-xl bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Subscribe
              </button>
            </form>
          )}

          {error && (
            <p id="newsletter-error" className="mt-3 text-sm text-red-400" role="alert">
              {error}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
