import { useState } from 'react'
import type { FormEvent } from 'react'
import { footer, site } from '../content'
import { Wordmark } from './Header'

const SOCIAL_PATHS: Record<string, string> = {
  instagram:
    'M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.4 1 .4.4.7.8 1 1.4.2.4.4 1 .4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-1 1.4-.4.4-.8.7-1.4 1-.4.2-1 .4-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4a3.9 3.9 0 0 1-1.4-1 3.9 3.9 0 0 1-1-1.4c-.2-.4-.4-1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.6.5-1 1-1.4.4-.4.8-.7 1.4-1 .4-.2 1-.4 2.3-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.4a6.4 6.4 0 1 0 0 12.8 6.4 6.4 0 0 0 0-12.8zm0 2.2a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4zm6.6-2.6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z',
  x: 'M17.5 3h3.2l-7 8 7.3 10h-5.6l-4.4-6.1L5.8 21H2.6l7.4-8.5L3 3h5.7l4.1 5.7L17.5 3zm-1.1 16h1.8L7.7 4.9H5.8L16.4 19z',
  linkedin:
    'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm6.5 0h3.8v1.7h.1c.5-.9 1.8-1.9 3.7-1.9 3.9 0 4.6 2.4 4.6 5.5V21h-4v-5.9c0-1.4 0-3.2-2-3.2s-2.2 1.5-2.2 3.1V21h-4V9z',
}

function SocialTile({ label, path }: { label: string; path: string }) {
  return (
    <a
      href="#top"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d={SOCIAL_PATHS[path] as string} />
      </svg>
    </a>
  )
}

/** Twelve-column footer: brand 4, link block 5, newsletter 3. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'invalid' | 'valid'>('idle')

  const subscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    if (!valid) {
      setStatus('invalid')
      return
    }

    setEmail('')
    setStatus('valid')
  }

  return (
    <footer className="bg-gray-900 pt-16 text-gray-300 lg:pt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Wordmark light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400">{footer.blurb}</p>
            <div className="mt-6 flex gap-2">
              {footer.socials.map((social) => (
                <SocialTile key={social.label} label={social.label} path={social.path} />
              ))}
            </div>
            <address className="mt-6 space-y-1 text-sm text-gray-400 not-italic">
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
            {footer.columns.map((column) => (
              <div key={column.title}>
                <h2 className="text-sm font-semibold tracking-wider text-white uppercase">
                  {column.title}
                </h2>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.target}
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
            <h2 className="text-sm font-semibold tracking-wider text-white uppercase">
              {footer.newsletter.title}
            </h2>
            <form className="mt-4" onSubmit={subscribe} noValidate>
              <label htmlFor="newsletter-email" className="sr-only">
                {footer.newsletter.label}
              </label>
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={footer.newsletter.placeholder}
                  aria-invalid={status === 'invalid'}
                  aria-describedby="newsletter-status"
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-primary-600 px-4 py-2.5 text-base font-medium text-white transition-colors hover:bg-primary-700 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:outline-none"
                >
                  {footer.newsletter.cta}
                </button>
              </div>
              <p
                id="newsletter-status"
                role="status"
                className={`mt-2 text-sm ${
                  status === 'invalid' ? 'text-primary-300' : 'text-gray-400'
                }`}
              >
                {status === 'invalid' ? footer.newsletter.invalid : ''}
                {status === 'valid' ? footer.newsletter.valid : ''}
              </p>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-gray-800 py-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>{site.copyright}</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footer.legal.map((link) => (
              <a
                key={link.label}
                href={link.target}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.componentDock}
              target="_blank"
              rel="noreferrer noopener"
              className="font-medium text-gray-300 transition-colors hover:text-white"
            >
              {footer.more}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
