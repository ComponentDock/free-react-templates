import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { footerLinks, instaThumbs } from '../data'

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer className="bg-ink-900">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-30 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-lg font-medium text-white">About Vantage</h2>
            <p className="mt-5 text-sm leading-6 text-ink-600">
              A business &amp; finance consultancy that pairs sharp strategy with clean design to
              help ambitious companies grow with confidence.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-lg font-medium text-white">Navigation Links</h2>
            <ul className="mt-6 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-600 transition-colors hover:text-brand-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-lg font-medium text-white">Newsletter</h2>
            <p className="mt-5 text-sm leading-6 text-ink-600">
              Subscribe for monthly insight on finance, design, and growth.
            </p>
            {subscribed ? (
              <p className="mt-5 flex items-center gap-2 text-sm text-white">
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-5 flex gap-2">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email Address"
                  className={cn(
                    'w-full rounded-[5px] border border-white/20 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-400',
                  )}
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-[5px] bg-brand-400 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-400/80"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          <div>
            <h2 className="text-lg font-medium text-white">InstaFeed</h2>
            <ul className="mt-6 grid grid-cols-4 gap-2">
              {instaThumbs.map((src) => (
                <li key={src}>
                  <img src={src} alt="" className="h-[60px] w-full object-cover" loading="lazy" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-ink-600">Copyright © 2026 Vantage — All rights reserved</p>
          <p className="text-sm text-ink-600">Template crafted with care by Vantage</p>
        </div>
      </div>
    </footer>
  )
}
