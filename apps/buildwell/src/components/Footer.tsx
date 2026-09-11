import { useState, type FormEvent } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

const quickLinks = ['Home', 'About', 'Services', 'Portfolio', 'Blog'] as const

const socials = [
  { label: 'Facebook', icon: 'f' },
  { label: 'Twitter', icon: '𝕏' },
  { label: 'LinkedIn', icon: 'in' },
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
    <footer className="bg-brand text-white transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand + contact */}
          <div>
            <a href="#home" className="text-xl font-bold">
              BuildWell<span className="text-accent">.</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              1673 Marietta Street, Suite 100 — we bring your construction vision to life with
              certified experience and modern technology.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                120 875 4578
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                company@support.com
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                1673 Marietta Street, Suite 100
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-600 text-xs font-bold text-gray-400 transition-colors hover:border-accent hover:bg-accent hover:text-brand"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-accent">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-accent">Keep in Touch</h3>
            <p className="mt-5 text-sm text-gray-400">Subscribe to our newsletter for updates</p>
            {subscribed ? (
              <p className="mt-4 rounded border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-accent">
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} noValidate className="mt-4">
                <label htmlFor="footer-email" className="block text-sm font-medium text-gray-300">
                  Your Email Address
                </label>
                <div className="mt-2 flex gap-2">
                  <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="jane@example.com"
                    aria-invalid={Boolean(error)}
                    className="w-full border border-gray-600 bg-gray-800 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                  <button
                    type="submit"
                    className="shrink-0 bg-accent px-5 py-3 text-sm font-bold text-brand transition-colors hover:bg-accent-dark"
                  >
                    Subscribe
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

      {/* Bottom footer with Component Dock link */}
      <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} BuildWell. All rights reserved. | More templates at{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent transition-colors hover:text-accent-dark"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
