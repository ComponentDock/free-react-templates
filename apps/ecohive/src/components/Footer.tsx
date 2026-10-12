import { useState, type SVGProps } from 'react'
import { Wordmark } from './Wordmark'

type IconProps = SVGProps<SVGSVGElement>

function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function PinterestIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 0 0-3.64 19.31c-.09-.79-.17-2-.03-2.87.15-.8 1-5.1 1-5.1s-.26-.52-.26-1.29c0-1.21.7-2.11 1.57-2.11.74 0 1.1.56 1.1 1.22 0 .75-.48 1.86-.72 2.9-.21.87.44 1.58 1.3 1.58 1.56 0 2.76-1.65 2.76-4.03 0-2.11-1.51-3.58-3.67-3.58-2.5 0-3.97 1.87-3.97 3.81 0 .75.29 1.56.65 2 .07.09.08.17.06.26-.07.29-.23.91-.26 1.04-.04.17-.13.2-.31.12-1.16-.54-1.88-2.23-1.88-3.59 0-2.92 2.12-5.6 6.12-5.6 3.21 0 5.71 2.29 5.71 5.35 0 3.19-2.01 5.76-4.8 5.76-.94 0-1.82-.49-2.12-1.07l-.58 2.2c-.21.8-.77 1.81-1.15 2.42A10 10 0 1 0 12 2z" />
    </svg>
  )
}

const SOCIALS = [
  { label: 'X', href: 'https://x.com/', Icon: XIcon },
  { label: 'Facebook', href: 'https://www.facebook.com/', Icon: FacebookIcon },
  { label: 'Pinterest', href: 'https://www.pinterest.com/', Icon: PinterestIcon },
]

const COMPANY_LINKS = ['About us', 'Services', 'Customer stories', 'Blog', 'Careers']
const PRODUCT_LINKS = [
  'Shared Hosting',
  'Cloud Hosting',
  'WordPress Hosting',
  'VPS Hosting',
  'Email Hosting',
]
const SUPPORT_LINKS = ['Help center', 'Contact us', 'Sign in', 'Create account', 'Domain search']

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Footer() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const value = email.trim()
    if (!EMAIL_PATTERN.test(value)) {
      setError('Enter your email address to subscribe.')
      setMessage('')
      return
    }
    setError('')
    setMessage(`Thanks — we will keep ${value} posted.`)
  }

  return (
    <footer id="contact" className="bg-shell text-white">
      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-4 py-14 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-heading text-2xl font-bold">Join the Ecohive newsletter</h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              Hosting tips, product news and occasional offers — no more than once a month.
            </p>
            <ul className="mt-6 flex items-center gap-4">
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent hover:text-shell"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit} noValidate className="lg:justify-self-end lg:text-right">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-describedby="newsletter-status"
                className="font-body h-12 rounded-full border border-white/20 bg-white/5 px-5 text-sm text-white outline-none placeholder:text-muted focus-visible:border-accent sm:w-72"
              />
              <button
                type="submit"
                className="bg-gradient-to-b from-gradient-from to-gradient-to font-heading h-12 rounded-full px-8 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:outline-none"
              >
                Subscribe
              </button>
            </div>
            <p
              id="newsletter-status"
              role="status"
              aria-live="polite"
              className="mt-3 text-sm text-muted"
            >
              {error || message}
            </p>
          </form>
        </div>
      </div>

      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Wordmark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              Ecohive runs renewable-powered hosting for small businesses, shops and developers:
              domains, shared and WordPress hosting, cloud instances and email, with people on hand
              around the clock.
            </p>
          </div>

          <nav aria-label="Company">
            <h4 className="font-heading text-lg font-semibold">Company</h4>
            <ul className="mt-5 space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#home"
                    className="text-sm text-muted transition-colors hover:text-white hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Products">
            <h4 className="font-heading text-lg font-semibold">Products</h4>
            <ul className="mt-5 space-y-3">
              {PRODUCT_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#pricing"
                    className="text-sm text-muted transition-colors hover:text-white hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Support">
            <h4 className="font-heading text-lg font-semibold">Support</h4>
            <ul className="mt-5 space-y-3">
              {SUPPORT_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#faq"
                    className="text-sm text-muted transition-colors hover:text-white hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-muted sm:flex-row">
        <p>Copyright © 2026 Ecohive. All rights reserved.</p>
        <p>
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-medium text-white hover:underline"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
