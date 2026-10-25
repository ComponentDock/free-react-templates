import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import {
  ADDRESS,
  COMPONENTDOCK_HREF,
  DISPATCH_EMAIL,
  FOOTER_BLURB,
  FOOTER_COLUMNS,
  NEWSLETTER_BLURB,
  NEWSLETTER_CONFIRMATION,
  NEWSLETTER_HEADING,
  PHONE_HREF,
  PHONE_LABEL,
  SOCIALS,
  type SocialLink,
} from '../content'
import { Wordmark } from './Wordmark'

/** Brand glyphs are not in the icon set any more, so they are drawn inline. */
const SOCIAL_PATHS: Record<SocialLink['label'], string> = {
  Facebook:
    'M13.5 22v-8h2.7l.4-3h-3.1V9.2c0-.9.3-1.5 1.6-1.5h1.6V5.1C16.3 5 15.4 5 14.4 5 12.2 5 10.7 6.3 10.7 8.8V11H8v3h2.7v8h2.8Z',
  Instagram:
    'M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2Zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm5.9-7.8a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM12 4.5c-2 0-2.3 0-3.1.05-.8.04-1.3.17-1.8.36a3.6 3.6 0 0 0-1.3.86c-.4.4-.68.8-.86 1.3-.19.5-.32 1-.36 1.8C4.5 9.7 4.5 10 4.5 12s0 2.3.05 3.1c.04.8.17 1.3.36 1.8.18.5.46.9.86 1.3.4.4.8.68 1.3.86.5.19 1 .32 1.8.36.8.05 1.1.05 3.1.05s2.3 0 3.1-.05c.8-.04 1.3-.17 1.8-.36.5-.18.9-.46 1.3-.86.4-.4.68-.8.86-1.3.19-.5.32-1 .36-1.8.05-.8.05-1.1.05-3.1s0-2.3-.05-3.1c-.04-.8-.17-1.3-.36-1.8a3.6 3.6 0 0 0-.86-1.3 3.6 3.6 0 0 0-1.3-.86c-.5-.19-1-.32-1.8-.36C14.3 4.5 14 4.5 12 4.5Z',
  LinkedIn:
    'M6.6 8.4a1.85 1.85 0 1 0 0-3.7 1.85 1.85 0 0 0 0 3.7ZM5 9.8h3.2V19H5V9.8Zm5.2 0h3v1.3h.05c.42-.75 1.45-1.55 2.98-1.55 3.2 0 3.78 2 3.78 4.6V19h-3.1v-4.1c0-1-.02-2.3-1.45-2.3-1.45 0-1.68 1.1-1.68 2.25V19h-3.1V9.8Z',
}

function SocialGlyph({ label }: { label: SocialLink['label'] }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d={SOCIAL_PATHS[label]} />
    </svg>
  )
}

function Newsletter() {
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wide text-white">{NEWSLETTER_HEADING}</h3>
      <p className="mt-3 text-sm text-gray-400">{NEWSLETTER_BLURB}</p>
      {sent ? (
        <p role="status" className="mt-4 text-sm font-semibold text-primary-400">
          {NEWSLETTER_CONFIRMATION}
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mt-4 flex gap-2">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="min-w-0 flex-1 rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <Button type="submit" className="shrink-0 bg-primary-600 hover:bg-primary-700">
            Subscribe
          </Button>
        </form>
      )}
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 text-gray-300 lg:pt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Wordmark tone="light" />
            <p className="mt-5 max-w-sm text-sm text-gray-400">{FOOTER_BLURB}</p>
            <div className="mt-6 flex gap-2">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  rel="noreferrer"
                  className="rounded-lg bg-gray-800 p-2.5 text-gray-400 transition-colors hover:text-white"
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
                <a href={`mailto:${DISPATCH_EMAIL}`} className="hover:text-white">
                  {DISPATCH_EMAIL}
                </a>
              </li>
            </ul>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-5">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.heading}>
                <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                  {column.heading}
                </h3>
                <ul className="mt-4 space-y-2 text-sm">
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

        <div className="mt-12 border-t border-gray-800 py-6">
          <div className="flex flex-col items-start justify-between gap-4 text-sm text-gray-500 sm:flex-row sm:items-center">
            <p>© 2026 Stoke Heating &amp; Cooling. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a href="#contact" className="transition-colors hover:text-white">
                Privacy Policy
              </a>
              <a href="#contact" className="transition-colors hover:text-white">
                Terms of Service
              </a>
              <a
                href={COMPONENTDOCK_HREF}
                rel="noreferrer"
                className="font-semibold text-gray-400 transition-colors hover:text-white"
              >
                More templates at Component Dock
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
