import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Subscribe — newsletter band on a photo backdrop (source `.about-area3`):
 * kicker + H2 + paragraph + rounded pill form (radius 50px) with a 60px-tall
 * input and a solid orange Subscribe button. Presentational: inline email
 * validation only, no backend.
 */
export function Subscribe() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email.trim()) {
      setError('Email is required')
      return
    }
    if (!EMAIL_PATTERN.test(email)) {
      setError('Enter a valid email')
      return
    }
    setError('')
    setSubscribed(true)
  }

  if (subscribed) {
    return (
      <section className="relative py-24 lg:py-[180px] lg:pb-[170px]">
        <img
          src="https://picsum.photos/seed/bistro-bg-subscribe/1920/800"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <span className="text-base font-medium text-brand">About Our Restaurant</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-white lg:text-[49px]">
            We provide good food for your family
          </h2>
          <p role="status" className="mt-8 rounded-full bg-white px-8 py-4 font-medium text-ink">
            Thanks for subscribing — fresh dishes are on their way to your inbox.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="relative py-24 lg:py-[180px] lg:pb-[170px]">
      <img
        src="https://picsum.photos/seed/bistro-bg-subscribe/1920/800"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <span className="text-base font-medium text-brand">About Our Restaurant</span>
        <h2 className="mt-3 font-display text-4xl font-semibold text-white lg:text-[49px]">
          We provide good food for your family
        </h2>
        <p className="mt-6 leading-relaxed text-white/80">
          Join our newsletter for seasonal menus, chef stories and exclusive table offers — fresh
          from the kitchen to your inbox.
        </p>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto mt-10 flex max-w-xl items-center gap-2 rounded-full bg-white p-2"
        >
          <label htmlFor="subscribe-email" className="sr-only">
            Email address
          </label>
          <input
            id="subscribe-email"
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-invalid={error ? true : undefined}
            className="h-[60px] min-w-0 flex-1 rounded-full bg-transparent px-6 text-ink outline-none placeholder:text-meta"
          />
          <Button
            type="submit"
            className="h-[52px] shrink-0 rounded-full bg-brand px-8 hover:bg-brand-dark"
          >
            Subscribe
          </Button>
        </form>
        {error && (
          <p role="alert" className="mt-4 text-base font-medium text-white">
            {error}
          </p>
        )}
      </div>
    </section>
  )
}
