import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError('A valid email address is required.')
      return
    }
    setError('')
    setSubscribed(true)
  }

  return (
    <section className="bg-brand py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <div className="text-white">
          <h4 className="text-xl font-semibold">Subscribe to our newsletter</h4>
          <p className="mt-1 text-sm text-white/80">
            Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
          </p>
        </div>
        {subscribed ? (
          <p className="rounded border border-white/40 bg-white/10 px-6 py-3 text-sm text-white">
            Thanks for subscribing!
          </p>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex gap-2">
            <label htmlFor="newsletter-email" className="sr-only">
              Your E-mail
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your E-mail"
              aria-invalid={Boolean(error)}
              className="rounded bg-white px-4 py-3 text-sm text-ink placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button
              type="submit"
              className="rounded bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
            >
              Subscribe
            </Button>
          </form>
        )}
        {error ? (
          <p role="alert" className="text-sm text-red-200">
            {error}
          </p>
        ) : null}
      </div>
    </section>
  )
}
