import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

const quickLinks = ['Home', 'About', 'Services', 'Projects', 'Contact'] as const
const serviceLinks = [
  'Industrial Construction',
  'Mechanical Engineering',
  'Bridge Construction',
  'Project Management',
  'Consulting',
]

const socials = [
  {
    label: 'Facebook',
    href: '#',
    path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  },
  {
    label: 'Twitter',
    href: '#',
    path: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z',
  },
  {
    label: 'LinkedIn',
    href: '#',
    path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z',
  },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubscribed(true)
  }

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand + description */}
          <div className="md:col-span-1">
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded bg-brand font-display text-lg font-bold text-white">
                I
              </span>
              <span className="font-display text-xl font-bold uppercase tracking-wide">
                Industrix
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Delivering innovative industrial solutions with quality and precision. Your trusted
              partner for construction and engineering projects.
            </p>
            <div className="mt-4 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded border border-gray-600 text-gray-400 transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-brand">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-brand">
              Our Services
            </h3>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((svc) => (
                <li key={svc}>
                  <a
                    href="#services"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-brand">
              Newsletter
            </h3>
            <p className="mt-4 text-sm text-gray-400">
              Subscribe to get updates on our latest projects and services.
            </p>
            {subscribed ? (
              <p className="mt-4 rounded border border-brand/40 bg-brand/10 px-4 py-3 text-sm text-brand">
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} noValidate className="mt-4">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <div className="flex gap-2">
                  <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    aria-invalid={Boolean(error)}
                    className="w-full rounded border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="flex shrink-0 items-center justify-center rounded bg-brand px-4 text-white transition-colors hover:bg-brand-dark"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                {error && (
                  <p role="alert" className="mt-2 text-xs text-red-400">
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Copyright + Component Dock link */}
      <div className="border-t border-gray-700">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 sm:flex-row sm:px-6">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Industrix. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand hover:text-brand-light transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
