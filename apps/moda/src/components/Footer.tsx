import { useState, type FormEvent } from 'react'
import { ShoppingBag } from 'lucide-react'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const columns = [
  {
    heading: 'Shop',
    links: ['Clothing', 'Accessories', 'Footwear', 'Bags', 'Jewelry', 'Sale'],
  },
  {
    heading: 'Help',
    links: ['FAQ', 'Shipping & Returns', 'Size Guide', 'Contact Us', 'Track Order'],
  },
  {
    heading: 'About',
    links: ['Our Story', 'Sustainability', 'Careers', 'Press'],
  },
] as const

const paymentChips = ['VISA', 'AMEX', 'Mastercard'] as const

export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_RE.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError(null)
    setSubscribed(true)
  }

  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        {/* Mini newsletter */}
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-950 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">
              Join Our Newsletter
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Get 15% off your first order and stay updated on new arrivals.
            </p>
            {error && (
              <p role="alert" className="mt-2 text-sm text-red-500">
                {error}
              </p>
            )}
            {subscribed && (
              <p
                role="status"
                className="mt-2 text-sm font-medium text-emerald-600 dark:text-emerald-400"
              >
                Thanks for subscribing!
              </p>
            )}
          </div>
          {!subscribed && (
            <form
              onSubmit={handleSubmit}
              className="flex w-full max-w-sm flex-col gap-3 sm:flex-row"
              noValidate
            >
              <label htmlFor="footer-email" className="sr-only">
                Footer email address
              </label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                aria-invalid={error ? true : undefined}
                className="h-11 flex-1 rounded-lg border border-gray-300 bg-white px-4 text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/40 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />
              <button
                type="submit"
                className="h-11 rounded-lg bg-primary-600 px-6 font-semibold text-white transition-colors hover:bg-primary-700"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

        {/* Brand + link columns */}
        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2" aria-label="Moda home">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-600 text-white">
                <ShoppingBag className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Moda
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-gray-600 dark:text-gray-400">
              Discover curated collections of premium fashion, accessories, and lifestyle products.
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.heading}>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 dark:border-gray-800 sm:flex-row">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; 2026 Moda. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-gray-500 transition-colors hover:text-primary-600 dark:text-gray-400"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 transition-colors hover:text-primary-600 dark:text-gray-400"
            >
              Terms
            </a>
          </div>
          <div className="flex items-center gap-2">
            {paymentChips.map((chip) => (
              <span
                key={chip}
                className="rounded-md border border-gray-300 px-2.5 py-1 text-xs font-bold text-gray-600 dark:border-gray-700 dark:text-gray-300"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
