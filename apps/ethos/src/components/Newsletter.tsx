import { useState, type FormEvent } from 'react'
import { cn } from '@free-react-templates/ui'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubscribed(true)
    setEmail('')
  }

  return (
    <section id="contact" className="bg-brand-400 py-20 text-white">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold uppercase tracking-wide">Subscribe</h2>
        <p className="mt-2 text-white/85">We won&apos;t send any kind of spam</p>

        {subscribed ? (
          <p
            role="status"
            className="mt-8 rounded bg-white px-6 py-3 text-sm font-medium text-brand-400"
          >
            Thanks for subscribing — see you in your inbox!
          </p>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mt-8">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className={cn(
                  'w-full border border-white/40 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/70',
                  'focus:border-white focus:outline-none sm:max-w-xs',
                )}
              />
              <button
                type="submit"
                className={cn(
                  'bg-white px-6 py-3 text-sm font-semibold text-brand-400 shadow-sm',
                  'hover:bg-brand-50',
                )}
              >
                Subscribe
              </button>
            </div>
            {error && (
              <p role="alert" className="mt-3 text-sm font-medium text-white">
                {error}
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}
