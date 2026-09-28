import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

const footerLinks = {
  'Top Products': [
    'Honey Chocolate Pie',
    'Artisan Bread',
    'Pasta Carbonara',
    'Grilled Salmon',
    'Bruschetta',
  ],
  'Quick Links': ['About Us', 'Our Menu', 'Book a Table', 'Contact Us', 'Blog'],
  Features: [
    'Fresh Ingredients',
    'Wood-Fired Oven',
    'Local Sourcing',
    'Daily Specials',
    'Catering',
  ],
  Resources: ['Privacy Policy', 'Terms of Service', 'FAQ', 'Careers', 'Gift Cards'],
} as const

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function DribbbleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.245.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
    </svg>
  )
}

function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M7.5 11c1.38 0 2.5-1.12 2.5-2.5S8.88 6 7.5 6H3v5h4.5zm0-7C10.54 4 13 6.46 13 9.5S10.54 15 7.5 15H3V4h4.5zM21 14.5c0-2.49-2.01-4.5-4.5-4.5s-4.5 2.01-4.5 4.5c0 2.49 2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5zm-6.5 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zM17 6h5v1.5h-5z" />
    </svg>
  )
}

export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError('A valid email address is required.')
      return
    }
    setError('')
    setSubscribed(true)
  }

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        {/* Link columns */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 font-display text-lg font-bold">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 transition-colors hover:text-brand"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 font-display text-lg font-bold">Newsletter</h3>
            <p className="mb-4 text-sm text-gray-400">
              Subscribe to get updates on our latest offers and specials.
            </p>
            {subscribed ? (
              <p className="rounded border border-brand/40 bg-brand/10 px-4 py-3 text-sm text-brand">
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} noValidate>
                <label htmlFor="footer-newsletter" className="sr-only">
                  Enter Email
                </label>
                <div className="flex">
                  <input
                    id="footer-newsletter"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email"
                    aria-invalid={Boolean(error)}
                    className="flex-1 rounded-l-full bg-white/10 px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="rounded-r-full bg-brand px-4 py-2 text-white transition-colors hover:bg-brand-dark"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                {error ? (
                  <p role="alert" className="mt-2 text-sm text-red-400">
                    {error}
                  </p>
                ) : null}
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:px-8">
          <p className="text-sm text-gray-400">
            Made with ❤ by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand underline transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 transition-colors hover:text-brand"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 transition-colors hover:text-brand"
            >
              <TwitterIcon className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Dribbble"
              className="text-gray-400 transition-colors hover:text-brand"
            >
              <DribbbleIcon className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Behance"
              className="text-gray-400 transition-colors hover:text-brand"
            >
              <BehanceIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
