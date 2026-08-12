import { useState, type FormEvent } from 'react'
import {
  ABOUT_TEXT,
  ACCOUNT_LINKS,
  BRAND,
  PAYMENT_METHODS,
  QUICK_LINKS,
  SOCIAL_LINKS,
} from '../data'
import { BrandIcon } from './BrandIcon'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/* footer — brand + about paragraph, payment badges, Quick Links and Account
   columns, a newsletter form with inline validation, social icons and the
   copyright bar, mirroring the original's footer. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)
  const year = new Date().getFullYear()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_RE.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError(null)
    setSubscribed(true)
  }

  return (
    <footer id="contact" className="bg-ink py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="text-2xl font-black tracking-widest uppercase">{BRAND}</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">{ABOUT_TEXT}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {PAYMENT_METHODS.map((method) => (
              <span
                key={method}
                className="rounded border border-white/20 px-2 py-1 text-xs font-medium text-white/80"
              >
                {method}
              </span>
            ))}
          </div>
        </div>

        <nav aria-label="Quick links">
          <h2 className="text-sm font-semibold tracking-widest text-white/90 uppercase">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-2">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Account">
          <h2 className="text-sm font-semibold tracking-widest text-white/90 uppercase">Account</h2>
          <ul className="mt-4 space-y-2">
            {ACCOUNT_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold tracking-widest text-white/90 uppercase">
            Newsletter
          </h2>
          {subscribed ? (
            <p role="status" className="mt-4 rounded bg-brand/20 px-4 py-3 text-sm text-white">
              Thanks for subscribing!
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-4">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email"
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? 'footer-email-error' : undefined}
                className="h-11 w-full rounded-full border border-white/20 bg-transparent px-4 text-sm text-white placeholder:text-white/50 focus:border-brand focus:outline-none"
              />
              <button
                type="submit"
                className="mt-3 h-11 w-full cursor-pointer rounded-full bg-brand text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-brand/90"
              >
                Subscribe
              </button>
            </form>
          )}
          {error && (
            <p id="footer-email-error" role="alert" className="mt-2 text-sm text-red-300">
              {error}
            </p>
          )}
          <div className="mt-6 flex gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-brand hover:text-white"
              >
                <BrandIcon name={social.name} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/60">
        © {year} {BRAND}. All rights reserved.
      </p>
    </footer>
  )
}
