import { useState, type FormEvent } from 'react'
import { Mail, Send } from 'lucide-react'
import { Button, cn } from '@free-react-templates/ui'
import { Reveal } from './Reveal'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_RE.test(email.trim())) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubscribed(true)
  }

  return (
    <section id="newsletter" className="bg-gray-100 py-20 lg:py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
            <Mail className="h-4 w-4" aria-hidden="true" />
            Newsletter
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Join the Treadly Club
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Get 15% off your first order, plus early access to new drops.
          </p>

          {subscribed ? (
            <p
              role="status"
              className="mx-auto mt-8 max-w-md rounded-2xl border border-primary-200 bg-white px-6 py-5 font-medium text-primary-800 dark:border-primary-800 dark:bg-gray-950 dark:text-primary-200"
            >
              You&apos;re in! Check your inbox for your 15% welcome code.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <div className="flex-1">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? 'newsletter-email-error' : undefined}
                  placeholder="you@example.com"
                  className="h-12 w-full rounded-full border border-gray-300 bg-white px-5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/40 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
                {error && (
                  <p
                    id="newsletter-email-error"
                    role="alert"
                    className="mt-2 text-sm text-red-600 dark:text-red-400"
                  >
                    {error}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                className={cn('h-12 rounded-full px-7 text-base font-semibold')}
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Subscribe
              </Button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
