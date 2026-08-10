import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import { z } from 'zod'

const emailSchema = z.string().email('Please enter a valid email address.')

export function SubscribeForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = emailSchema.safeParse(email)
    if (!result.success) {
      setError(result.error.issues[0]!.message)
      return
    }
    setError(null)
    setSubscribed(true)
  }

  if (subscribed) {
    return (
      <p role="status" className="font-display text-sm font-medium text-accent">
        Thanks for subscribing!
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative">
      <label htmlFor="subscribe-email" className="sr-only">
        Email address
      </label>
      <input
        id="subscribe-email"
        type="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value)
          if (error) setError(null)
        }}
        placeholder="Your email"
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? 'subscribe-error' : undefined}
        className="w-full border-b border-subline bg-transparent pb-2 pr-10 font-display text-sm text-white outline-none transition-colors placeholder:text-white/40 focus:border-white"
      />
      {error && (
        <p id="subscribe-error" role="alert" className="mt-2 text-xs font-medium text-red-400">
          {error}
        </p>
      )}
      <button
        type="submit"
        aria-label="Subscribe"
        className="absolute top-0 right-0 text-white transition-colors hover:text-accent"
      >
        <ArrowRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </form>
  )
}
