import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import { validateEmail } from '../lib/newsletter'

const NAV_LINKS_LEFT = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#services' },
  { label: 'Services', href: '#places' },
  { label: 'Portfolio', href: '#packages' },
] as const

const NAV_LINKS_RIGHT = [
  { label: 'Team', href: '#team' },
  { label: 'Pricing', href: '#packages' },
  { label: 'Blog', href: '#blog' },
  { label: 'contact', href: '#newsletter' },
] as const

const INSTA = [
  'outpost-insta-1',
  'outpost-insta-2',
  'outpost-insta-3',
  'outpost-insta-4',
  'outpost-insta-5',
  'outpost-insta-6',
  'outpost-insta-7',
  'outpost-insta-8',
] as const

const FOOTER_LINK_CLASS = 'text-footlink transition-colors hover:text-brand'

/* Navy footer: About Agency, two navigation lists, a newsletter form and the
   Instagram feed, closing on a Component Dock line. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const message = validateEmail(email)
    if (message) {
      setError(message)
      setSubscribed(false)
      return
    }
    setError(null)
    setSubscribed(true)
  }

  return (
    <footer id="contact" className="bg-navy pt-[120px] text-white/70">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="grid gap-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="font-display text-[18px] font-bold text-white">About Agency</h4>
            <p className="mt-5">
              Outpost plans guided adventure travel — mountain, desert and coast — with small
              groups, local leaders and permits handled before you fly.
            </p>
          </div>

          <div>
            <h4 className="font-display text-[18px] font-bold text-white">Navigation Links</h4>
            <div className="mt-5 flex gap-10">
              <ul className="space-y-[10px]">
                {NAV_LINKS_LEFT.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={FOOTER_LINK_CLASS}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-[10px]">
                {NAV_LINKS_RIGHT.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={FOOTER_LINK_CLASS}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-display text-[18px] font-bold text-white">Newsletter</h4>
            <p className="mt-5">Get the new routes before they open.</p>
            <form onSubmit={onSubmit} noValidate className="mt-5 flex">
              <label htmlFor="outpost-footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="outpost-footer-email"
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter Email"
                className="h-12 w-full border border-white/20 bg-transparent px-4 text-white outline-none focus:border-brand"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="brand-gradient flex h-12 w-12 shrink-0 items-center justify-center text-white"
              >
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
            {error ? (
              <p role="alert" className="mt-2 text-[13px] text-brand">
                {error}
              </p>
            ) : null}
            {subscribed ? (
              <p role="status" className="mt-2 text-[13px] text-white">
                Thanks! You are on the list.
              </p>
            ) : null}
          </div>

          <div>
            <h4 className="font-display text-[18px] font-bold text-white">Instagram Feed</h4>
            <div className="mt-5 grid grid-cols-4 gap-2">
              {INSTA.map((seed) => (
                <img
                  key={seed}
                  src={`https://picsum.photos/seed/${seed}/120/120`}
                  alt="Outpost on Instagram"
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              ))}
            </div>
          </div>
        </div>

        <p className="border-t border-white/10 py-8 text-center">
          © {new Date().getFullYear()} Outpost. All rights reserved. More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-colors hover:text-brand"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
