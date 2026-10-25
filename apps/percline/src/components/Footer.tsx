import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import {
  ADDRESS,
  COMPONENTDOCK_HREF,
  EMAIL,
  FOOTER,
  PHONE_HREF,
  PHONE_LABEL,
  type SocialLabel,
} from '../content'
import { validateEmail } from '../lib/forms'
import { Wordmark } from './Wordmark'

function SocialGlyph({ label }: { label: SocialLabel }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d={FOOTER.socialPaths[label]} />
    </svg>
  )
}

function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const message = validateEmail(email)
    if (message !== null) {
      setError(message)
      return
    }
    setError(null)
    setEmail('')
    setSent(true)
  }

  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wide text-white">
        {FOOTER.newsletterHeading}
      </h3>
      <p className="mt-4 text-gray-400">{FOOTER.newsletterBlurb}</p>
      {sent ? (
        <p role="status" className="mt-4 text-sm font-semibold text-primary-300">
          {FOOTER.newsletterSuccess}
        </p>
      ) : (
        <form onSubmit={onSubmit} noValidate className="mt-4 flex gap-2">
          <label htmlFor="newsletter-email" className="sr-only">
            {FOOTER.newsletterLabel}
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            value={email}
            placeholder={FOOTER.newsletterPlaceholder}
            aria-invalid={error !== null}
            aria-describedby={error === null ? undefined : 'newsletter-error'}
            onChange={(event) => setEmail(event.target.value)}
            className="min-w-0 flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <Button type="submit" className="shrink-0 bg-primary-600 hover:bg-primary-700">
            {FOOTER.newsletterSubmit}
          </Button>
        </form>
      )}
      {error !== null && (
        <p id="newsletter-error" className="mt-2 text-xs font-medium text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}

/** Brand glyphs live inline — the icon set no longer ships them. */
export function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 text-gray-300 lg:pt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Wordmark tone="light" />
            <p className="mt-4 max-w-xs text-gray-400">{FOOTER.blurb}</p>
            <div className="mt-6 flex gap-4">
              {FOOTER.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="rounded-lg bg-gray-800 p-2.5 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
                >
                  <SocialGlyph label={social.label} />
                </a>
              ))}
            </div>
            <ul className="mt-6 space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a href={PHONE_HREF} className="hover:text-white">
                  {PHONE_LABEL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a href={`mailto:${EMAIL}`} className="hover:text-white">
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-5">
            {FOOTER.columns.map((column) => (
              <div key={column.heading}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  {column.heading}
                </h3>
                <ul className="mt-4 space-y-3">
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

          <div className="lg:col-span-3">
            <Newsletter />
          </div>
        </div>

        <div className="mt-16 border-t border-gray-800 py-8">
          <div className="flex flex-col items-start justify-between gap-4 text-sm text-gray-500 sm:flex-row sm:items-center">
            <p>{FOOTER.legal}</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a href="#contact" className="transition-colors hover:text-gray-300">
                Privacy Policy
              </a>
              <a href="#contact" className="transition-colors hover:text-gray-300">
                Terms of Service
              </a>
              <a
                href={COMPONENTDOCK_HREF}
                rel="noreferrer"
                className="font-semibold text-gray-400 transition-colors hover:text-white"
              >
                {FOOTER.componentDockLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
