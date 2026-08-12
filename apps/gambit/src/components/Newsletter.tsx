import { useState } from 'react'
import type { FormEvent } from 'react'
import { NEWSLETTER_BLURB, NEWSLETTER_HEADING } from '../data'

/* Newsletter recreated from the source's newsletter_area: a cyan→mint
   gradient band with a dark #22195e heading, a "no spam" blurb, and a cyan
   pill email input with the Subscribe button embedded on the right; a
   valid submit swaps to a success state (no backend required). */

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="newsletter" className="bg-gradient-to-r from-brand to-brand-2 py-[68px]">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        {submitted ? (
          <p role="status" className="font-display text-3xl font-bold text-purple-ink">
            You're in! Check your inbox to confirm your subscription.
          </p>
        ) : (
          <>
            <h2 className="font-display text-4xl font-bold text-purple-ink">
              {NEWSLETTER_HEADING}
            </h2>
            <p className="mt-2 text-purple-ink/80">{NEWSLETTER_BLURB}</p>
            <form onSubmit={handleSubmit} className="relative mx-auto mt-8 max-w-xl">
              <label htmlFor="gambit-email" className="sr-only">
                Email address
              </label>
              <input
                id="gambit-email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-full bg-brand py-[13px] pl-6 pr-36 text-white placeholder-white/70 outline-none ring-1 ring-white/40 focus:ring-2 focus:ring-purple-ink"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-deep px-8 text-xs font-medium uppercase tracking-wider text-white transition-colors hover:bg-purple-ink"
                style={{ lineHeight: '38px' }}
              >
                Subscribe
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  )
}
