import { useState, type FormEvent } from 'react'
import { NEWSLETTER } from '../data/content'
import { fieldErrors, newsletterSchema } from '../lib/forms'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | undefined>(undefined)
  const [subscribed, setSubscribed] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const parsed = newsletterSchema.safeParse({ email })
    if (!parsed.success) {
      setError(fieldErrors<'email'>(parsed.error).email)
      setSubscribed(false)
      return
    }
    setError(undefined)
    setSubscribed(true)
  }

  return (
    <section id="newsletter" aria-label="Newsletter" className="newsletter-band">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="section-heading section-heading-light">{NEWSLETTER.title}</h2>
        <p className="mx-auto max-w-3xl text-white/90">{NEWSLETTER.paragraph}</p>

        <form onSubmit={onSubmit} noValidate className="mx-auto mt-8 max-w-2xl">
          <div className="newsletter-form">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              placeholder={NEWSLETTER.placeholder}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-submit">
              {NEWSLETTER.submit}
            </button>
          </div>
          {error ? (
            <p role="alert" className="mt-3 text-sm text-white">
              {error}
            </p>
          ) : null}
          {subscribed ? (
            <p role="status" className="mt-3 text-sm text-white">
              {NEWSLETTER.success}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}
