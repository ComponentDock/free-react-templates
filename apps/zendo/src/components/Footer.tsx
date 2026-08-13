import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { brand, footer } from '../data'
import { socialLinks } from './social-icons'

/** Light footer (white, hairline top border) with brand + socials, Popular
 *  Links, Quick Links and a "Have a Questions?" contact widget: address,
 *  phone, email and a validated message form (empty → error, filled →
 *  success). Copyright bar credits Component Dock. */
export function Footer() {
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (message.trim() === '') {
      setError('Please enter a message.')
      setSent(false)
      return
    }
    setError('')
    setSent(true)
    setMessage('')
  }

  return (
    <footer data-testid="footer" className="border-t border-line bg-white py-16 md:py-[6em]">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#home-section" className="font-display text-2xl font-semibold text-ink">
            {brand.name}
          </a>
          <p className="mt-4 text-sm font-light leading-relaxed text-muted">{footer.blurb}</p>
          <ul className="mt-6 flex gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-light text-ink/60 transition-colors hover:bg-brand hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Popular links">
          <h3 className="text-lg font-semibold">Popular Links</h3>
          <ul className="mt-6 space-y-3">
            {footer.popularLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-light text-muted transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Quick links">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-6 space-y-3">
            {footer.quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-light text-muted transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-lg font-semibold">{footer.questionTitle}</h3>
          <ul className="mt-6 space-y-4 text-sm font-light text-muted">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>{footer.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>{footer.phone}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>{footer.email}</span>
            </li>
          </ul>

          <form onSubmit={handleSubmit} className="mt-6" noValidate>
            <label htmlFor="footer-message" className="sr-only">
              {footer.messagePlaceholder}
            </label>
            <div className="flex items-center gap-2 rounded border border-line bg-white px-3 py-2 focus-within:border-brand">
              <input
                id="footer-message"
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder={footer.messagePlaceholder}
                className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted"
              />
              <button
                type="submit"
                aria-label={footer.sendLabel}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-brand text-white transition-colors hover:bg-primary-700"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            {error && (
              <p role="status" className="mt-2 text-xs text-red-600">
                {error}
              </p>
            )}
            {sent && (
              <p role="status" className="mt-2 text-xs text-primary-700">
                Message sent — thank you!
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1240px] px-4">
        <div className="border-t border-line pt-6 text-center text-sm font-light text-muted">
          <p>
            Copyright © {new Date().getFullYear()} All rights reserved | This template is made with
            ♥ by {brand.name} · More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-semibold text-ink underline transition-colors hover:text-brand"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
