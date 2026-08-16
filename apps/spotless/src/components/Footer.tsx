import { useState } from 'react'
import { Mail, MapPin, Phone, Sparkles } from 'lucide-react'

const companyLinks = ['About', 'Services', 'FAQs', 'Contact'] as const
const serviceLinks = ['Classic', 'Personal', 'Professional', 'Premium'] as const

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
    }
  }

  return (
    <footer id="contact" className="bg-navy">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Brand + contact */}
        <div>
          <a href="#home" className="flex items-center gap-2" aria-label="Spotless home">
            <Sparkles className="h-6 w-6 text-accent" aria-hidden="true" />
            <span className="text-2xl font-bold uppercase tracking-wide text-white">Spotless</span>
          </a>
          <address className="mt-6 space-y-3 text-sm not-italic leading-relaxed text-white/75">
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              777 Kansas Star Drive, Mulvane, KS 67110, USA
            </p>
            <p className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              +1 316-719-5000
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              hello@spotless.example
            </p>
          </address>
        </div>

        {/* Company links */}
        <nav aria-label="Company">
          <h3 className="text-lg font-medium uppercase tracking-widest text-white">Company</h3>
          <ul className="mt-6 space-y-3">
            {companyLinks.map((label) => (
              <li key={label}>
                <a
                  href="#about"
                  className="text-sm text-white/75 transition-colors hover:text-accent"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services links */}
        <nav aria-label="Services">
          <h3 className="text-lg font-medium uppercase tracking-widest text-white">Services</h3>
          <ul className="mt-6 space-y-3">
            {serviceLinks.map((label) => (
              <li key={label}>
                <a
                  href="#services"
                  className="text-sm text-white/75 transition-colors hover:text-accent"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-medium uppercase tracking-widest text-white">Newsletter</h3>
          <p className="mt-6 text-sm leading-relaxed text-white/75">
            Subscribe for cleaning tips, seasonal offers, and news from our team.
          </p>
          {subscribed ? (
            <p role="status" className="mt-4 text-sm font-medium text-accent">
              Thanks for subscribing!
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="mt-4 flex">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email"
                className="w-full rounded-l-full border-0 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="shrink-0 rounded-r-full bg-accent px-5 py-3 text-sm font-semibold uppercase tracking-wider text-heading transition-colors hover:bg-accent-dark"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-white/60 sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} Spotless. All rights reserved.</p>
          <p>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-accent transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
