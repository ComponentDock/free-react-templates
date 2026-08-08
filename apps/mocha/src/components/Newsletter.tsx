import { useState, type FormEvent } from 'react'
import { Mail } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  return (
    <section id="join" className="scroll-mt-20 bg-primary-50 py-20 dark:bg-gray-900 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white">
          <Mail className="h-6 w-6" aria-hidden="true" />
        </span>
        <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          Join the Club
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Get exclusive offers, brewing tips, and first access to new roasts. Plus, 10% off your
          first order.
        </p>

        {submitted ? (
          <p
            role="status"
            className="mx-auto mt-8 max-w-xl rounded-2xl border border-primary-200 bg-white p-6 font-medium text-primary-800 dark:border-gray-700 dark:bg-gray-950 dark:text-primary-200"
          >
            You're on the list! First-time 10% off code is on its way.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            aria-label="Newsletter signup"
            className="mx-auto mt-8 flex max-w-xl flex-col gap-4 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="h-12 flex-1 rounded-full border border-primary-200 bg-white px-5 text-gray-900 placeholder:text-gray-400 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500/40 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
            />
            <Button type="submit" className="rounded-full px-8">
              Subscribe
            </Button>
          </form>
        )}

        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          Join 5,000+ coffee lovers. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
