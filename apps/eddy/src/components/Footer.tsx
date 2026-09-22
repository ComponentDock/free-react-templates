import { useState } from 'react'
import type { FormEvent } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer id="contact" className="bg-charcoal text-gray-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <h2 className="font-heading text-lg font-semibold text-white">Address</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>123 Beach Road, Oceanview, Paradise Island</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <a href="tel:+1800123456" className="transition-colors hover:text-brand">
                +1 (800) 123-456
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <a href="mailto:info@eddy-resort.com" className="transition-colors hover:text-brand">
                info@eddy-resort.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-lg font-semibold text-white">Reservations</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#rooms" className="transition-colors hover:text-brand">
                Room Types
              </a>
            </li>
            <li>
              <a href="#booking" className="transition-colors hover:text-brand">
                Check Availability
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-brand">
                Special Offers
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-brand">
                Group Bookings
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-lg font-semibold text-white">Newsletter</h2>
          <p className="mt-4 text-sm leading-relaxed">
            Subscribe to our newsletter for exclusive deals and updates.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email Address"
              className="w-full min-w-0 rounded border border-gray-600 bg-charcoal px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-400"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Subscribe
            </button>
          </form>
        </div>

        <div>
          <h2 className="font-heading text-lg font-semibold text-white">Follow Us</h2>
          <p className="mt-4 text-sm leading-relaxed">
            Stay connected with us on social media for the latest updates and offers.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 text-gray-300 transition-colors hover:bg-brand hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 text-gray-300 transition-colors hover:bg-brand hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 text-gray-300 transition-colors hover:bg-brand hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
          <p className="mt-6 text-sm">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-brand transition-colors hover:text-orange-400"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-gray-600 py-6 text-center text-sm">
        © {new Date().getFullYear()} Eddy. All rights reserved.
      </div>
    </footer>
  )
}
