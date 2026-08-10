import type { FormEvent } from 'react'
import {
  newsletterCopy,
  newsletterPlaceholder,
  newsletterTitle,
  subscribeLabel,
  imgUrl,
} from '../data'

/**
 * Sticky "Subscribe to Newsletter" sidebar card — white, soft shadow,
 * rounded image on top, email input + full-width Subscribe button.
 * Mirrors `div.floating-block` in the original.
 */
export function NewsletterCard() {
  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <aside
      aria-label="Newsletter"
      className="sticky top-5 bg-white p-5 text-center shadow-[0_15px_30px_0_rgba(0,0,0,0.05)]"
    >
      <img src={imgUrl('chronicle-newsletter', 400, 300)} alt="" className="mb-4 w-full rounded" />
      <h3 className="text-base font-bold text-ink">{newsletterTitle}</h3>
      <p className="mt-2 text-sm leading-relaxed text-meta/70">{newsletterCopy}</p>
      <form onSubmit={handleSubscribe} className="mt-4">
        <label htmlFor="newsletter-email" className="sr-only">
          Email
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder={newsletterPlaceholder}
          className="mb-2 h-[45px] w-full border-2 border-tile px-3 text-base text-ink placeholder:text-meta/70 focus:border-line focus:outline-none"
        />
        <button
          type="submit"
          className="w-full rounded bg-brand px-5 py-2 text-base text-white transition-colors hover:bg-brand-light"
        >
          {subscribeLabel}
        </button>
      </form>
    </aside>
  )
}
