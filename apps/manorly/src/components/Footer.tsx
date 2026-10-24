import { useState, type FormEvent } from 'react'
import { Logo } from './Header'

const siteLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Apartments', href: '#gallery' },
  { label: 'Contact Us', href: '#contact' },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<{ tone: 'error' | 'ok'; message: string } | null>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const address = email.trim()
    if (address === '') {
      setStatus({ tone: 'error', message: 'Please enter your email address.' })
      return
    }
    setStatus({ tone: 'ok', message: `Thanks — ${address} is subscribed to Manorly news.` })
  }

  return (
    <footer id="contact" className="bg-ink py-20 text-white/70 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-base font-semibold uppercase tracking-wide text-white">About Us</h3>
            <p className="mt-5 text-sm leading-relaxed">
              Heaven fruitful doesn&apos;t over lesser days appear creeping seasons so behold bearing
              days open.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold uppercase tracking-wide text-white">
              Contact Info
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>Address : 2963 Sunrise Avenue, Austin, TX 78701.</li>
              <li>
                Phone :{' '}
                <a href="tel:+18880443388" className="transition-colors hover:text-brand">
                  +1 888 044 3388
                </a>
              </li>
              <li>
                Email :{' '}
                <a href="mailto:hello@manorly.com" className="transition-colors hover:text-brand">
                  hello@manorly.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold uppercase tracking-wide text-white">
              Important Link
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {siteLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-brand">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold uppercase tracking-wide text-white">Newsletter</h3>
            <p className="mt-5 text-sm leading-relaxed">
              Heaven fruitful doesn&apos;t over lesser in days. Appear creeping seasons deve behold
              bearing days open.
            </p>
            <form onSubmit={handleSubmit} className="mt-5" noValidate>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email address"
                className="h-12 w-full rounded-sm border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
              />
              <button
                type="submit"
                className="mt-3 h-12 w-full rounded-sm bg-brand text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-ink"
              >
                Subscribe
              </button>
              {status && (
                <p
                  role={status.tone === 'error' ? 'alert' : 'status'}
                  className={
                    status.tone === 'error'
                      ? 'mt-3 text-sm text-brand'
                      : 'mt-3 text-sm text-white/80'
                  }
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6">
          <Logo className="[&_span]:text-white" />
          <p className="mt-4 text-xs text-white/50">
            Copyright © All rights reserved. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
