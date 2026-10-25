import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { CONTACT, FOOTER_COMPANY, FOOTER_LEGAL, FOOTER_SERVICES, FOOTER_SUPPORT } from '../data'
import { emailError } from '../forms'
import { Toast, useToast } from './Toast'
import { Wordmark } from './Wordmark'

const SOCIAL = [
  { label: 'Plantroom on X', href: 'https://x.com/componentdock', path: 'M4 4l16 16M20 4L4 20' },
  {
    label: 'Plantroom on GitHub',
    href: 'https://github.com/ComponentDock',
    path: 'M9 7 4 12l5 5M15 7l5 5-5 5',
  },
  {
    label: 'Plantroom feed',
    href: 'https://www.componentdock.com/',
    path: 'M5 18h.01M5 12a7 7 0 0 1 7 7M5 6a13 13 0 0 1 13 13',
  },
]

/** A footer link, or plain text when the label has no destination on one page. */
function FooterLink({ label, target }: { label: string; target: string | null }) {
  if (target === null) {
    return <span className="text-gray-400">{label}</span>
  }

  return (
    <a href={target} className="text-gray-400 hover:text-white">
      {label}
    </a>
  )
}

/**
 * Four-block `gray-900` footer: brand block with the light wordmark, address and
 * three social tiles; Services, Company and Support columns; the newsletter;
 * and a legal bar that carries the house Component Dock credit. The newsletter
 * validates locally, like the survey card, and never navigates.
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
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Wordmark light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400">
              Commercial HVAC in Fort Worth. Planned maintenance agreements with published response
              tiers, and a stated remedy when we miss one.
            </p>

            <ul className="mt-6 flex gap-3">
              {SOCIAL.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    rel="noreferrer"
                    target="_blank"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
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

            <address className="mt-6 space-y-1 text-sm text-gray-400 not-italic">
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
                  Services
                </h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {FOOTER_SERVICES.map((label) => (
                    <li key={label}>
                      <span className="text-gray-400">{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {FOOTER_COMPANY.map((link) => (
                    <li key={link.label}>
                      <FooterLink label={link.label} target={link.target} />
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {FOOTER_SUPPORT.map((link) => (
                    <li key={link.label}>
                      <FooterLink label={link.label} target={link.target} />
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
            <p className="mt-4 text-sm text-gray-400">
              Seasonal maintenance reminders and plain-English notes on what actually needs doing
              before winter.
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
                  placeholder="you@company.com"
                  value={email}
                  aria-invalid={error !== undefined}
                  aria-describedby={error === undefined ? undefined : 'footer-newsletter-error'}
                  onChange={(event) => {
                    setEmail(event.target.value)
                    setError(undefined)
                  }}
                  className={cn(
                    'w-full min-w-0 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-white placeholder:text-gray-500 sm:flex-1',
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

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 py-8 text-sm text-gray-500 sm:flex-row">
          <p>© 2026 Plantroom Mechanical. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-5">
            {FOOTER_LEGAL.map((link) => (
              <li key={link.label}>
                <FooterLink label={link.label} target={link.target} />
              </li>
            ))}
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
