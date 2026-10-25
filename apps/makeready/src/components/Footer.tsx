import { useState } from 'react'
import type { FormEvent } from 'react'
import { Globe, Mail, MapPin, Phone } from 'lucide-react'
import { footer, site } from '../content'
import { isValidEmail } from '../lib/forms'
import { Wordmark } from './Logo'

type NewsletterState = 'idle' | 'error' | 'done'

/**
 * Four zones on a `gray-900` plate. The reference's SPACES column and its four
 * dead `#spaces` links were coworking leftovers, so the second column is the
 * studio's real bands and the newsletter confirms locally instead of reloading.
 */
export function Footer() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<NewsletterState>('idle')

  const onSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!isValidEmail(email)) {
      setState('error')
      return
    }
    setState('done')
    setEmail('')
  }

  return (
    <footer className="bg-gray-900 pt-24 text-gray-400">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Wordmark tone="light" />
            <p className="mt-6 max-w-xs text-base leading-7">{footer.blurb}</p>
            <a
              href={site.componentDock}
              target="_blank"
              rel="noopener"
              aria-label={footer.componentDockLabel}
              className="mt-6 grid h-10 w-10 place-items-center rounded-lg bg-gray-800 text-gray-300 transition-colors hover:text-white"
            >
              <Globe aria-hidden="true" className="h-4 w-4" />
            </a>
            <ul className="mt-6 space-y-2 text-sm leading-6">
              <li className="flex items-start gap-3">
                <MapPin aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />
                <span>{site.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone aria-hidden="true" className="h-4 w-4 shrink-0" />
                <a href={site.phoneHref} className="hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail aria-hidden="true" className="h-4 w-4 shrink-0" />
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-5">
            <div>
              <h2 className="text-sm leading-5 font-semibold tracking-[0.1em] text-white uppercase">
                {footer.studioHeading}
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-5">
                {footer.studioLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-sm leading-5 font-semibold tracking-[0.1em] text-white uppercase">
                {footer.moreHeading}
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-5">
                {footer.moreLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={site.componentDock}
                    target="_blank"
                    rel="noopener"
                    className="hover:text-white"
                  >
                    {footer.componentDockLabel}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-sm leading-5 font-semibold tracking-[0.1em] text-white uppercase">
              {footer.newsletterHeading}
            </h2>
            <p className="mt-4 text-sm leading-6">{footer.newsletterCopy}</p>
            <form onSubmit={onSubscribe} noValidate className="mt-4">
              <label htmlFor="newsletter-email" className="sr-only">
                {footer.newsletterLabel}
              </label>
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  value={email}
                  placeholder={footer.newsletterLabel}
                  onChange={(event) => {
                    setEmail(event.target.value)
                    setState('idle')
                  }}
                  aria-invalid={state === 'error' ? true : undefined}
                  aria-describedby={state === 'idle' ? undefined : 'newsletter-status'}
                  className="h-[46px] w-full min-w-0 rounded-lg border border-gray-700 bg-gray-800 px-4 text-sm text-white placeholder-gray-500 focus:border-primary-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="h-[46px] shrink-0 rounded-lg bg-primary-600 px-5 text-sm font-medium text-white transition-colors hover:bg-primary-700"
                >
                  {footer.subscribe}
                </button>
              </div>
              {state === 'idle' ? null : (
                <p
                  id="newsletter-status"
                  role="status"
                  className="mt-2 text-xs leading-5 text-gray-300"
                >
                  {state === 'error' ? footer.newsletterError : footer.newsletterSuccess}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-gray-800 py-8 text-sm leading-5 text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright}</p>
          <ul className="flex gap-6">
            {footer.legalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
