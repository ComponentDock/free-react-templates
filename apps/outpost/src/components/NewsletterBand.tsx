import { useState, type FormEvent } from 'react'
import { validateEmail } from '../lib/newsletter'

/* Dark purple subscribe band: illustration on the left, white serif heading
   and a berry email input with the gradient button overlapping its right
   edge. Validated client-side; there is no remote subscribe call. */
export function NewsletterBand() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const message = validateEmail(email)
    if (message) {
      setError(message)
      setSubscribed(false)
      return
    }
    setError(null)
    setSubscribed(true)
  }

  return (
    <section id="newsletter" className="relative overflow-hidden py-[120px] text-white">
      <div aria-hidden="true" className="brand-gradient absolute inset-0" />
      <div aria-hidden="true" className="absolute inset-0 bg-[#2a0b4d]/60" />

      <div className="relative mx-auto grid max-w-[1140px] items-center gap-12 px-4 lg:grid-cols-12">
        <div className="hidden lg:col-span-5 lg:block">
          <img
            src="https://picsum.photos/seed/outpost-newsletter/560/420"
            alt="Illustration of an Outpost departure board"
            loading="lazy"
            className="w-full object-cover"
          />
        </div>

        <div className="lg:col-span-7">
          <h1 className="font-display text-[36px] font-bold text-white lg:text-[48px]">
            Subscribe for our Newsletter
          </h1>
          <p className="mt-5 text-white/80">
            One email a month: new routes, shoulder-season dates and the trips that filled fastest.
          </p>

          <form
            onSubmit={onSubmit}
            noValidate
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-start"
          >
            <div className="w-full sm:min-w-[390px]">
              <label htmlFor="outpost-newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="outpost-newsletter-email"
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter Email Address"
                className="h-[60px] w-full rounded-none bg-berry px-5 text-white placeholder:text-white/80 outline-none"
              />
              {error ? (
                <p role="alert" className="mt-2 text-[13px] text-white">
                  {error}
                </p>
              ) : null}
              {subscribed ? (
                <p role="status" className="mt-2 text-[13px] text-white">
                  Thanks! You are on the list — watch for the next dispatch.
                </p>
              ) : null}
            </div>
            <button
              type="submit"
              className="brand-gradient h-[60px] shrink-0 rounded-none px-8 text-[12px] font-semibold uppercase tracking-[1px] text-white sm:-ml-[45px] sm:mt-[10px] sm:h-[40px]"
            >
              subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
