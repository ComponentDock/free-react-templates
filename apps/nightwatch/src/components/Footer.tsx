import { useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { FOOTER, site } from '../content'
import { containerClass } from './ui'
import { Wordmark } from './Header'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'invalid' | 'valid'>('idle')

  const subscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email)) {
      setStatus('invalid')
      return
    }
    setEmail('')
    setStatus('valid')
  }

  return (
    <footer className="bg-gray-900 pt-16 text-gray-300 lg:pt-24">
      <div className={containerClass}>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Wordmark light large />
            <p className="mt-5 max-w-xs text-sm leading-6 text-gray-400">{FOOTER.blurb}</p>
            <address className="mt-6 space-y-1.5 text-sm leading-5 text-gray-400 not-italic">
              <p>{site.address}</p>
              <p>
                <a href={site.phoneHref} className="transition-colors hover:text-white">
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">
                  {site.email}
                </a>
              </p>
            </address>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-5">
            {FOOTER.columns.map((column) => (
              <div key={column.title}>
                <h2 className="text-sm leading-5 font-semibold tracking-[0.7px] text-white uppercase">
                  {column.title}
                </h2>
                <ul className="mt-4 space-y-2.5 text-sm leading-5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-gray-400 transition-colors hover:text-white">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="min-w-0 lg:col-span-3">
            <h2 className="text-sm leading-5 font-semibold tracking-[0.7px] text-white uppercase">
              {FOOTER.newsletterTitle}
            </h2>
            <p className="mt-4 text-sm leading-6 text-gray-400">{FOOTER.newsletterBlurb}</p>
            <form onSubmit={subscribe} noValidate className="mt-4 flex flex-col gap-2 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="h-[46px] w-full min-w-0 rounded-lg border border-gray-700 bg-gray-800 px-4 text-sm text-white outline-none focus:border-primary-500"
              />
              <button
                type="submit"
                className="inline-flex h-[46px] shrink-0 items-center justify-center rounded-lg bg-primary-500 px-4 text-base font-medium text-ink-900 transition-colors hover:bg-primary-400"
              >
                {FOOTER.newsletterCta}
              </button>
            </form>
            {status === 'invalid' ? (
              <p role="status" className="mt-3 text-sm leading-5 text-primary-300">
                That email address does not look complete.
              </p>
            ) : null}
            {status === 'valid' ? (
              <p role="status" className="mt-3 text-sm leading-5 text-primary-300">
                Subscribed. Seasonal reminders only, and one click to leave.
              </p>
            ) : null}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-gray-800 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-5 text-gray-500">{FOOTER.copyright}</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm leading-5 text-gray-500">
            {FOOTER.legal.map((link) => (
              <a key={link.label} href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
            <a
              href={site.componentDock}
              className="inline-flex items-center gap-1.5 text-gray-400 transition-colors hover:text-white"
            >
              More templates at Component Dock
              <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
