import { useState, type FormEvent } from 'react'
import { footer, socials } from '../data'
import { BrandIcon } from './BrandIcon'

/** Dark footer (reference `footer` with `background: #333333`): About Us +
 *  social icons, a Features link column, a newsletter subscribe form, and a
 *  copyright bar crediting Component Dock. */
export function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer className="bg-footer text-[#999999]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="font-heading text-base font-bold text-white">About Us</h3>
          <p className="mt-5 text-sm leading-relaxed text-[#737373]">{footer.about}</p>
          <div className="mt-6 flex gap-4">
            {socials.map(({ label, name }) => (
              <a
                key={label}
                href="#contact"
                aria-label={label}
                className="text-[#999999] transition-colors hover:text-white"
              >
                <BrandIcon name={name} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-base font-bold text-white">Features</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {footer.featureLinks.map((label) => (
              <li key={label}>
                <a href="#home" className="transition-colors hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-base font-bold text-white">Subscribe to Newsletter</h3>
          <p className="mt-5 text-sm leading-relaxed text-[#737373]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <form onSubmit={handleSubscribe} className="mt-6 flex" aria-label="Newsletter form">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Email"
              className="h-12 w-full border border-white/10 bg-transparent px-4 text-sm text-white placeholder:text-[#999999] outline-none focus:border-primary-600"
            />
            <button
              type="submit"
              className="h-12 shrink-0 bg-primary-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
            >
              Subscribe
            </button>
          </form>
          {subscribed ? (
            <p role="status" className="mt-4 text-sm font-semibold text-white">
              Thanks for subscribing!
            </p>
          ) : null}
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-1 px-4 py-6 text-center text-sm text-[#737373] sm:flex-row">
          Copyright © 2026 All rights reserved
          <span>
            {' '}
            | Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-semibold text-white underline-offset-4 transition-colors hover:underline"
            >
              Component Dock
            </a>
          </span>
        </p>
      </div>
    </footer>
  )
}
