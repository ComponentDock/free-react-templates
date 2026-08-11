import { useState, type FormEvent } from 'react'
import {
  emailPlaceholder,
  newsletterTagline,
  newsletterTitle,
  subscribeLabel,
  subscribeSuccess,
} from '../data'

export function NewsletterWidget() {
  const [subscribed, setSubscribed] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <div className="bg-widget px-[30px] py-12">
      <h2 className="relative pb-3 text-xl font-bold text-ink after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-[20%] after:bg-brand">
        {newsletterTitle}
      </h2>
      <p className="mb-5 mt-5 text-center text-meta">{newsletterTagline}</p>
      {subscribed ? (
        <p className="text-center font-semibold text-brand">{subscribeSuccess}</p>
      ) : (
        <form onSubmit={onSubmit} className="flex flex-col gap-3">
          <label htmlFor="serif-newsletter-email" className="sr-only">
            {emailPlaceholder}
          </label>
          <input
            id="serif-newsletter-email"
            type="email"
            required
            placeholder={emailPlaceholder}
            className="h-[50px] w-full rounded-none border border-[rgba(112,111,135,0.2)] bg-white px-4 text-sm text-ink outline-none placeholder:text-meta-light focus:border-brand"
          />
          <button
            type="submit"
            className="bg-coal px-5 py-3 text-[13px] font-medium uppercase text-brand transition-colors hover:bg-brand hover:text-ink-deep"
          >
            {subscribeLabel}
          </button>
        </form>
      )}
    </div>
  )
}
