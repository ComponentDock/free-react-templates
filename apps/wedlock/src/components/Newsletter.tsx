import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
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
    <section className="bg-night-800 py-20 text-white lg:py-24">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
          Subscribe for the updates!
        </h2>
        <p className="mt-3 text-stone-300">
          New stories, real weddings and planning tips — straight to your inbox.
        </p>

        {subscribed ? (
          <p
            role="status"
            className="mt-8 rounded border border-accent-500/40 bg-accent-500/10 px-6 py-4 text-sm font-medium text-white"
          >
            Thank you for subscribing — see you in your inbox!
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
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email address"
                className="w-full rounded border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:border-accent-500 focus:outline-none sm:max-w-xs"
              />
              <Button
                type="submit"
                className="rounded bg-accent-500 px-6 py-3 text-white hover:bg-accent-700"
              >
                Subscribe <Send className="h-4 w-4" aria-hidden="true" />
              </Button>
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
