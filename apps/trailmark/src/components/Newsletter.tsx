import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { IMAGES } from '../data/content'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={IMAGES.news}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-navy-deep/85" />

      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h2 className="text-3xl font-light text-white sm:text-4xl">Subscribe to our Newsletter</h2>

        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-4 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">
            Your E-mail Address
          </label>
          <input
            id="newsletter-email"
            type="email"
            className="field-dark sm:flex-1"
            placeholder="Your E-mail Address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Button
            type="submit"
            className="h-14 w-full shrink-0 rounded-none bg-brand-news px-8 text-base font-medium text-white hover:opacity-80 sm:w-[161px]"
          >
            Subscribe
          </Button>
        </form>

        {subscribed ? (
          <p role="status" className="mt-6 text-sm text-white">
            Thanks — a confirmation is on its way to {email}.
          </p>
        ) : null}
      </div>
    </section>
  )
}
