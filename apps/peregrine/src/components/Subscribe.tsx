import { useState } from 'react'
import {
  emailLabel,
  subscribeButtonLabel,
  subscribeSuccess,
  subscribeText,
  subscribeTitle,
} from '../data'

export function Subscribe() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="subscribe-section" className="relative px-6 py-24" aria-label={subscribeTitle}>
      <div aria-hidden="true" className="absolute inset-0 bg-footer" />
      <div className="relative mx-auto max-w-[1200px] text-center">
        <h2 className="text-[40px] font-bold text-white">{subscribeTitle}</h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-[1.8] text-faint">{subscribeText}</p>
        {submitted ? (
          <p role="status" className="mx-auto mt-10 max-w-xl text-lg text-brand">
            {subscribeSuccess}
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="subscribe-email" className="sr-only">
              {emailLabel}
            </label>
            <input
              id="subscribe-email"
              type="email"
              required
              placeholder={emailLabel}
              className="h-[70px] flex-1 rounded-l-md bg-white/5 px-6 text-xl text-white outline-none placeholder:text-white/40"
            />
            <button
              type="submit"
              className="h-[70px] rounded-r-md bg-brand px-8 text-base font-medium text-white transition-colors hover:bg-brand/90"
            >
              {subscribeButtonLabel}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
