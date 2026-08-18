import { useState } from 'react'
import { NEWSLETTER } from '../data'
import { goldSolidButton } from './buttonClasses'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Status = 'idle' | 'error' | 'success'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email)) {
      setStatus('error')
      return
    }
    setStatus('success')
  }

  return (
    <section
      aria-labelledby="newsletter-heading"
      className="flex flex-col items-center bg-navy-ink md:flex-row"
    >
      <div className="w-full md:w-1/2">
        <img
          src={NEWSLETTER.image}
          alt={NEWSLETTER.imageAlt}
          className="h-[300px] w-full object-cover md:h-[520px]"
        />
      </div>
      <div className="w-full px-4 py-16 md:w-1/2 md:px-16 md:py-24">
        <h2 id="newsletter-heading" className="font-display text-[36px] font-semibold text-white">
          {NEWSLETTER.heading}
        </h2>
        <p className="mt-4 max-w-md text-base font-light leading-relaxed text-[#CCD2E1]">
          {NEWSLETTER.subtitle}
        </p>

        {status === 'success' ? (
          <p role="status" className="mt-8 text-lg font-medium text-gold">
            Thanks for subscribing! Watch your inbox for the next market brief.
          </p>
        ) : (
          <form
            className="mt-8 flex max-w-lg flex-col gap-3 sm:flex-row"
            onSubmit={submit}
            noValidate
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                if (status === 'error') setStatus('idle')
              }}
              placeholder={NEWSLETTER.placeholder}
              aria-invalid={status === 'error'}
              aria-describedby={status === 'error' ? 'newsletter-error' : undefined}
              className="w-full rounded-none border border-white/40 bg-transparent px-4 py-[17px] text-white placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            />
            <button type="submit" className={goldSolidButton}>
              {NEWSLETTER.button}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p id="newsletter-error" role="alert" className="mt-3 text-sm font-medium text-gold">
            Please enter a valid email address.
          </p>
        )}
      </div>
    </section>
  )
}
