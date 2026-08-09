import { useState, type FormEvent } from 'react'
import { Gift, Palette, RotateCcw, Sparkles } from 'lucide-react'
import { Reveal } from './Reveal'

const features = [
  { label: 'Exclusive Offers', icon: Gift },
  { label: 'New Arrivals First', icon: Sparkles },
  { label: 'Free Returns', icon: RotateCcw },
  { label: 'Style Tips', icon: Palette },
] as const

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_RE.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError(null)
    setSubscribed(true)
  }

  return (
    <section className="relative overflow-hidden bg-gray-900 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get 20% Off Your First Order
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Sign up for our newsletter and receive exclusive offers, early access to new
            collections, and style inspiration.
          </p>
          {subscribed ? (
            <p
              role="status"
              className="mx-auto mt-8 max-w-md rounded-lg bg-primary-600/20 px-6 py-4 font-medium text-primary-200"
            >
              You&apos;re on the list! Check your inbox for 20% off.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              noValidate
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? 'newsletter-error' : undefined}
                className="h-12 flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 text-white placeholder:text-gray-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/40"
              />
              <button
                type="submit"
                className="h-12 rounded-lg bg-primary-600 px-8 font-semibold text-white transition-colors hover:bg-primary-700"
              >
                Subscribe
              </button>
            </form>
          )}
          {error && (
            <p id="newsletter-error" role="alert" className="mt-3 text-sm text-red-400">
              {error}
            </p>
          )}
          <p className="mt-6 text-xs text-gray-500">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
          <div className="mt-12 grid gap-6 border-t border-gray-800 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.label} className="flex flex-col items-center gap-2">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-600/20 text-primary-300">
                  <feature.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-gray-200">{feature.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
