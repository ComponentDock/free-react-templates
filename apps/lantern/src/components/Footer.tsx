import { useState, type FormEvent } from 'react'
import { z } from 'zod'
import { Button } from '@free-react-templates/ui'
import {
  copyright,
  credit,
  footerBlurb,
  newsletterError,
  newsletterLabel,
  newsletterPlaceholder,
  newsletterSubmitLabel,
  newsletterSuccess,
  siteName,
} from '../data'

const emailSchema = z.string().email(newsletterError)

/** Dark footer (#191919): wordmark, short blurb, newsletter form with zod
    validation + success state, and a bottom bar with copyright and a
    paraphrased ColorLib credit (reference: footer.bg-191 on the Quitelight
    preview). */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = emailSchema.safeParse(email)
    if (!result.success) {
      setError(result.error.issues[0]!.message)
      setSubscribed(false)
      return
    }
    setError(null)
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="bg-coal pb-20 pt-16 text-center text-ash">
      <a href="#home" className="text-2xl font-bold tracking-wide text-white">
        {siteName}
      </a>
      <p className="mx-auto mt-4 max-w-md px-4 text-sm leading-relaxed">{footerBlurb}</p>
      <form onSubmit={handleSubmit} noValidate className="mx-auto mt-8 max-w-md px-4">
        <label htmlFor="newsletter-email" className="sr-only">
          {newsletterLabel}
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
            if (error) setError(null)
          }}
          placeholder={newsletterPlaceholder}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? 'newsletter-error' : undefined}
          className="h-[45px] w-full border border-white/40 bg-transparent px-4 text-sm text-white placeholder:text-white/40 transition-colors focus:border-brand focus:outline-none"
        />
        <Button
          type="submit"
          className="mt-4 h-[45px] w-full rounded-[2px] border border-white/40 bg-transparent text-xs font-semibold uppercase tracking-[0.2em] text-white hover:border-brand hover:bg-brand hover:text-ink"
        >
          {newsletterSubmitLabel}
        </Button>
      </form>
      {error ? (
        <p id="newsletter-error" role="alert" className="mt-3 text-xs font-medium text-tag-red">
          {error}
        </p>
      ) : null}
      {subscribed ? (
        <p role="status" className="mt-3 text-xs font-medium text-tag-green">
          {newsletterSuccess}
        </p>
      ) : null}
      <p className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-4 pt-6 text-xs">
        {copyright} ·{' '}
        <a href="https://colorlib.com" className="transition-colors hover:text-white">
          {credit}
        </a>
      </p>
    </footer>
  )
}
