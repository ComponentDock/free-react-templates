import { useState, type FormEvent, type SVGProps } from 'react'
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

function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.6.23 1 .5 1.4.95.45.44.72.85.95 1.4.17.4.37 1 .42 2.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.05 1.2-.25 1.8-.42 2.2-.23.6-.5 1-.95 1.4-.44.45-.85.72-1.4.95-.4.17-1 .37-2.2.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.05-1.8-.25-2.2-.42-.6-.23-1-.5-1.4-.95-.45-.44-.72-.85-.95-1.4-.17-.4-.37-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.05-1.2.25-1.8.42-2.2.23-.6.5-1 .95-1.4.44-.45.85-.72 1.4-.95.4-.17 1-.37 2.2-.42C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.8.07-1 .04-1.5.2-1.9.35-.4.16-.7.35-1 .65-.3.3-.5.6-.65 1-.15.4-.3.9-.35 1.9C3.2 9.3 3.2 9.7 3.2 12s0 2.7.07 4c.04 1 .2 1.5.35 1.9.16.4.35.7.65 1 .3.3.6.5 1 .65.4.15.9.3 1.9.35 1.3.07 1.7.07 4.8.07s3.5 0 4.8-.07c1-.04 1.5-.2 1.9-.35.4-.16.7-.35 1-.65.3-.3.5-.6.65-1 .15-.4.3-.9.35-1.9.07-1.3.07-1.7.07-4s0-2.7-.07-4c-.04-1-.2-1.5-.35-1.9a2.7 2.7 0 0 0-.65-1c-.3-.3-.6-.5-1-.65-.4-.15-.9-.3-1.9-.35C15.5 4 15.1 4 12 4zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2zm5.1-.6a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z" />
    </svg>
  )
}

const SOCIALS = [
  { label: 'X', href: 'https://x.com/', Icon: XIcon },
  { label: 'Facebook', href: 'https://www.facebook.com/', Icon: FacebookIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/', Icon: InstagramIcon },
]

const COMPANY_LINKS = ['Why choose us', 'Reviews', 'Customers', 'Blog', 'Careers']
const PRODUCT_LINKS = ['Shared hosting', 'Cloud hosting', 'VPS hosting', 'Email hosting', 'Domains']
const SUPPORT_LINKS = ['Technology', 'Products', 'Customers', 'Quality', 'Sales offices']

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * The violet footer band: three link columns plus a newsletter column with the
 * wordmark, an e-mail field and the round social links. The e-mail form is
 * validated locally and confirms through a polite live region, and the bottom
 * line credits Component Dock.
 */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const value = email.trim()
    if (!EMAIL_PATTERN.test(value)) {
      setError('Enter a valid e-mail address to subscribe.')
      setMessage('')
      return
    }
    setError('')
    setMessage(`Thanks — we will keep ${value} posted.`)
  }

  return (
    <footer id="contact" className="bg-gradient-to-b from-violet-deep to-violet text-footer-link">
      <div className="mx-auto max-w-[1140px] px-5 pt-[160px] pb-[50px]">
        <div className="grid gap-12 lg:grid-cols-[2fr_2fr_3fr_3fr]">
          <nav aria-label="Company">
            <h4 className="font-heading text-[22px] font-normal text-footer-link">Company</h4>
            <ul className="mt-6 space-y-[15px]">
              {COMPANY_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#features"
                    className="text-base font-light text-footer-link transition-all hover:pl-[5px] hover:text-brand"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Products">
            <h4 className="font-heading text-[22px] font-normal text-footer-link">Products</h4>
            <ul className="mt-6 space-y-[15px]">
              {PRODUCT_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#pricing"
                    className="text-base font-light text-footer-link transition-all hover:pl-[5px] hover:text-brand"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Support">
            <h4 className="font-heading text-[22px] font-normal text-footer-link">Support</h4>
            <ul className="mt-6 space-y-[15px]">
              {SUPPORT_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#support"
                    className="text-base font-light text-footer-link transition-all hover:pl-[5px] hover:text-brand"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <Wordmark />
            <p className="mt-5 text-base font-light text-footer-link">
              Subscribe to our newsletter for hosting news and service updates
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-6">
              <label htmlFor="footer-email" className="sr-only">
                E-mail address
              </label>
              <input
                id="footer-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Your e-mail address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-describedby="footer-newsletter-status"
                aria-invalid={error !== ''}
                className="h-[43px] w-full rounded-[14px] border border-footer-border bg-transparent px-5 text-center text-white outline-none placeholder:text-footer-link focus-visible:border-brand"
              />
              <button
                type="submit"
                className="mt-6 w-full rounded-[10px] bg-brand px-[22px] py-[13px] text-sm font-semibold text-white transition-colors hover:bg-brand-deep focus-visible:ring-2 focus-visible:ring-white"
              >
                Subscribe
              </button>
            </form>

            <p
              id="footer-newsletter-status"
              role="status"
              aria-live="polite"
              className="mt-3 min-h-6 text-sm text-brand"
            >
              {error || message}
            </p>

            <ul className="mt-6 flex items-center gap-4">
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white text-white transition-colors hover:bg-brand"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 px-5 pt-[33px] pb-5">
        <p className="mx-auto max-w-[1140px] text-center text-lg font-light text-footer-link">
          Copyright © 2026 Presto. All rights reserved. More templates at{' '}
          <a href="https://www.componentdock.com/" className="text-white hover:underline">
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
