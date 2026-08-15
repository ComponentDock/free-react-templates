import { useState, type FormEvent } from 'react'
import {
  newsletterEmailLabel,
  newsletterEmailPlaceholder,
  newsletterError,
  newsletterLabel,
  newsletterSubmitLabel,
  newsletterSuccess,
  newsletterText,
  newsletterTitle,
} from '../data'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!emailPattern.test(email)) {
      setError(newsletterError)
      return
    }
    setSubmitted(true)
  }

  return (
    <section
      id="newsletter-section"
      aria-label={newsletterLabel}
      className="scroll-mt-[70px] border-t-2 border-faint bg-white pb-[99px] pt-16"
    >
      <div className="mx-auto max-w-xl px-6 text-center">
        <h2 className="text-[30px] font-medium text-ink">{newsletterTitle}</h2>
        <p className="mt-2 text-sm text-muted">{newsletterText}</p>

        {submitted ? (
          <p role="status" className="mt-12 text-lg font-semibold text-ink">
            {newsletterSuccess}
          </p>
        ) : (
          <form className="mt-[46px]" onSubmit={handleSubmit} noValidate>
            <label htmlFor="newsletter-email" className="sr-only">
              {newsletterEmailLabel}
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                setError(null)
              }}
              placeholder={newsletterEmailPlaceholder}
              className="h-10 w-full border-0 border-b-2 border-line bg-transparent text-center text-base text-ink placeholder:text-muted focus:border-ink focus:outline-none"
            />
            {error && (
              <p role="alert" className="mt-3 text-sm text-accent">
                {error}
              </p>
            )}
            <button
              type="submit"
              className="mx-auto mt-[55px] flex h-[61px] w-[178px] items-center justify-center border-2 border-ink bg-white text-base font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
            >
              {newsletterSubmitLabel}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
