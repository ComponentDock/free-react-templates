import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import { emailPlaceholder } from '../data'

const subscribeHeading = 'Newsletter Subscribe'
const emailLabel = 'Email address'
const sendLabel = 'Send'
const invalidEmailMessage = 'Please enter a valid email address.'
export const successMessage = 'Thanks for subscribing — watch your inbox.'

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

/** Light subscribe band: pill email input + dark circular send button. */
export function Subscribe() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!isValidEmail(email)) {
      setError(invalidEmailMessage)
      setSubscribed(false)
      return
    }
    setError(null)
    setSubscribed(true)
    setEmail('')
  }

  return (
    <section aria-label={subscribeHeading} className="bg-soft">
      <div className="mx-auto max-w-3xl px-4 py-14 text-center lg:px-6">
        <h2 className="text-2xl font-bold text-ink">{subscribeHeading}</h2>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto mt-7 flex max-w-lg items-center gap-2"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            {emailLabel}
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={emailPlaceholder}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? 'subscribe-error' : undefined}
            className="h-12 flex-1 rounded-full border-none bg-white px-5 text-sm text-ink placeholder:text-body focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <Button
            type="submit"
            size="lg"
            aria-label={sendLabel}
            className="h-12 w-12 shrink-0 rounded-full bg-ink px-0 hover:bg-accent"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
          </Button>
        </form>

        {error ? (
          <p id="subscribe-error" role="alert" className="mt-3 text-sm text-red-600">
            {error}
          </p>
        ) : null}
        {subscribed ? (
          <p role="status" className="mt-3 text-sm font-medium text-accent">
            {successMessage}
          </p>
        ) : null}
      </div>
    </section>
  )
}
