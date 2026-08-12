import { useState, type FormEvent } from 'react'
import { FOOTER_COLUMNS, SOCIAL_LINKS, SOCIAL_PATHS } from '../data'

/* Footer (source: footer.footer-area — navy #002347 background, four link
   columns + a Newsletter column with an email form and subscribe button,
   bottom bar with the copyright line and social icons). The credit line
   links to Component Dock. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer id="contact" className="bg-primary">
      <div className="mx-auto max-w-[1140px] px-[15px] pb-[60px] pt-[100px]">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="lg:col-span-1">
              <h3 className="mb-8 font-heading text-[18px] font-medium text-white">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-[14px] text-white/60 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter widget (source: single-footer-widget Newsletter). */}
          <div className="lg:col-span-2">
            <h3 className="mb-8 font-heading text-[18px] font-medium text-white">Newsletter</h3>
            <p className="text-[14px] leading-[22px] text-white/60">
              You can trust us. we only send promo offers,
            </p>
            <form onSubmit={handleSubscribe} className="mt-4 flex">
              <input
                type="email"
                required
                placeholder="Your Email Address"
                aria-label="Your Email Address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full border border-white/20 bg-transparent px-4 py-3 text-[14px] text-white outline-none placeholder:text-white/50 focus:border-accent"
              />
              <button
                type="submit"
                className="shrink-0 bg-accent px-6 text-[13px] font-medium uppercase text-primary transition-colors hover:bg-primary hover:text-accent"
              >
                subscribe
              </button>
            </form>
            {subscribed && (
              <p className="mt-3 text-[14px] font-medium text-accent">Thanks for subscribing!</p>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/20 pt-8 sm:flex-row">
          <p className="text-[14px] text-white/60">
            Copyright ©2026 All rights reserved · More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-white underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              Component Dock
            </a>
          </p>
          <div className="flex gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent hover:text-accent"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d={SOCIAL_PATHS[social.label]} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
