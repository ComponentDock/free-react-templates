import { useState } from 'react'
import { Send } from 'lucide-react'
import {
  aboutHeading,
  aboutLinks,
  categoriesHeading,
  categoryLinks,
  copyrightLine,
  footerLabel,
  footerNavLabel,
  footerNavLinks,
  newsletterHeading,
  newsletterLabel,
  newsletterPlaceholder,
  newsletterThanks,
  siteName,
  socialLabel,
  socialLinks,
  subscribeLabel,
} from '../data'
import { SocialIcon } from './SocialIcon'

/* Reference `footer#footer` (light/white): brand + Privacy Policy /
   Advertisement links + 13px muted copyright (col-span-5), About Us and
   Categories link columns (col-span-4), and the newsletter form with a 48px
   square orange paper-plane button + social icons (col-span-3). */
export function Footer() {
  const [subscribed, setSubscribed] = useState(false)
  const year = new Date().getFullYear()

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (event.currentTarget.checkValidity()) setSubscribed(true)
  }

  return (
    <footer aria-label={footerLabel} className="mt-10 bg-white pb-10">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <a
            href="#"
            className="font-heading text-2xl font-bold uppercase tracking-wide text-ink transition-colors hover:text-brand"
          >
            {siteName}
          </a>
          <nav aria-label={footerNavLabel} className="mt-5">
            <ul className="flex gap-6">
              {footerNavLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm font-semibold text-ink transition-colors hover:text-brand"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="mt-5 text-[13px] text-muted">
            Copyright © {year} {copyrightLine}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 lg:col-span-4">
          <div>
            <h3 className="mb-4 font-heading text-base font-bold text-ink">{aboutHeading}</h3>
            <ul className="flex flex-col gap-2">
              {aboutLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-body transition-colors hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-heading text-base font-bold text-ink">{categoriesHeading}</h3>
            <ul className="flex flex-col gap-2">
              {categoryLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-body transition-colors hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:col-span-3">
          <h3 className="mb-4 font-heading text-base font-bold text-ink">{newsletterHeading}</h3>
          {subscribed ? (
            <p role="status" className="text-sm font-semibold text-cat-1">
              {newsletterThanks}
            </p>
          ) : (
            <form onSubmit={submit}>
              <label
                htmlFor="newsletter-email"
                className="mb-2 block text-sm font-semibold text-ink"
              >
                {newsletterLabel}
              </label>
              <div className="flex gap-2">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder={newsletterPlaceholder}
                  className="h-12 min-w-0 flex-1 rounded-lg border-2 border-line bg-white px-4 font-sans font-light text-ink outline-none placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/15"
                />
                <button
                  type="submit"
                  aria-label={subscribeLabel}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-brand text-white transition-colors hover:bg-brand-dark"
                >
                  <Send className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </form>
          )}
          <ul aria-label={socialLabel} className="mt-6 flex gap-3">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-line/60 text-ink transition-colors hover:bg-brand hover:text-white"
                >
                  <SocialIcon name={social.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
