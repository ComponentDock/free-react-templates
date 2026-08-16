import type { FormEvent } from 'react'
import { useState } from 'react'
import { footerNav, footerServices } from '../data'
import { socialIcons } from './SocialIcons'

/** Near-black footer: brand + blurb + social circles, Navigation and Contact
 *  columns, a Subscribe Newsletter form and the Component Dock credit bar. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer id="contact" className="bg-night pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="grid grid-cols-1 gap-12 pb-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="mb-6 font-display text-2xl font-semibold uppercase text-white">
              Stalwart
            </p>
            <p className="mb-8 max-w-xs text-base font-light leading-relaxed text-muted">
              A full-service construction and architecture firm building homes, workplaces and
              public spaces that last for generations.
            </p>
            <ul className="flex gap-3">
              {socialIcons.map(({ label, Icon }) => (
                <li key={label}>
                  <a
                    href="#contact"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-transform hover:rotate-180"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-7 font-sans text-xl font-normal text-white">Navigation</h4>
            <ul className="space-y-3">
              {footerNav.map((label) => (
                <li key={label}>
                  <a
                    href="#home"
                    className="text-base font-light text-muted transition-colors hover:text-brand"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-7 font-sans text-xl font-normal text-white">Services</h4>
            <ul className="space-y-3">
              {footerServices.map((label) => (
                <li key={label}>
                  <a
                    href="#services"
                    className="text-base font-light text-muted transition-colors hover:text-brand"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-7 font-sans text-xl font-normal text-white">Subscribe Newsletter</h4>
            <p className="mb-5 text-sm font-light text-muted">
              87/A, Green Lane, Kings Garden, CA 6732
              <br />
              hello@stalwart.build
            </p>
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
                  className="h-12 w-full bg-white/10 px-4 text-sm text-white placeholder-muted outline-none focus:ring-2 focus:ring-brand"
                />
                <button type="submit" className="btn-red-pill self-start">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-white/20 py-6 text-center">
          <p className="text-sm font-light text-muted">
            © 2026 Stalwart — More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-normal text-brand hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
