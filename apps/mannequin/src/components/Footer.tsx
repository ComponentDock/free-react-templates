import { useState, type FormEvent } from 'react'
import { footerAddress, footerCategories, footerHelp, footerPhone } from '../data'
import { socialIcons } from './SocialIcons'

/** Dark four-column footer (bg #222): Categories, Help, Get in Touch and
 *  a Newsletter form; copyright bar credits Component Dock. */
export function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer className="bg-ink px-6 pb-8 pt-[75px] lg:px-16">
      <div className="mx-auto grid max-w-[1700px] grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h4 className="font-heading text-[15px] font-bold uppercase tracking-wide text-white">
            Categories
          </h4>
          <ul className="mt-8 space-y-[10px]">
            {footerCategories.map((item) => (
              <li key={item}>
                <a href="#" className="link-fade">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-[15px] font-bold uppercase tracking-wide text-white">
            Help
          </h4>
          <ul className="mt-8 space-y-[10px]">
            {footerHelp.map((item) => (
              <li key={item}>
                <a href="#" className="link-fade">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-[15px] font-bold uppercase tracking-wide text-white">
            Get in touch
          </h4>
          <address className="mt-8 space-y-[10px] text-[13px] not-italic leading-relaxed text-fade">
            <p>{footerAddress}</p>
            <p>{footerPhone}</p>
          </address>
          <div className="mt-6 flex gap-4 text-fade">
            {socialIcons.map(({ label, Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="transition-colors hover:text-brand"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-[15px] font-bold uppercase tracking-wide text-white">
            Newsletter
          </h4>
          {subscribed ? (
            <p role="status" className="mt-8 text-[14px] text-white">
              Thank you for subscribing!
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="mt-8">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Email Address"
                className="input-underline"
              />
              <button type="submit" className="btn-pill-brand mt-6 min-w-[179px]">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="mx-auto mt-[75px] max-w-[1700px] flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-[14px] text-fade sm:flex-row">
        <p>Copyright © 2026 All rights reserved.</p>
        <p>
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-white transition-colors hover:text-brand"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
