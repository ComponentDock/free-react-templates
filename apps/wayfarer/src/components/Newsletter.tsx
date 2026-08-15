import { useState } from 'react'
import {
  newsletterEmailLabel,
  newsletterSubmitLabel,
  newsletterSuccess,
  newsletterText,
  newsletterTitle,
} from '../data'

export function Newsletter() {
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <section className="relative overflow-hidden py-16">
      <img
        src="https://picsum.photos/seed/wayfarer-newsletter/1920/400"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-navy/70" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-[1400px] flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="lg:max-w-md">
          <h2 className="font-sans text-2xl font-normal text-white">{newsletterTitle}</h2>
          <p className="mt-3 font-sans text-base leading-7 text-white/80">{newsletterText}</p>
        </div>
        {subscribed ? (
          <p role="status" className="font-sans text-lg text-white">
            {newsletterSuccess}
          </p>
        ) : (
          <form
            aria-label={newsletterTitle}
            onSubmit={handleSubmit}
            className="flex w-full max-w-xl flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="wayfarer-newsletter-email" className="sr-only">
              {newsletterEmailLabel}
            </label>
            <input
              id="wayfarer-newsletter-email"
              type="email"
              required
              placeholder={newsletterEmailLabel}
              className="h-[50px] flex-1 rounded-md bg-white px-4 font-sans text-base font-light text-navy outline-none placeholder:text-muted"
            />
            <button
              type="submit"
              className="rounded-md bg-coral px-10 py-[13px] font-sans text-base font-medium capitalize text-white transition-colors hover:bg-teal"
            >
              {newsletterSubmitLabel}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
