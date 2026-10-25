import { useState } from 'react'
import { CONTACT, FOOTER_CHANNELS, FOOTER_COMPANY, FOOTER_LEGAL, FOOTER_SUPPORT } from '../data'
import { Wordmark } from './Wordmark'

const SOCIAL = [
  {
    label: 'Veranda on X',
    href: 'https://x.com/componentdock',
    path: 'M4 4l16 16M20 4L4 20',
  },
  {
    label: 'Veranda on GitHub',
    href: 'https://github.com/ComponentDock',
    path: 'M9 7 4 12l5 5M15 7l5 5-5 5',
  },
  {
    label: 'Veranda RSS feed',
    href: 'https://www.componentdock.com/',
    path: 'M5 18h.01M5 12a7 7 0 0 1 7 7M5 6a13 13 0 0 1 13 13',
  },
]

/**
 * Four-block near-black footer: brand, three link columns, the newsletter, and
 * a legal bar that carries the house Component Dock credit. The reference's
 * leftover coworking column is replaced with the four real channels.
 */
export function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  return (
    <footer className="bg-gray-900 pt-16 text-gray-300 lg:pt-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Wordmark light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400">
              A moderated community for people who build in public. Read every thread for free;
              membership pays the moderators.
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
                <h3 className="text-sm font-semibold text-white">Channels</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {FOOTER_CHANNELS.map((link) => (
                    <li key={link.label}>
                      <a href={link.target} className="text-gray-400 hover:text-white">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Company</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {FOOTER_COMPANY.map((link) => (
                    <li key={link.label}>
                      <a href={link.target} className="text-gray-400 hover:text-white">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Support</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {FOOTER_SUPPORT.map((link) => (
                    <li key={link.label}>
                      <a href={link.target} className="text-gray-400 hover:text-white">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-white">Stay Updated</h3>
            <p className="mt-4 text-sm text-gray-400">
              One email a week: the thread worth reading and the session worth joining.
            </p>
            <form
              className="mt-4 flex gap-2"
              onSubmit={(event) => {
                event.preventDefault()
                setSubscribed(true)
              }}
            >
              <label htmlFor="veranda-newsletter" className="sr-only">
                Email address
              </label>
              <input
                id="veranda-newsletter"
                type="email"
                required
                placeholder="you@example.com"
                className="min-w-0 flex-1 rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder:text-gray-500"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
            {subscribed ? (
              <p role="status" className="mt-3 text-sm text-primary-300">
                Thanks — check your inbox to confirm.
              </p>
            ) : null}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 py-8 text-sm text-gray-400 sm:flex-row">
          <p>© 2026 Veranda. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-5">
            {FOOTER_LEGAL.map((link) => (
              <li key={link.label}>
                <a href={link.target} className="hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://www.componentdock.com/"
                rel="noreferrer"
                target="_blank"
                className="font-medium text-white hover:text-primary-300"
              >
                More templates at Component Dock
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
