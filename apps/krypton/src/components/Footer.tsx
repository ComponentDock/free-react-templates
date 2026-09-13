import { useState } from 'react'
import type { FormEvent } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { SocialLinks } from './SocialLinks'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <a
            href="#home"
            className="font-display text-2xl font-bold tracking-wide text-primary-500"
          >
            Krypton
          </a>
          <p className="mt-4 text-sm leading-relaxed">
            A full-service digital agency delivering creative solutions for ambitious brands.
          </p>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contact Info
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" aria-hidden="true" />
              <span>123 Innovation Drive, San Francisco, CA</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary-500" aria-hidden="true" />
              <a href="tel:+14155551234" className="transition-colors hover:text-primary-400">
                +1 (415) 555-1234
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary-500" aria-hidden="true" />
              <a
                href="mailto:hello@krypton.agency"
                className="transition-colors hover:text-primary-400"
              >
                hello@krypton.agency
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-primary-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Newsletter</h2>
          <p className="mt-4 text-sm leading-relaxed">
            Subscribe to get updates on our latest projects and industry insights.
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
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full min-w-0 rounded-md border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Krypton. All rights reserved. More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-primary-400 transition-colors hover:text-primary-300"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
