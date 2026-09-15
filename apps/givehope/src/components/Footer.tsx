import { useState } from 'react'
import type { FormEvent } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

const FacebookIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
)

const TwitterIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const InstagramIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer id="contact" className="bg-navy text-gray-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        <div>
          <a
            href="#home"
            className="font-display text-2xl font-bold tracking-wide text-primary-400"
          >
            GiveHope
          </a>
          <p className="mt-4 text-sm leading-relaxed">
            Heaven fruitful lesser days appear creeping seasons so behold bearing days open. We are
            committed to making a difference in communities around the world.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Contact Us</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <span>123 Charity Lane, Hope City, HC 12345</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <a href="tel:+18005551234" className="transition-colors hover:text-primary-400">
                +1 (800) 555-1234
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <a
                href="mailto:info@givehope.org"
                className="transition-colors hover:text-primary-400"
              >
                info@givehope.org
              </a>
            </li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 transition-colors hover:text-primary-400"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 transition-colors hover:text-primary-400"
            >
              <TwitterIcon />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 transition-colors hover:text-primary-400"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Newsletter</h2>
          <p className="mt-4 text-sm leading-relaxed">
            Subscribe to our newsletter and stay updated on our latest campaigns and impact stories.
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
              className="w-full min-w-0 rounded border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded bg-primary-400 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6 text-center text-sm">
        © {new Date().getFullYear()} GiveHope. Made with{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-400 transition-colors hover:text-primary-300"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
