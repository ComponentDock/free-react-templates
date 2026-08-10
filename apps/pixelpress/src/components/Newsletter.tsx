import { useState } from 'react'
import {
  emailLabel,
  newsletterError,
  newsletterPlaceholder,
  newsletterSuccess,
  newsletterTitle,
  subscribeLabel,
} from '../data'
import { SiteButton } from './SiteButton'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Newsletter signup band on the purple gradient with email validation. */
export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_RE.test(email)) {
      setStatus('error')
      return
    }
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <section className="newsletter-section bg-[linear-gradient(90deg,#3e0f3d_0%,#1c0f3b_100%)] px-4 py-[90px] text-center">
        <p role="status" className="text-[22px] font-medium text-white">
          {newsletterSuccess}
        </p>
      </section>
    )
  }

  return (
    <section className="newsletter-section bg-[linear-gradient(90deg,#3e0f3d_0%,#1c0f3b_100%)] px-4 py-[90px] text-center">
      <h2 className="mb-12 text-[34px] font-medium text-white">{newsletterTitle}</h2>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="mx-auto flex max-w-[900px] flex-col items-center gap-8 md:flex-row md:items-end md:justify-center"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          {emailLabel}
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={newsletterPlaceholder}
          aria-label={emailLabel}
          aria-invalid={status === 'error'}
          className="w-full border-b-2 border-[#9b91a6] bg-transparent pb-3 text-[14px] font-bold text-white italic placeholder:text-white/50 focus:border-magenta focus:outline-none md:w-[560px]"
        />
        <SiteButton type="submit" withArrow={false}>
          {subscribeLabel}
        </SiteButton>
      </form>
      {status === 'error' && (
        <p role="alert" className="mt-6 text-[14px] font-medium text-[#ff9cf5]">
          {newsletterError}
        </p>
      )}
    </section>
  )
}
