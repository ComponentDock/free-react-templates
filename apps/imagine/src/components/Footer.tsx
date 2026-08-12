import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import { BehanceIcon, DribbbleIcon, FacebookIcon, TwitterIcon } from './SocialIcons'

const PRODUCT_LINKS = [
  { label: 'Managed Website', href: '#home' },
  { label: 'Manage Reputation', href: '#home' },
  { label: 'Power Tools', href: '#home' },
  { label: 'Marketing Service', href: '#home' },
] as const

const INSTAGRAM_THUMBS = Array.from({ length: 8 }, (_, index) => ({
  src: `https://picsum.photos/seed/imagine-insta-${index + 1}/200/200`,
  alt: `Instagram feed photo ${index + 1}`,
}))

const SOCIALS = [
  { label: 'Facebook', icon: FacebookIcon },
  { label: 'Twitter', icon: TwitterIcon },
  { label: 'Dribbble', icon: DribbbleIcon },
  { label: 'Behance', icon: BehanceIcon },
] as const

/* Footer recreated from the source's dark three-column footer: a Top
   Products link list, a newsletter form with validation and a success
   state, an Instagram feed strip, and a bottom bar with the copyright
   line (linking Component Dock per repo conventions) and social squares. */

export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      setSubscribed(false)
      return
    }
    setError(null)
    setSubscribed(true)
  }

  return (
    <footer className="bg-footer pb-8 pt-24 text-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Top Products */}
          <div>
            <h3 className="text-lg font-semibold">Top Products</h3>
            <ul className="mt-6 space-y-3">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white transition-colors hover:text-periwinkle"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="mt-6 text-sm leading-relaxed text-white/70">
              You can trust us. We only send promo offers, not a single spam.
            </p>
            {subscribed ? (
              <p role="status" className="mt-6 text-sm font-medium text-white">
                Thanks for subscribing! Check your inbox to confirm.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6" noValidate>
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <div className="flex max-w-sm items-center rounded-full bg-white p-1.5">
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter email"
                    className="w-full bg-transparent px-4 text-sm text-ink placeholder:text-gray-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-start to-brand-end px-6 py-2.5 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:from-brand-end hover:to-brand-start"
                  >
                    Subscribe
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </form>
            )}
            {error && (
              <p role="alert" className="mt-3 text-sm text-white">
                {error}
              </p>
            )}
          </div>

          {/* Instagram Feed */}
          <div>
            <h3 className="text-lg font-semibold">Instagram Feed</h3>
            <div className="mt-6 grid max-w-xs grid-cols-4 gap-2">
              {INSTAGRAM_THUMBS.map((thumb) => (
                <img
                  key={thumb.src}
                  src={thumb.src}
                  alt={thumb.alt}
                  className="aspect-square w-full rounded object-cover"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
          <p className="text-sm text-white/70">
            Copyright &copy;2026 All rights reserved | Made with{' '}
            <span aria-hidden="true">&hearts;</span>{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-white transition-colors hover:text-periwinkle"
            >
              Component Dock
            </a>
          </p>
          <div className="flex gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href="#home"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center bg-social text-white transition-colors hover:bg-gradient-to-r hover:from-brand-start hover:to-brand-end"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
