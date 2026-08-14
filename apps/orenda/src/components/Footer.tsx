import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { footerColumns, socials } from '../data'
import { BrandIcon, type SocialName } from './BrandIcon'

/** Very dark navy `#0b0b1d` footer: "Subscribe Now" newsletter block,
 *  "Let's Get Social" icons, four link columns, and a bottom bar with the
 *  copyright line and the Component Dock attribution link. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
    }
  }

  return (
    <footer className="bg-footer text-gray-400">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="border-b border-white/10 pb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">Stay Updated</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-white">Subscribe Now</h2>
          <p className="mt-3 text-sm">Never miss a new course — join our newsletter.</p>
          {subscribed ? (
            <p role="status" className="mt-6 text-sm font-semibold text-check">
              Subscribed — thank you for joining Orenda!
            </p>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="orenda-newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="orenda-newsletter-email"
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="h-12 flex-1 border border-white/15 bg-transparent px-4 text-sm text-white outline-none transition-colors placeholder:text-gray-500 focus:border-brand"
              />
              <Button
                type="submit"
                variant="primary"
                className="h-12 rounded-none bg-brand px-8 text-sm font-semibold uppercase tracking-wider text-white hover:bg-sweep"
              >
                Subscribe
              </Button>
            </form>
          )}
        </div>

        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((column) => (
            <nav key={column.heading} aria-label={`Footer ${column.heading}`}>
              <h3 className="font-display text-base font-semibold text-white">{column.heading}</h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <div>
            <h3 className="font-display text-base font-semibold text-white">
              Let&apos;s Get Social
            </h3>
            <ul className="mt-3 flex gap-3">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href="#home"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center bg-white/10 text-gray-300 transition-colors hover:bg-brand hover:text-white"
                  >
                    <BrandIcon name={social.name as SocialName} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm">
            Copyright © {new Date().getFullYear()} All rights reserved | Made with ♥ by Orenda ·
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-semibold text-white underline transition-colors hover:text-cyan"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
