import { useState, type FormEvent } from 'react'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

const footerColumns = [
  {
    title: 'Top Products',
    links: ['Managed Website', 'Manage Reputation', 'Power Tools', 'Marketing Service'],
  },
  {
    title: 'Quick Links',
    links: ['Careers', 'Brand Assets', 'Investor Relations', 'Terms of Service'],
  },
  {
    title: 'Features',
    links: ['Jobs', 'Brand Assets', 'Investor Relations', 'Terms of Service'],
  },
  {
    title: 'Resources',
    links: ['Guides', 'Research', 'Experts', 'Agencies'],
  },
] as const

export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError('A valid email address is required.')
      return
    }
    setError('')
    setSubscribed(true)
  }

  return (
    <footer className="bg-ink text-white transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-5">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-brand">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition-colors hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-brand">
              Newsletter
            </h3>
            <p className="mt-4 text-sm text-gray-400">Stay updated with our latest</p>
            {subscribed ? (
              <p className="mt-3 rounded border border-brand/40 bg-brand/10 px-3 py-2 text-xs text-brand">
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} noValidate className="mt-3">
                <label htmlFor="footer-email" className="sr-only">
                  Email Address
                </label>
                <div className="flex gap-2">
                  <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email Address"
                    aria-invalid={Boolean(error)}
                    className="w-full rounded border border-gray-600 bg-gray-800 px-3 py-2 text-xs text-white placeholder:text-gray-500 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded bg-brand px-3 py-2 text-xs font-bold text-white transition-colors hover:bg-brand-dark"
                  >
                    →
                  </button>
                </div>
                {error ? (
                  <p role="alert" className="mt-1 text-xs text-red-400">
                    {error}
                  </p>
                ) : null}
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Skyline Restaurant. All rights reserved. More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-brand transition-colors hover:text-white"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
