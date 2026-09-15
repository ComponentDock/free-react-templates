import { useState, type FormEvent } from 'react'
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react'
import { BrandIcon } from './BrandIcon'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

const quickLinks = [
  'About us',
  'Contact',
  'Donation',
  'Blog',
  'Sermons',
  'Events',
  'Service',
  'Media',
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
    <footer
      className="relative bg-cover bg-center bg-fixed text-white"
      style={{ backgroundImage: "url('https://picsum.photos/seed/gracecraft-footer/1200/500')" }}
    >
      <div className="absolute inset-0 bg-ink/80" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Contact column */}
          <div>
            <a href="#home" className="font-heading text-xl font-bold text-white">
              Grace<span className="text-brand">craft</span>
            </a>
            <ul className="mt-6 space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>1195 Lobortis Rd, New Orleans, New Hampshire</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                +1 234 800 8080
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                infogracecraft@gmail.com
              </li>
            </ul>
          </div>

          {/* Useful links */}
          <div>
            <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-brand">
              Useful links
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-gray-300">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <ChevronRight className="h-4 w-4 text-brand" aria-hidden="true" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-brand">
              Subscribe
            </h3>
            <p className="mt-5 text-sm text-gray-300">
              Join our weekly email newsletter to receive news, events and other announcements about
              what is going on at our church.
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
                    placeholder="Enter your email"
                    aria-invalid={Boolean(error)}
                    className="flex-1 rounded bg-gray-800 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded bg-brand px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
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

      {/* Copyright row */}
      <div className="relative z-10 border-t border-gray-700">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-5 sm:flex-row">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Gracecraft. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:text-brand-dark"
            >
              Component Dock
            </a>
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <BrandIcon name="facebook" className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <BrandIcon name="twitter" className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <BrandIcon name="linkedin" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
