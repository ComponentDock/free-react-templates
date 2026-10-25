import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { brand, footerColumns, socialLinks } from '../data'
import { Wordmark } from './Wordmark'

/**
 * Five columns on the near-black ground: brand and trade details, the three
 * link columns, and the newsletter. The legal bar carries the marketplace
 * credit to Component Dock.
 */
export function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!event.currentTarget.checkValidity()) {
      return
    }

    setSubscribed(true)
  }

  return (
    <footer className="bg-gray-900 pt-16 text-gray-300 lg:pt-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <a href="#top" className="inline-block" aria-label={`${brand.name} home`}>
              <Wordmark tone="light" />
            </a>
            <p className="mt-4 max-w-xs text-gray-400">{brand.tagline}</p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-sm font-semibold text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
                >
                  {social.mark}
                </a>
              ))}
            </div>
            <div className="mt-6 space-y-2 text-sm text-gray-400">
              <p className="flex items-start gap-2">
                <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{brand.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone aria-hidden="true" className="h-4 w-4 shrink-0" />
                <a href={brand.phoneHref} className="transition-colors hover:text-white">
                  {brand.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail aria-hidden="true" className="h-4 w-4 shrink-0" />
                <a href={`mailto:${brand.email}`} className="transition-colors hover:text-white">
                  {brand.email}
                </a>
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-5">
            {footerColumns.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
              Stay Updated
            </h3>
            <p className="mt-4 text-gray-400">
              Seasonal maintenance reminders and plain-English notes on what actually needs doing
              before winter.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4" aria-label="Newsletter">
              <div className="flex gap-2">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-primary-600 px-4 py-2.5 font-medium text-white transition-colors hover:bg-primary-700"
                >
                  Subscribe
                </button>
              </div>
              {subscribed ? (
                <p role="status" className="mt-3 text-sm text-primary-200">
                  You are on the list — the next reminder goes out before the season turns.
                </p>
              ) : null}
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-800 py-8 sm:flex-row">
          <p className="text-sm text-gray-500">{brand.copyright}</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#top" className="text-sm text-gray-500 transition-colors hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#top" className="text-sm text-gray-500 transition-colors hover:text-gray-300">
              Terms of Service
            </a>
            <p className="text-sm text-gray-500">
              More templates at{' '}
              <a
                href="https://www.componentdock.com/"
                className="underline underline-offset-4 transition-colors hover:text-gray-300"
              >
                Component Dock
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
