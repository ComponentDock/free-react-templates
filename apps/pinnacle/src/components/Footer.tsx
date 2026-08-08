import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'X', name: 'x' },
  { label: 'Instagram', name: 'instagram' },
  { label: 'LinkedIn', name: 'linkedin' },
]

const columns: ReadonlyArray<{
  heading: string
  links: ReadonlyArray<{ label: string; href: string }>
}> = [
  {
    heading: 'Top Products',
    links: [
      { label: 'Managed Website', href: '#home' },
      { label: 'Manage Reputation', href: '#service' },
      { label: 'Power Tools', href: '#service' },
      { label: 'Marketing Service', href: '#service' },
    ],
  },
  {
    heading: 'Quick Links',
    links: [
      { label: 'Jobs', href: '#home' },
      { label: 'Brand Assets', href: '#home' },
      { label: 'Investor Relations', href: '#home' },
      { label: 'Terms of Service', href: '#home' },
    ],
  },
  {
    heading: 'Features',
    links: [
      { label: 'Jobs', href: '#home' },
      { label: 'Brand Assets', href: '#home' },
      { label: 'Investor Relations', href: '#home' },
      { label: 'Terms of Service', href: '#home' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Guides', href: '#home' },
      { label: 'Research', href: '#home' },
      { label: 'Experts', href: '#home' },
      { label: 'Agencies', href: '#home' },
    ],
  },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer id="contact" className="bg-night text-white/70 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-5">
        {columns.map((column) => (
          <nav key={column.heading} aria-label={column.heading}>
            <h3 className="font-display text-lg font-medium uppercase tracking-wide text-white">
              {column.heading}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition-colors hover:text-brand">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h3 className="font-display text-lg font-medium uppercase tracking-wide text-white">
            Newsletter
          </h3>
          <p className="mt-4 text-sm leading-relaxed">
            You can trust us. We only send promo offers,
          </p>
          {subscribed ? (
            <p className="mt-4 text-sm font-medium text-brand" role="status">
              Thanks for subscribing!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 flex items-center gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Your email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email address"
                className="h-10 min-w-0 flex-1 rounded-lg border border-white/20 bg-white/10 px-3 text-sm text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand text-ink transition-colors hover:bg-brand-dark"
              >
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
          <p className="text-xs">© 2026 Pinnacle. All rights reserved.</p>
          <ul className="flex items-center gap-2">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href="#contact"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand hover:text-ink"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs">recreation of ColorLib Sparsh</p>
        </div>
      </div>
    </footer>
  )
}
