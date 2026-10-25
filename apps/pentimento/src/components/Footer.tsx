import { useState } from 'react'
import type { FormEvent } from 'react'
import { Globe, Mail, MapPin, Phone } from 'lucide-react'
import { footer, site } from '../content'
import { isValidEmail } from '../lib/forms'
import { Wordmark } from './Logo'
import { containerClass } from './ui'

type NewsletterStatus = 'idle' | 'error' | 'done'

/**
 * The reference posts this form to the page it is already on, which reloads it.
 * Here it validates locally and confirms without moving.
 */
export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<NewsletterStatus>('idle')

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus(isValidEmail(email) ? 'done' : 'error')
  }

  return (
    <form onSubmit={submit} noValidate className="mt-6" aria-label="Studio notes by e-mail">
      <div className="flex min-w-0 flex-col gap-3 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          E-mail address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={footer.newsletter.placeholder}
          className="min-w-0 flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-sm leading-5 text-white placeholder:text-gray-500 focus:border-gray-500 focus:outline-none"
        />
        <button
          type="submit"
          className="shrink-0 rounded-lg bg-primary-600 px-5 py-3 text-sm leading-5 font-medium text-white transition-colors hover:bg-primary-700"
        >
          {footer.newsletter.submit}
        </button>
      </div>
      {status === 'error' ? (
        <p role="alert" className="mt-3 text-sm leading-5 text-accent-400">
          {footer.newsletter.error}
        </p>
      ) : null}
      {status === 'done' ? (
        <p role="status" className="mt-3 text-sm leading-5 text-primary-200">
          {footer.newsletter.success}
        </p>
      ) : null}
    </form>
  )
}

/** Four zones on a 12-column plate: brand 4 / links 5 / newsletter 3. */
export function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 text-gray-400 lg:pt-24">
      <div className={containerClass}>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Wordmark tone="light" />
            <p className="mt-6 max-w-xs text-base leading-6">{footer.blurb}</p>

            <a
              href={site.componentDock}
              target="_blank"
              rel="noopener"
              aria-label="Component Dock — more templates"
              className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-300 transition-colors hover:text-primary-200"
            >
              <Globe aria-hidden="true" className="h-5 w-5" />
            </a>

            <ul role="list" className="mt-6 space-y-2 text-sm leading-5">
              <li className="flex items-start gap-2">
                <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                {site.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone aria-hidden="true" className="h-4 w-4 shrink-0" />
                <a href={site.phoneHref} className="transition-colors hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail aria-hidden="true" className="h-4 w-4 shrink-0" />
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-5">
            {footer.columns.map((column) => (
              <div key={column.heading}>
                <h2 className="text-sm leading-5 font-semibold tracking-[0.7px] text-white uppercase">
                  {column.heading}
                </h2>
                <ul role="list" className="mt-4 space-y-3 text-sm leading-5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="transition-colors hover:text-white">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-sm leading-5 font-semibold tracking-[0.7px] text-white uppercase">
              {footer.newsletter.heading}
            </h2>
            <p className="mt-4 text-sm leading-6">{footer.newsletter.blurb}</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-gray-800 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-5 text-gray-500">{footer.copyright}</p>
          <div className="flex flex-wrap items-center gap-6 text-sm leading-5 text-gray-500">
            {footer.legal.map((item) => (
              <span key={item}>{item}</span>
            ))}
            <a
              href={site.componentDock}
              target="_blank"
              rel="noopener"
              className="transition-colors hover:text-white"
            >
              More templates at Component Dock
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
