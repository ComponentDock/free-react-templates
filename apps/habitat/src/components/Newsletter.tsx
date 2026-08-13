import { useState, type FormEvent } from 'react'
import { Mail } from 'lucide-react'
import { z } from 'zod'
import { newsletter } from '../data'

const emailSchema = z.string().trim().email('Enter a valid email address')

/* Reference: section.newslatter-section — #30304e band with a mail icon,
   the white two-line heading, an email input (radius 4px) and a green
   "Subscribe!" button; zod-validated with error + success states. */
export function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = emailSchema.safeParse(email)
    if (!result.success) {
      setError(result.error.issues[0]!.message)
      setSubscribed(false)
      return
    }
    setError('')
    setSubscribed(true)
    setEmail('')
  }

  return (
    <section aria-label="Newsletter" className="bg-navy py-20 text-center lg:py-24">
      <div className="mx-auto max-w-2xl px-4 lg:px-8">
        <Mail size={36} aria-hidden="true" className="mx-auto text-white" />
        <h2 className="mt-6 text-[24px] leading-[1.25] text-white">{newsletter.heading}</h2>
        {subscribed && (
          <p role="status" className="mt-5 text-[15px] font-medium text-brand">
            {newsletter.successMessage}
          </p>
        )}
        <form onSubmit={handleSubscribe} noValidate className="mt-8 flex justify-center">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
              if (error) setError('')
            }}
            placeholder={newsletter.placeholder}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? 'newsletter-error' : undefined}
            className="h-[51px] w-full max-w-[385px] rounded-l px-5 text-[15px] font-light text-muted outline-none placeholder:text-muted/60"
          />
          <button
            type="submit"
            className="h-[51px] rounded-r bg-brand px-8 text-[16px] font-medium text-white transition-colors hover:bg-brand-dark"
          >
            {newsletter.subscribeLabel}
          </button>
        </form>
        {error && (
          <p id="newsletter-error" role="alert" className="mt-4 text-[14px] text-red-400">
            {error}
          </p>
        )}
      </div>
    </section>
  )
}
