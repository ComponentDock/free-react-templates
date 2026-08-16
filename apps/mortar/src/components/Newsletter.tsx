import { type FormEvent, useState } from 'react'
import { Button } from '@free-react-templates/ui'
import { newsletter } from '../data'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email)) {
      setError(newsletter.error)
      setSubmitted(false)
      return
    }
    setError(null)
    setSubmitted(true)
  }

  return (
    <section className="bg-brand py-[60px]">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-medium text-charcoal md:text-4xl">{newsletter.heading}</h2>
        <p className="mt-3 text-charcoal/80">{newsletter.subtext}</p>
        {submitted ? (
          <p
            role="status"
            className="mt-8 inline-block bg-charcoal px-6 py-4 font-medium text-white"
          >
            {newsletter.success}
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mx-auto mt-8 flex max-w-xl flex-col gap-4 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              {newsletter.emailLabel}
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={newsletter.emailLabel}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? 'newsletter-error' : undefined}
              className="w-full rounded-[4px] border-2 border-charcoal/20 bg-white px-4 py-3 text-charcoal placeholder:text-gray-500 focus:border-charcoal focus:outline-none"
            />
            <Button
              type="submit"
              className="shrink-0 rounded-[4px] bg-charcoal px-6 py-3 font-medium text-white hover:border hover:border-charcoal hover:bg-transparent hover:text-charcoal"
            >
              {newsletter.subscribeLabel}
            </Button>
          </form>
        )}
        {error && (
          <p id="newsletter-error" role="alert" className="mt-3 text-sm font-medium text-charcoal">
            {error}
          </p>
        )}
      </div>
    </section>
  )
}
