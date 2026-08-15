import { useState, type FormEvent } from 'react'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (!emailPattern.test(email.trim())) {
      setError('Please enter a valid email address')
      return
    }
    setError('')
    setSubscribed(true)
  }

  return (
    <section aria-label="Newsletter" className="relative bg-white">
      <div data-border-line className="mx-auto max-w-[1250px] border-t border-tint px-4" />
      <div className="mx-auto flex max-w-[1250px] flex-col items-center justify-between gap-10 px-4 py-20 lg:flex-row">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-normal text-ink md:text-4xl">Subscribe to our Newsletter</h2>
          <p className="mt-3 text-body">
            Subscribe our newsletter to get notifications about new updates, etc&hellip;
          </p>
        </div>

        {subscribed ? (
          <p role="status" className="rounded-full bg-tint px-6 py-3 text-brand">
            Thanks for subscribing — you will hear from us soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex w-full max-w-md gap-3">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              placeholder="Your Email"
              className="h-[50px] flex-1 rounded-[50px] border border-tint bg-white px-6 text-base text-ink placeholder:text-muted focus:border-brand focus:outline-none"
              onChange={(e) => {
                setEmail(e.target.value)
                setError('')
              }}
            />
            <button
              type="submit"
              className="inline-flex h-[50px] min-w-[140px] items-center justify-center rounded-[50px] bg-brand px-6 text-base font-semibold text-white transition-all hover:bg-white hover:text-brand hover:shadow-[0_6px_50px_8px_rgba(21,131,233,0.15)]"
            >
              Subscribe
            </button>
          </form>
        )}
        {error && (
          <p role="alert" className="mt-3 text-sm font-semibold text-red-600">
            {error}
          </p>
        )}
      </div>
      <div data-border-line className="mx-auto max-w-[1250px] border-t border-tint px-4" />
    </section>
  )
}
