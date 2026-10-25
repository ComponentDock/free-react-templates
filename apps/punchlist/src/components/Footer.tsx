import { useState } from 'react'
import type { FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import {
  ADDRESS,
  BRAND,
  COMPONENTDOCK_HREF,
  EMAIL,
  FOOTER,
  PHONE_DISPLAY,
  PHONE_HREF,
} from '../content'
import { Container, Logo } from './ui'

/** Six-column dark footer; the newsletter is the only form and it validates. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)

  const subscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const valid = /.+@.+\..+/.test(email.trim())
    if (!valid) {
      setError(FOOTER.emailError)
      setDone(false)
      return
    }
    setError(null)
    setDone(true)
    setEmail('')
  }

  return (
    <footer className="bg-gray-900 pt-16 lg:pt-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,4fr)_repeat(3,minmax(0,2fr))_minmax(0,3fr)] lg:gap-8">
          <div>
            <Logo brand={BRAND} tone="light" />
            <p className="mt-5 max-w-sm text-sm leading-6 text-gray-400">{FOOTER.blurb}</p>

            <ul className="mt-6 flex gap-2">
              {FOOTER.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 text-gray-300 transition-colors hover:bg-primary-600 hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                      <path d={social.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>

            <address className="mt-6 space-y-2 text-sm not-italic leading-6 text-gray-400">
              <span className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                {ADDRESS}
              </span>
              <a href={PHONE_HREF} className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                {EMAIL}
              </a>
            </address>
          </div>

          {FOOTER.columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-gray-400 hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              {FOOTER.newsletterTitle}
            </h2>
            <p className="mt-4 text-sm leading-6 text-gray-400">{FOOTER.newsletterBlurb}</p>

            {done ? (
              <p role="status" className="mt-4 text-sm text-primary-300">
                {FOOTER.success}
              </p>
            ) : (
              <form className="mt-4" onSubmit={subscribe} noValidate>
                <label htmlFor="newsletter-email" className="sr-only">
                  {FOOTER.emailLabel}
                </label>
                <div className="flex gap-2">
                  <input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder={FOOTER.emailPlaceholder}
                    aria-invalid={error !== null}
                    aria-describedby={error === null ? undefined : 'newsletter-error'}
                    className="min-w-0 flex-1 rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder:text-gray-500"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
                  >
                    {FOOTER.subscribe}
                  </button>
                </div>
                {error === null ? null : (
                  <p id="newsletter-error" role="alert" className="mt-2 text-xs text-primary-300">
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-gray-800 py-8 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>{FOOTER.copyright}</p>
          <a href={COMPONENTDOCK_HREF} className="hover:text-white">
            {FOOTER.componentDock}
          </a>
        </div>
      </Container>
    </footer>
  )
}
