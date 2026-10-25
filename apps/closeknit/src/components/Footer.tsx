import { useState } from 'react'
import type { FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { FOOTER } from '../content'
import { Wordmark } from './Wordmark'

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const SOCIALS = [
  { label: 'Follow Closeknit on X', short: 'X', href: 'https://x.com/' },
  { label: 'Follow Closeknit on Instagram', short: 'IG', href: 'https://www.instagram.com/' },
  { label: 'Follow Closeknit on LinkedIn', short: 'in', href: 'https://www.linkedin.com/' },
]

/**
 * Newsletter form: inline validation, inline confirmation, no network call.
 * The footer's marketplace credit is the only outbound product link.
 */
function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL.test(email)) {
      setError(FOOTER.newsletter.invalid)
      setSent(false)
      return
    }
    setError(null)
    setSent(true)
    setEmail('')
  }

  return (
    <form onSubmit={onSubmit} noValidate className="mt-4">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={FOOTER.newsletter.placeholder}
          aria-invalid={error !== null}
          aria-describedby={error !== null ? 'newsletter-error' : undefined}
          className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700"
        >
          {FOOTER.newsletter.action}
        </button>
      </div>
      {error !== null && (
        <p id="newsletter-error" role="alert" className="mt-2 text-xs text-red-400">
          {error}
        </p>
      )}
      {sent && (
        <p role="status" className="mt-2 text-xs text-green-400">
          {FOOTER.newsletter.success}
        </p>
      )}
    </form>
  )
}

export function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 text-gray-300 lg:pt-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <a href="#top" aria-label="Closeknit home">
              <Wordmark tone="light" />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">{FOOTER.blurb}</p>
            <ul className="mt-6 flex gap-3">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    rel="noreferrer"
                    target="_blank"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 text-xs font-semibold text-gray-300 transition-colors hover:bg-gray-700"
                  >
                    {social.short}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-6 space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 flex-none" />
                <span>{FOOTER.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone aria-hidden="true" className="h-4 w-4 flex-none" />
                <a href={FOOTER.phoneHref} className="hover:text-white">
                  {FOOTER.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail aria-hidden="true" className="h-4 w-4 flex-none" />
                <a href={`mailto:${FOOTER.email}`} className="hover:text-white">
                  {FOOTER.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-5 sm:grid-cols-3">
            {FOOTER.columns.map((column) => (
              <div key={column.title}>
                <h2 className="text-sm font-bold tracking-wide text-white uppercase">
                  {column.title}
                </h2>
                <ul className="mt-4 space-y-2 text-sm">
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
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-sm font-bold tracking-wide text-white uppercase">
              {FOOTER.newsletter.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">{FOOTER.newsletter.blurb}</p>
            <Newsletter />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 pb-24 text-sm text-gray-500 sm:flex-row lg:pb-8">
          <p>{FOOTER.copyright}</p>
          <ul className="flex flex-wrap items-center gap-6">
            {FOOTER.legal.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={FOOTER.componentDock.href}
                className="font-semibold text-primary-400 transition-colors hover:text-primary-300"
              >
                More templates at {FOOTER.componentDock.label}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
