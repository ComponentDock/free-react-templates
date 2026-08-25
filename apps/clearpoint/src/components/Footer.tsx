import type { FormEvent } from 'react'
import { useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { footerNav, footerServices } from '../data'
import { socialIcons } from './SocialIcons'

/** Dark 4-column footer: about text + social circles, Navigation and
 *  Services link columns, a Subscribe Newsletter form (mint SIGN UP button),
 *  and a copyright bar with the Component Dock credit + Go to Top link. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setSubscribed(true)
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="bg-ink">
      <div className="mx-auto max-w-7xl px-6 pt-20 lg:px-16">
        <div className="grid grid-cols-1 gap-12 pb-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="mb-6 font-display text-2xl font-semibold uppercase tracking-wide text-white">
              Adviso<span className="text-brand">.</span>
            </p>
            <p className="mb-8 max-w-xs text-base font-light leading-relaxed text-white/60">
              The automated process starts as soon as your business plan meets our consulting team —
              strategy, data and execution in one place.
            </p>
            <ul className="flex gap-3">
              {socialIcons.map(({ label, Icon }) => (
                <li key={label}>
                  <a
                    href="#contact"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand hover:text-ink"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-7 font-display text-xl font-medium text-white">Navigation</h4>
            <ul className="space-y-3">
              {footerNav.map((label) => (
                <li key={label}>
                  <a
                    href="#home"
                    className="text-base font-light text-white/60 transition-colors hover:text-brand"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-7 font-display text-xl font-medium text-white">Services</h4>
            <ul className="space-y-3">
              {footerServices.map((label) => (
                <li key={label}>
                  <a
                    href="#services"
                    className="text-base font-light text-white/60 transition-colors hover:text-brand"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-7 font-display text-xl font-medium text-white">
              Subscribe Newsletter
            </h4>
            {subscribed ? (
              <p role="status" className="text-sm font-medium text-brand">
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email"
                  className="h-12 w-full bg-white/10 px-4 text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-brand"
                />
                <button type="submit" className="btn-mint-news">
                  Sign Up
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/15 py-6 sm:flex-row">
          <p className="text-sm font-light text-white/60">
            © 2026 Adviso — More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-normal text-brand hover:underline"
            >
              Component Dock
            </a>
          </p>
          <button
            type="button"
            onClick={scrollTop}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-ink transition-colors hover:bg-brand-dark"
            aria-label="Go to top"
          >
            <ArrowUp className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}
