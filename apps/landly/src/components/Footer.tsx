import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import {
  copyrightLead,
  creditHref,
  creditLabel,
  footerAboutBody,
  footerAboutHeading,
  footerLinks,
  newsletterCta,
  newsletterError,
  newsletterHeading,
  newsletterLabel,
  newsletterPlaceholder,
  newsletterSuccess,
  quickLinksHeading,
} from '../data'

const emailPattern = /^\S+@\S+\.\S+$/

/** Black footer: newsletter, quick links, about, Component Dock credit. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const valid = emailPattern.test(email.trim())
    setError(valid ? '' : newsletterError)
    setSubscribed(valid)
  }

  return (
    <footer id="contact" className="bg-black py-16">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="mb-3 text-[18px] text-white">{newsletterHeading}</h3>
            <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                {newsletterLabel}
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={newsletterPlaceholder}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? 'newsletter-error' : undefined}
                className="h-[55px] w-full rounded-[4px] border border-white/20 bg-white px-5 text-[15px] text-body focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />
              <Button
                type="submit"
                className="h-[55px] shrink-0 rounded-[4px] bg-brand px-5 text-[15px] font-normal text-white hover:bg-brand-deep"
              >
                {newsletterCta}
              </Button>
            </form>
            {error ? (
              <p id="newsletter-error" role="alert" className="mt-3 text-[13px] text-white">
                {error}
              </p>
            ) : null}
            {subscribed ? (
              <p role="status" className="mt-3 text-[13px] text-brand">
                {newsletterSuccess}
              </p>
            ) : null}
          </div>

          <div className="md:col-span-1 md:col-start-3">
            <h3 className="mb-3 text-[18px] text-white">{quickLinksHeading}</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-[15px] text-white/50 transition-colors hover:text-white"
                  >
                    <span aria-hidden="true" className="text-brand">
                      →
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="mb-3 text-[18px] text-white">{footerAboutHeading}</h3>
            <p className="text-[15px] text-white/50">{footerAboutBody}</p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-10 text-center">
          <p className="text-[15px] text-white/50">
            {copyrightLead}{' '}
            <a href={creditHref} className="underline transition-colors hover:text-white">
              {creditLabel}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
