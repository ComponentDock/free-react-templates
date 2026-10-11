import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
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
    <section id="newsletter" className="section-gap bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:pl-[50%]">
        <h1 className="section-title">
          {NEWSLETTER.titleFirst}
          <br />
          {NEWSLETTER.titleSecond}
          <br />
          {NEWSLETTER.titleThird}
        </h1>
        {NEWSLETTER.paragraphs.map((paragraph) => (
          <p key={paragraph} className="mb-6 max-w-lg">
            {paragraph}
          </p>
        ))}

        <form onSubmit={onSubmit} noValidate className="mt-8 max-w-xl">
          <div className="flex">
            <label htmlFor="newsletter-email" className="sr-only">
              {NEWSLETTER.inputPlaceholder}
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              placeholder={NEWSLETTER.inputPlaceholder}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="newsletter-input w-[65%]"
            />
            <Button type="submit" className="main-btn main-btn-arrowless">
              {NEWSLETTER.submit}
              <span className="btn-arrow" aria-hidden="true">
                →
              </span>
            </Button>
          </div>
          {error ? (
            <p role="alert" className="mt-3 text-sm text-gold">
              {error}
            </p>
          ) : null}
          {subscribed ? (
            <p role="status" className="mt-3 text-sm text-azure">
              Thanks for subscribing! Please check your inbox.
            </p>
          ) : null}
        </form>

        <p className="mt-4 max-w-xl text-sm">{NEWSLETTER.note}</p>
      </div>
    </section>
  )
}
