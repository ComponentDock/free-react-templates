import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import {
  BRAND,
  CONTACT,
  FOOTER_COMPANY,
  FOOTER_PRACTICE,
  FOOTER_SUPPORT,
  SOCIAL,
  type FooterLinkItem,
} from '../data'
import { emailError } from '../forms'
import { Toast, useToast } from './Toast'
import { Wordmark } from './Wordmark'

/** A footer link, or `aria-disabled` text when the label has no page on one page. */
function FooterLink({ label, target }: FooterLinkItem) {
  if (target === null) {
    return (
      <span aria-disabled="true" className="text-gray-400">
        {label}
      </span>
    )
  }

  return (
    <a href={target} className="text-gray-400 hover:text-white">
      {label}
    </a>
  )
}

/**
 * `gray-900` footer: brand block with the light wordmark, address and three
 * social tiles; the practice's own three link columns; the newsletter, wired
 * locally with inline errors and a toast; and a legal bar that carries the house
 * Component Dock credit.
 */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | undefined>(undefined)
  const { message, notify } = useToast()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const next = emailError(email)
    setError(next)

    if (next !== undefined) {
      return
    }

    setEmail('')
    notify('Subscribed — check your inbox to confirm.')
  }

  return (
    <footer className="bg-gray-900 pt-16 text-gray-300 lg:pt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Wordmark light />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              An RCVS-registered small animal practice in Shrewsbury — dogs, cats and small mammals,
              with published fees and honest out-of-hours arrangements.
            </p>

            <ul className="mt-6 flex gap-4">
              {SOCIAL.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    rel="noreferrer"
                    target="_blank"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 p-2.5 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
                      <path
                        d={social.path}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>

            <address className="mt-6 space-y-2 text-sm text-gray-400 not-italic">
              <div>{CONTACT.address}</div>
              <div>
                <a href={CONTACT.phoneHref} className="hover:text-white">
                  {CONTACT.phoneLabel}
                </a>
              </div>
              <div>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                  {CONTACT.email}
                </a>
              </div>
            </address>
          </div>

          <div className="lg:col-span-5">
            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                  Practice
                </h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {FOOTER_PRACTICE.map((link) => (
                    <li key={link.label}>
                      <FooterLink {...link} />
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {FOOTER_COMPANY.map((link) => (
                    <li key={link.label}>
                      <FooterLink {...link} />
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {FOOTER_SUPPORT.map((link) => (
                    <li key={link.label}>
                      <FooterLink {...link} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
              Stay Updated
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Seasonal reminders — parasite treatment, firework anxiety, and when the grass seeds
              start causing trouble.
            </p>
            <form noValidate onSubmit={handleSubmit} className="mt-4">
              <div className="flex flex-col gap-2 sm:flex-row">
                <label htmlFor="footer-newsletter" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-newsletter"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  value={email}
                  aria-invalid={error !== undefined}
                  aria-describedby={error === undefined ? undefined : 'footer-newsletter-error'}
                  onChange={(event) => {
                    setEmail(event.target.value)
                    setError(undefined)
                  }}
                  className={cn(
                    'field w-full min-w-0 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 sm:flex-1',
                    error !== undefined && 'border-red-500',
                  )}
                />
                <button type="submit" className="btn btn-primary w-full shrink-0 sm:w-auto">
                  Subscribe
                </button>
              </div>
              {error === undefined ? null : (
                <p id="footer-newsletter-error" className="mt-2 text-sm text-red-400">
                  {error}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-800 py-8 text-sm text-gray-500 sm:flex-row">
          <p>© 2026 {BRAND}. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-6">
            <li>
              <span aria-disabled="true" className="text-gray-400">
                Privacy Policy
              </span>
            </li>
            <li>
              <span aria-disabled="true" className="text-gray-400">
                Terms of Service
              </span>
            </li>
            <li>
              <a
                href="https://www.componentdock.com/"
                rel="noreferrer"
                target="_blank"
                className="font-medium text-white hover:text-primary-300"
              >
                Made with Component Dock
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Toast message={message} />
    </footer>
  )
}
