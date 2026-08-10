import { useState } from 'react'
import type { FormEvent } from 'react'
import {
  articlesByAuthorTitle,
  authors,
  bannerCardBlurb,
  bannerCardTitle,
  imgUrl,
  mostRead,
  mostReadTitle,
  newsletterBlurb,
  newsletterError,
  newsletterPlaceholder,
  newsletterTitle,
  readMoreLabel,
  reporterRole,
  subscribeLabel,
} from '../data'
import { MetaRow } from './MetaRow'
import { SectionTitle } from './SectionTitle'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Sidebar row 2: MOST READ, ARTICLES BY AUTHOR, banner card, NEWSLETTER. */
export function SidebarTwo() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email)) {
      setError(newsletterError)
      return
    }
    setError(null)
    setSubscribed(true)
  }

  return (
    <aside aria-label="More" className="flex flex-col gap-[30px]">
      <div className="rounded-[3px] bg-white p-[30px] shadow-[1px_1px_4px_rgba(0,0,0,0.1)]">
        <SectionTitle title={mostReadTitle} />
        <ul className="flex flex-col gap-5">
          {mostRead.map((item) => (
            <li key={item.seed} className="flex gap-4">
              <img
                src={imgUrl(item.seed, 100, 100)}
                alt={item.headline}
                loading="lazy"
                className="h-[100px] w-[100px] shrink-0 object-cover"
              />
              <div>
                <a href="#" className="block">
                  <h5 className="font-heading text-sm font-semibold text-[#111] transition-colors hover:text-primary">
                    {item.headline}
                  </h5>
                </a>
                <div className="mt-2">
                  <MetaRow meta={item.meta} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-[3px] bg-white p-[30px] shadow-[1px_1px_4px_rgba(0,0,0,0.1)]">
        <SectionTitle title={articlesByAuthorTitle} />
        <ul className="flex flex-col gap-5">
          {authors.map((author) => (
            <li key={author.seed} className="flex items-center gap-4">
              <img
                src={imgUrl(author.seed, 100, 100)}
                alt={author.name}
                loading="lazy"
                className="h-[90px] w-[90px] rounded-[3px] object-cover"
              />
              <div>
                <h4 className="font-heading text-base font-semibold text-[#111]">{author.name}</h4>
                <h6 className="mt-1 text-xs text-ash">{reporterRole}</h6>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="relative flex min-h-[280px] flex-col items-center justify-center rounded-[3px] bg-cover bg-center px-8 text-center text-white"
        style={{ backgroundImage: `url(${imgUrl('herald-banner-side', 300, 300)})` }}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-black/60" />
        <div className="relative">
          <h3 className="font-heading text-xl font-bold">{bannerCardTitle}</h3>
          <p className="mt-3 text-xs leading-5 text-white/85">{bannerCardBlurb}</p>
          <a
            href="#"
            className="mt-5 inline-block border border-white bg-white px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            {readMoreLabel}
          </a>
        </div>
      </div>

      <div className="rounded-[3px] bg-white p-[30px] text-center shadow-[1px_1px_4px_rgba(0,0,0,0.1)]">
        <h4 className="font-heading text-lg font-semibold text-[#111]">{newsletterTitle}</h4>
        <p className="mt-2 text-xs text-ash">{newsletterBlurb}</p>
        <img
          src={imgUrl('herald-newsletter', 100, 150)}
          alt={newsletterTitle}
          loading="lazy"
          className="mx-auto mt-4 max-w-[100px] object-cover"
        />
        {subscribed ? (
          <p role="status" className="mt-5 text-sm font-semibold text-primary">
            Thank you for subscribing!
          </p>
        ) : (
          <form onSubmit={handleSubscribe} className="mx-auto mt-5 max-w-[400px]">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="text"
              inputMode="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={newsletterPlaceholder}
              className="h-[35px] w-full rounded-[3px] border border-[#ccc] px-4 text-xs text-[#111] placeholder:text-ash focus:border-primary focus:outline-none"
            />
            <button
              type="submit"
              className="mt-4 h-[30px] w-full rounded-[2px] border border-primary bg-primary px-4 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-primary"
            >
              {subscribeLabel}
            </button>
            {error && (
              <p role="alert" className="mt-2 text-xs text-accent">
                {error}
              </p>
            )}
          </form>
        )}
      </div>
    </aside>
  )
}
