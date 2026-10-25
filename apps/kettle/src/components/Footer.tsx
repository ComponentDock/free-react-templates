import { useState, type FormEvent } from 'react'
import { BRAND, FOOTER_COLUMNS, FOOTER_TARGETS, SOCIAL } from '../data'
import { emailError } from '../forms'
import { Toast, useToast } from './Toast'
import { Wordmark } from './Wordmark'

/**
 * `gray-900` footer: the brand block with a light wordmark, the three link
 * columns, the newsletter — validated locally like the quote card — and a legal
 * bar that carries the house Component Dock credit on the far right.
 */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | undefined>(undefined)
  const { message, notify } = useToast()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const next = emailError(email)
    setError(next)

    if (next !== undefined) {
      return
    }

    setEmail('')
    notify('Subscribed — seasonal reminders, nothing else.')
  }

  return (
    <footer className="on-foot bg-gray-900 pt-16 text-gray-300 lg:pt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Wordmark light />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              {BRAND.name} does water heater replacement and tankless conversion in Richmond. Sized
              on what runs at once and how cold your water comes in, not on the tank you already
              have.
            </p>

            <ul className="mt-6 flex gap-4">
              {SOCIAL.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    rel="noreferrer"
                    target="_blank"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 p-2.5 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
                      <path d={social.path} fill="currentColor" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>

            <ul className="mt-6 space-y-2 text-sm text-gray-400">
              <li>{BRAND.address}</li>
              <li>
                <a href={BRAND.phoneHref} className="hover:text-white">
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="hover:text-white">
                  {BRAND.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-5">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.head}>
                <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                  {column.head}
                </h3>
                <ul className="mt-4 space-y-2.5 text-base">
                  {column.links.map((label) => {
                    const target = FOOTER_TARGETS[label]

                    return (
                      <li key={label}>
                        {target === null || target === undefined ? (
                          <span aria-disabled="true" className="text-gray-400">
                            {label}
                          </span>
                        ) : (
                          <a href={target} className="text-gray-400 transition-colors hover:text-white">
                            {label}
                          </a>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
              Stay Updated
            </h3>
            <p className="mt-4 text-sm text-gray-400">
              Seasonal maintenance reminders and plain-English notes on what actually needs doing
              before winter.
            </p>
            <form onSubmit={handleSubmit} noValidate className="mt-4 flex flex-col gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-invalid={error === undefined ? undefined : true}
                aria-describedby={error === undefined ? undefined : 'newsletter-error'}
                placeholder="you@example.com"
                className="rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none"
              />
              {error === undefined ? null : (
                <p id="newsletter-error" className="text-sm text-red-400">
                  {error}
                </p>
              )}
              <button
                type="submit"
                className="rounded-lg bg-primary-600 px-4 py-2.5 font-medium text-white transition-colors hover:bg-primary-700"
              >
                Subscribe
              </button>
            </form>
            <Toast message={message} />
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-800 py-8 text-sm text-gray-500 sm:flex-row">
          <p>© 2026 {BRAND.name} Water Heaters. All rights reserved.</p>
          <p className="flex items-center gap-4">
            <span aria-disabled="true">Privacy Policy</span>
            <span aria-disabled="true">Terms of Service</span>
            <a
              href="https://www.componentdock.com/"
              rel="noreferrer"
              className="text-gray-400 transition-colors hover:text-white"
            >
              More templates at Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
