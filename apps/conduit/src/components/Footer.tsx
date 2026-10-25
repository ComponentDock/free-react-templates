import { useState } from 'react'
import type { FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { InstagramIcon, LinkedInIcon, XIcon } from './BrandIcons'
import { footer, site } from '../content'
import { Wordmark } from './Header'
import { containerClass } from './ui'

export const NEWSLETTER_KEY = 'newsletter'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (email.trim().length === 0) {
      return
    }
    localStorage.setItem(NEWSLETTER_KEY, email.trim())
    setSent(true)
  }

  return (
    <div className="min-w-0">
      <h3 className="text-sm leading-5 font-semibold tracking-wider text-white uppercase">
        {footer.newsletter.heading}
      </h3>
      <p className="mt-4 text-sm leading-6 text-gray-400">{footer.newsletter.blurb}</p>

      {sent ? (
        <p data-testid="newsletter-sent" className="mt-4 text-sm font-semibold text-primary-300">
          {footer.newsletter.success}
        </p>
      ) : (
        <form className="mt-4 flex flex-wrap gap-2" onSubmit={submit}>
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            required
            placeholder={footer.newsletter.placeholder}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="min-w-0 flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm leading-5 text-white placeholder:text-gray-500"
          />
          <button
            type="submit"
            className="shrink-0 rounded-lg bg-primary-600 px-4 py-2.5 text-sm leading-5 font-medium text-white transition-colors hover:bg-primary-700"
          >
            {footer.newsletter.button}
          </button>
        </form>
      )}
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 text-gray-400 lg:pt-24">
      <div className={containerClass}>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Wordmark light large />
            <p className="mt-4 max-w-xs text-sm leading-6">{footer.blurb}</p>

            <div className="mt-6 flex gap-4">
              {[XIcon, InstagramIcon, LinkedInIcon].map((Icon, index) => (
                <a
                  key={index}
                  href="#contact"
                  aria-label={['Conduit on X', 'Conduit on Instagram', 'Conduit on LinkedIn'][index]}
                  className="rounded-lg bg-gray-800 p-2.5 text-gray-300 transition-colors hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <ul className="mt-6 space-y-2 text-sm leading-5">
              <li className="flex items-start gap-2">
                <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                {site.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone aria-hidden="true" className="h-4 w-4 shrink-0" />
                <a href={site.phoneHref} className="hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail aria-hidden="true" className="h-4 w-4 shrink-0" />
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-5">
            {footer.columns.map((column) => (
              <div key={column.heading}>
                <h3 className="text-sm leading-5 font-semibold tracking-wider text-white uppercase">
                  {column.heading}
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-5">
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
            <Newsletter />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-gray-800 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-5 text-gray-500">{footer.copyright}</p>
          <div className="flex flex-wrap items-center gap-6 text-sm leading-5 text-gray-500">
            {footer.legal.map((item) => (
              <a key={item.label} href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </a>
            ))}
            <a
              href={site.componentDock}
              className="transition-colors hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              {footer.attribution}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
