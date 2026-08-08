import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

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
    <section id="contact" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-light text-ink dark:text-white sm:text-4xl">
          Subscribe <span className="font-bold text-brand-dark">Us</span>
        </h2>
        <p className="mt-2 text-mist dark:text-white/60">We won&apos;t send any kind of spam</p>

        {subscribed ? (
          <p
            role="status"
            className="mt-8 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white"
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
                className="w-full rounded-full border border-black/10 bg-paper px-5 py-3 text-sm text-ink placeholder:text-mist focus:border-brand-dark focus:outline-none sm:max-w-xs dark:border-white/10 dark:bg-gray-900 dark:text-white dark:placeholder:text-white/50"
              />
              <Button
                type="submit"
                className="rounded-full bg-brand px-8 text-sm font-bold uppercase text-white hover:bg-brand-dark"
              >
                Get Started <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
            {error && (
              <p role="alert" className="mt-3 text-sm font-medium text-red-500">
                {error}
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}
