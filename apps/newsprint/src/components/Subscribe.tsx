import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'

const subscribeLabel = 'Subscribe'
export const emailPlaceholder = 'Enter your email'
const invalidEmailMessage = 'Please enter a valid email address.'
export const successMessage = 'Thank you for subscribing to the newsletter!'

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

/** Light subscribe section with an email input and accent Subscribe button. */
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
    <section aria-labelledby="subscribe-heading" id="subscribe" className="bg-soft">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center lg:px-6">
        <h2 id="subscribe-heading" className="text-2xl font-bold text-ink sm:text-3xl">
          Subscribe to newsletter
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-body">
          Get the latest stories, insights and interviews delivered straight to your inbox every
          week. No spam, unsubscribe anytime.
        </p>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={emailPlaceholder}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? 'subscribe-error' : undefined}
            className="h-12 flex-1 rounded-lg border border-line bg-white px-4 text-sm text-ink placeholder:text-body focus:border-accent focus:outline-none"
          />
          <Button
            type="submit"
            size="lg"
            className="h-12 rounded-lg border-2 border-transparent px-8 hover:border-accent hover:bg-white hover:text-accent hover:shadow-[0_15px_30px_0_rgba(0,0,0,0.2)]"
          >
            {subscribeLabel}
          </Button>
        </form>

        {error ? (
          <p id="subscribe-error" role="alert" className="mt-3 text-sm text-red-600">
            {error}
          </p>
        ) : null}
        {subscribed ? (
          <p role="status" className="mt-3 text-sm font-medium text-teal">
            {successMessage}
          </p>
        ) : null}
      </div>
    </section>
  )
}
