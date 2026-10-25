import { useState, type FormEvent } from 'react'
import { footer, site } from '../content'
import { Logo } from './Logo'
import { containerClass } from './ui'

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Brand marks are drawn inline — the icon package ships no brand glyphs. */
const socials = [
  {
    label: 'X',
    path: 'M3 3h4.2l4.3 5.8L16.7 3H21l-6.9 8.1L21.4 21h-4.2l-4.6-6.2L7.2 21H3l7.2-8.5L3 3Z',
    filled: true,
  },
  {
    label: 'Instagram',
    path: 'M12 8.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2Zm0-2.4c1.9 0 2.2 0 3 .1 2.1.1 3.3 1.3 3.4 3.4.1.8.1 1.1.1 3s0 2.2-.1 3c-.1 2.1-1.3 3.3-3.4 3.4-.8.1-1.1.1-3 .1s-2.2 0-3-.1c-2.1-.1-3.3-1.3-3.4-3.4-.1-.8-.1-1.1-.1-3s0-2.2.1-3C5.7 7.4 6.9 6.2 9 6.1c.8-.1 1.1-.1 3-.1Zm0 1.8a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4Zm5.2-.9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z',
    filled: true,
  },
  {
    label: 'LinkedIn',
    path: 'M6.94 8.5H4V20h2.94V8.5ZM5.47 4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20 13.6c0-3.1-1.65-4.55-3.86-4.55-1.78 0-2.58.98-3.02 1.67V8.5H10.2c.04.83 0 11.5 0 11.5h2.92v-6.42c0-.35.02-.7.13-.95.28-.7.9-1.42 1.96-1.42 1.39 0 1.94 1.05 1.94 2.6V20H20v-6.4Z',
    filled: true,
  },
]

/** Four columns, one newsletter, and a bottom bar that credits the marketplace. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  const subscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const value = email.trim()
    if (value === '') {
      setError(footer.errors.required)
      return
    }
    if (!EMAIL.test(value)) {
      setError(footer.errors.email)
      return
    }
    setError(null)
    setSent(true)
    setEmail('')
  }

  return (
    <footer className="bg-gray-900 pt-16 lg:pt-24">
      <div className={containerClass}>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-5 max-w-sm text-sm leading-6 text-gray-400">{footer.brandCopy}</p>
            <ul className="mt-6 flex items-center gap-2">
              {socials.map(({ label, path }) => (
                <li key={label}>
                  <span
                    aria-hidden="true"
                    title={label}
                    className="grid h-9 w-9 place-items-center rounded-lg bg-gray-800 text-gray-300"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d={path} />
                    </svg>
                  </span>
                </li>
              ))}
            </ul>
            <a href={`mailto:${site.email}`} className="mt-6 block text-sm leading-5 text-gray-600 hover:text-gray-300">
              {site.email}
            </a>
            <p className="mt-4 text-sm leading-5 font-medium text-accent-300">{footer.claim}</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-5">
            {footer.columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm leading-5 font-semibold tracking-[0.7px] text-white uppercase">{column.title}</h3>
                <ul className="mt-4 space-y-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-base leading-6 text-gray-400 transition-colors hover:text-white">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm leading-5 font-semibold tracking-[0.7px] text-white uppercase">
              {footer.newsletterTitle}
            </h3>
            <p className="mt-4 text-sm leading-6 text-gray-400">{footer.newsletterCopy}</p>
            <form className="mt-4" onSubmit={subscribe} noValidate>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <div className="flex gap-2">
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={footer.newsletterPlaceholder}
                  aria-invalid={error !== null}
                  aria-describedby={error === null ? undefined : 'newsletter-error'}
                  className="min-w-0 flex-1 rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder:text-gray-500"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700"
                >
                  {footer.newsletterCta}
                </button>
              </div>
              {error === null ? null : (
                <p id="newsletter-error" role="alert" className="mt-2 text-xs leading-5 text-red-400">
                  {error}
                </p>
              )}
              {sent ? (
                <p role="status" className="mt-2 text-xs leading-5 text-accent-300">
                  {footer.newsletterSuccess}
                </p>
              ) : null}
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-gray-800 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-5 text-gray-500">{footer.legal}</p>
          <p className="text-sm leading-5 text-gray-500">
            More templates at{' '}
            <a href={site.componentDock} className="font-medium text-gray-300 hover:text-white">
              {footer.componentDockLabel}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
