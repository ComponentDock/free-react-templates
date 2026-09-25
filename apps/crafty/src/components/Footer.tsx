import { useState } from 'react'
import type { FormEvent } from 'react'

const footerLinks = [
  { label: 'Managed Website', href: '#' },
  { label: 'Manage Reputation', href: '#' },
  { label: 'Power Tools', href: '#' },
  { label: 'Marketing Service', href: '#' },
] as const

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    icon: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  },
  {
    label: 'Twitter',
    href: '#',
    icon: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z',
  },
  {
    label: 'Dribbble',
    href: '#',
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.6 5.24a8.47 8.47 0 0 1 1.87 5.2c-.27-.05-2.97-.6-5.7-.26.12-.27.23-.54.34-.82 2.14-.08 4.13-.9 4.49-4.12zM12 3.56c2.28 0 4.35.87 5.9 2.3-.3 2.88-1.94 3.7-3.93 3.85-.53-1.07-1.14-2.12-1.84-3.1A8.5 8.5 0 0 1 12 3.56zM8.17 4.37c.72.97 1.34 2.03 1.86 3.1-2.58.64-4.84.56-5.12.56a8.44 8.44 0 0 1 3.26-3.66zM3.56 12v-.44c.28.01 2.95.08 5.82-.66.16.32.32.64.46.97-2.82.79-5.2 2.67-5.54 2.94A8.48 8.48 0 0 1 3.56 12zm4.24 6.14c.22-.23 2.24-2 4.8-2.76.02.01.04.03.06.04a34.5 34.5 0 0 1-1.48 4.72 8.46 8.46 0 0 1-3.38-2zm7.32 1.46a35.4 35.4 0 0 0 1.37-4.48c2.52.3 4.74.18 5.03.15a8.48 8.48 0 0 1-6.4 4.33z',
  },
  {
    label: 'Behance',
    href: '#',
    icon: 'M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z',
  },
] as const

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <h6 className="text-sm font-semibold uppercase tracking-wider text-white">
            About Agency
          </h6>
          <ul className="mt-4 space-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-primary-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h6 className="text-sm font-semibold uppercase tracking-wider text-white">Newsletter</h6>
          <p className="mt-4 text-sm">
            You can trust us. We only send promo offers, not a single spam.
          </p>
          <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="min-w-0 flex-1 rounded border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-1 rounded bg-primary-400 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
            >
              Get Started
            </button>
          </form>
        </div>

        <div>
          <h6 className="text-sm font-semibold uppercase tracking-wider text-white">Gallery</h6>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {Array.from({ length: 8 }, (_, i) => (
              <img
                key={i}
                src={`https://picsum.photos/seed/crafty-gal-${i}/80/80`}
                alt={`Gallery image ${i + 1}`}
                className="h-14 w-14 rounded object-cover"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        <div>
          <h6 className="text-sm font-semibold uppercase tracking-wider text-white">Follow Us</h6>
          <div className="mt-4 flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-primary-400 hover:text-white"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6 text-center text-sm">
        <p>
          Copyright &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
          <span className="text-primary-400">♥</span> by{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-400 transition-colors hover:underline"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
