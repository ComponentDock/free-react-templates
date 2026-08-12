import { useState, type FormEvent } from 'react'

/* Subscribe Newsletter (source: div.subscribe_newsletter — solid #04D2C8
   band, heading + copy left, email input + peach Sign Up button right).
   Valid submissions swap the form for a success message; invalid emails
   show a validation error. */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email)) {
      setError('Please enter a valid email address')
      return
    }
    setError(null)
    setSubscribed(true)
  }

  if (subscribed) {
    return (
      <section aria-label="Newsletter" className="bg-brand py-[100px]" role="region">
        <div className="mx-auto max-w-[1140px] px-[15px] text-center">
          <p role="status" className="text-[22px] font-medium text-white">
            Thanks for subscribing! Watch your inbox for new courses.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section aria-label="Newsletter" role="region" className="bg-brand py-[100px]">
      <div className="mx-auto grid max-w-[1140px] items-center gap-10 px-[15px] lg:grid-cols-2">
        <div>
          <h2 className="text-[36px] font-normal text-white">Subscribe Newsletter</h2>
          <p className="mt-4 max-w-[460px] font-serif text-[17px] leading-7 text-white/90">
            Practical tips, new courses and early access — straight to your inbox, no spam.
          </p>
        </div>
        <form onSubmit={handleSubmit} noValidate className="flex w-full flex-col gap-3 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
              if (error) setError(null)
            }}
            placeholder="Enter your email"
            aria-describedby={error ? 'newsletter-error' : undefined}
            className="h-[60px] w-full flex-1 rounded-l-[3px] border-0 bg-white px-5 text-[16px] text-ink outline-none placeholder:text-smoke sm:w-[70%]"
          />
          <button
            type="submit"
            className="h-[60px] rounded-r-[3px] bg-peach px-10 text-[16px] font-medium text-white transition-colors hover:bg-peach/90 sm:w-[30%]"
          >
            Sign Up
          </button>
        </form>
      </div>
      {error && (
        <p
          id="newsletter-error"
          role="alert"
          className="mx-auto mt-4 max-w-[1140px] px-[15px] text-[14px] text-white"
        >
          {error}
        </p>
      )}
    </section>
  )
}
