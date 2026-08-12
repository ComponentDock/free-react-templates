import { useState, type FormEvent } from 'react'
import { z } from 'zod'
import { SUBSCRIBE_COPY, SUBSCRIBE_HEADLINE, SUBSCRIBE_IMAGE } from '../data'

const subscribeSchema = z.object({
  email: z.string().min(1, 'Please enter your email').email('Please enter a valid email'),
})

/**
 * Subscribe — CTA section on a dark background image: white Teko headline,
 * copy, and a validated email input + gradient pill Subscribe button. An
 * invalid email blocks submission and shows a per-field error.
 */
export function Subscribe() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | undefined>(undefined)
  const [subscribed, setSubscribed] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = subscribeSchema.safeParse({ email })
    if (!result.success) {
      setError(result.error.flatten().fieldErrors.email?.[0])
      return
    }
    setError(undefined)
    setSubscribed(true)
  }

  return (
    <section
      id="subscribe"
      className="relative bg-cover bg-center py-24 lg:py-35"
      style={{ backgroundImage: `url('${SUBSCRIBE_IMAGE}')` }}
    >
      <div className="absolute inset-0 bg-night/80" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2 className="text-4xl font-bold uppercase text-white lg:text-5xl">
          {SUBSCRIBE_HEADLINE}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm text-white/80">{SUBSCRIBE_COPY}</p>
        {subscribed ? (
          <p
            role="status"
            className="mx-auto mt-10 max-w-xl rounded-full border border-white/40 bg-white/10 px-8 py-4 text-sm font-semibold text-white"
          >
            You are in! Check your inbox to confirm your trial start.
          </p>
        ) : (
          <form onSubmit={onSubmit} noValidate className="mx-auto mt-10 max-w-xl">
            <div className="flex flex-col gap-4 sm:flex-row">
              <label htmlFor="subscribe-email" className="sr-only">
                Email address
              </label>
              <input
                id="subscribe-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter Email Address"
                className="h-13 w-full flex-1 rounded-full border border-white/30 bg-white/10 px-6 text-sm text-white placeholder:text-white/60 focus:border-brand focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full border-2 border-brand bg-gradient-to-r from-brand to-brand-2 px-10 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-right"
                style={{ backgroundSize: '200% auto' }}
              >
                Subscribe
              </button>
            </div>
            {error && (
              <p role="alert" className="mt-3 text-sm font-semibold text-white">
                {error}
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}
