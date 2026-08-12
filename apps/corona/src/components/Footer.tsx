import { useState } from 'react'
import { Send } from 'lucide-react'

/* Footer (source: .footer-area on a dark background — 5 widgets incl. the
   Newsletter signup, plus a neutral copyright bar whose original "made
   with by" watermark is replaced by the Component Dock link). */
const WIDGETS = [
  {
    heading: 'Top Products',
    links: ['Managed Website', 'Manage Reputation', 'Power Tools', 'Marketing Service'],
  },
  {
    heading: 'Quick Links',
    links: ['Jobs', 'Brand Assets', 'Investor Relations', 'Terms of Service'],
  },
  {
    heading: 'Features',
    links: ['Jobs', 'Brand Assets', 'Investor Relations', 'Terms of Service'],
  },
  {
    heading: 'Resources',
    links: ['Guides', 'Research', 'Experts', 'Agencies'],
  },
]

export function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  return (
    <footer id="contacts" className="bg-ink">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-10 px-[15px] pb-14 pt-20 sm:grid-cols-2 lg:grid-cols-5">
        {WIDGETS.map((widget) => (
          <div key={widget.heading}>
            <h3 className="mb-[35px] text-[18px] font-bold text-white">{widget.heading}</h3>
            <ul className="space-y-3">
              {widget.links.map((label) => (
                <li key={label}>
                  <a
                    href="#home"
                    className="text-[13px] text-white/70 transition-colors hover:text-brand"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="mb-[35px] text-[18px] font-bold text-white">Newsletter</h3>
          <p className="text-[13px] leading-6 text-white/70">
            You can trust us. We only send promo offers, subscribe.
          </p>
          <form
            className="mt-5 flex"
            onSubmit={(event) => {
              event.preventDefault()
              setSubscribed(true)
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Your Email Address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your Email Address"
              className="w-full bg-white/10 px-4 py-3 text-[13px] text-white outline-none placeholder:text-white/60"
            />
            <button
              type="submit"
              aria-label="Subscribe to newsletter"
              className="bg-brand px-4 text-white transition-colors hover:bg-brand-2"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
          {subscribed && (
            <p className="mt-3 text-[12px] text-white/80" role="status">
              You&apos;re subscribed — thanks!
            </p>
          )}
        </div>
      </div>

      {/* Copyright bar — the original watermark is replaced by the branded
          Component Dock link (monorepo footer mandate). */}
      <div className="border-t border-white/10 px-[15px] py-6 text-center">
        <p className="text-[13px] text-white/70">
          © 2026 Corona. All rights reserved. More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-medium text-white underline-offset-2 hover:text-brand hover:underline"
          >
            Component Dock
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
