import { useState, type FormEvent } from 'react'
import { newsletter } from '../data'

/** Full-width brand-gold newsletter band: white headline on the left, white
 *  email input and darker-gold Subscribe button on the right. */
export function Newsletter() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section aria-label="Newsletter" className="bg-brand">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 lg:flex-row">
        <h2 className="text-center text-2xl font-bold text-white lg:text-left">
          {newsletter.headline}
        </h2>
        {submitted ? (
          <p role="status" className="text-base font-medium text-white">
            {newsletter.successMessage}
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md"
            aria-label="Newsletter form"
          >
            <label htmlFor="counsely-newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="counsely-newsletter-email"
              type="email"
              required
              placeholder={newsletter.placeholder}
              className="w-full rounded-l border border-transparent bg-white px-4 py-3 text-base text-ink placeholder:text-slate-body focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-r bg-gold-dark px-5 text-base font-medium text-white transition-colors hover:bg-gold-dark/90"
            >
              {newsletter.submitLabel}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
