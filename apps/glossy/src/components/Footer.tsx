import { useState } from 'react'
import type { FormEvent } from 'react'
import { Heart, Send } from 'lucide-react'
import {
  aboutBlurb,
  contactInfo,
  footerSocials,
  importantLinks,
  madeWithText,
  newsletterError,
  newsletterIntro,
  newsletterPlaceholder,
  newsletterSuccess,
  siteName,
  socialLabels,
} from '../data'
import { BrandIcon } from './BrandIcon'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Four-widget footer: About Us, Contact Info, Important Link, Newsletter. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)
  const year = new Date().getFullYear()

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
    <footer className="border-t border-borderline bg-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-4 pt-[115px] pb-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h4 className="mb-5 font-display text-xl font-semibold text-heading">About Us</h4>
          <p className="text-sm leading-6 text-body">{aboutBlurb}</p>
          <a href="#" className="mt-5 block font-display text-2xl font-bold text-heading">
            {siteName}
          </a>
        </div>
        <div>
          <h4 className="mb-5 font-display text-xl font-semibold text-heading">Contact Info</h4>
          <ul className="space-y-3 text-sm text-body">
            {contactInfo.map((row) => (
              <li key={row.label}>
                <span className="font-semibold text-heading">{row.label}: </span>
                {row.value}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-5 font-display text-xl font-semibold text-heading">Important Link</h4>
          <ul className="space-y-3 text-sm text-body">
            {importantLinks.map((link) => (
              <li key={link}>
                <a href="#" className="transition-colors hover:text-brand">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-5 font-display text-xl font-semibold text-heading">Newsletter</h4>
          <p className="text-sm leading-6 text-body">{newsletterIntro}</p>
          {subscribed ? (
            <p role="status" className="mt-5 text-sm font-semibold text-brand">
              {newsletterSuccess}
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="mt-5">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <div className="flex items-stretch">
                <input
                  id="newsletter-email"
                  type="text"
                  inputMode="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={newsletterPlaceholder}
                  className="h-[50px] w-full rounded-none border border-inputborder bg-white px-4 text-sm text-heading placeholder:text-body focus:border-brand focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="ml-2 flex items-center gap-2 rounded-full bg-brand px-5 text-sm font-semibold text-white transition-colors hover:bg-heading"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
              {error && (
                <p role="alert" className="mt-2 text-xs text-brand">
                  {error}
                </p>
              )}
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-borderline">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-4 py-5 md:flex-row">
          <p className="text-sm text-body">
            © {year} {madeWithText}{' '}
            <Heart
              className="inline h-3.5 w-3.5 text-brand"
              fill="currentColor"
              aria-hidden="true"
            />{' '}
            by{' '}
            <a href="https://colorlib.com" target="_blank" rel="noreferrer" className="text-brand">
              Colorlib
            </a>
          </p>
          <ul className="flex items-center gap-4">
            {footerSocials.map((name) => (
              <li key={name}>
                <a
                  href="#"
                  aria-label={socialLabels[name]}
                  className="text-heading transition-colors hover:text-brand"
                >
                  <BrandIcon name={name} className="h-[18px] w-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
