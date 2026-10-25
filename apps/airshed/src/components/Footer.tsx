import { useState } from 'react'
import {
  ADDRESS,
  BRAND,
  COMPONENTDOCK_HREF,
  COMPONENTDOCK_LINE,
  EMAIL,
  FOOTER,
  PHONE_DISPLAY,
  PHONE_HREF,
  TAGLINE,
} from '../content'
import { Container, Logo } from './ui'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Newsletter row: validated in place, confirmed in place, no request. */
function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError(FOOTER.newsletterError)
      setDone(false)
      return
    }
    setError(null)
    setDone(true)
    setEmail('')
  }

  if (done) {
    return (
      <p role="status" className="mt-4 text-sm font-semibold text-primary-300">
        {FOOTER.newsletterSuccess}
      </p>
    )
  }

  return (
    <form className="mt-4" onSubmit={onSubmit} noValidate>
      <label htmlFor="newsletter-email" className="sr-only">
        {FOOTER.newsletterLabel}
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          placeholder={FOOTER.newsletterPlaceholder}
          aria-describedby={error ? 'newsletter-error' : undefined}
          aria-invalid={error ? true : undefined}
          onChange={(event) => setEmail(event.target.value)}
          className="min-w-0 flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30"
        />
        <button
          type="submit"
          className="w-full shrink-0 rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700 sm:w-auto"
        >
          {FOOTER.newsletterCta}
        </button>
      </div>
      {error ? (
        <p id="newsletter-error" role="alert" className="mt-2 text-sm text-red-400">
          {error}
        </p>
      ) : null}
    </form>
  )
}

/**
 * Near-black footer: brand column with the wordmark, blurb, address, phone and
 * email, three link columns of four / four / three in-page links, the
 * newsletter column, and a legal bar that carries the Component Dock line.
 */
export function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 text-gray-300 lg:pt-24">
      <Container className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo brand={BRAND} tagline={TAGLINE} tone="light" />
          <p className="mt-4 max-w-xs text-base leading-6 text-gray-400">{FOOTER.blurb}</p>

          <div className="mt-6 space-y-1 text-base leading-6 text-gray-400">
            <p>{ADDRESS}</p>
            <p>
              <a href={PHONE_HREF} className="transition-colors hover:text-white">
                {PHONE_DISPLAY}
              </a>
            </p>
            <p>
              <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-white">
                {EMAIL}
              </a>
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="grid gap-8 sm:grid-cols-3">
            {FOOTER.columns.map((column) => (
              <div key={column.heading}>
                <h3 className="text-sm font-semibold uppercase leading-5 tracking-[0.7px] text-white">
                  {column.heading}
                </h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={`${column.heading}-${link.label}`}>
                      <a
                        href={link.href}
                        className="text-sm leading-5 text-gray-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold uppercase leading-5 tracking-[0.7px] text-white">
            {FOOTER.newsletterHeading}
          </h3>
          <p className="mt-4 text-base leading-6 text-gray-400">{FOOTER.newsletterBody}</p>
          <NewsletterForm />
        </div>
      </Container>

      <Container className="mt-16 border-t border-gray-800 py-8">
        <div className="flex flex-col gap-3 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>{FOOTER.legal}</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#contact" className="transition-colors hover:text-white">
              {FOOTER.privacy}
            </a>
            <a href="#contact" className="transition-colors hover:text-white">
              {FOOTER.terms}
            </a>
            <a
              href={COMPONENTDOCK_HREF}
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              {COMPONENTDOCK_LINE}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
