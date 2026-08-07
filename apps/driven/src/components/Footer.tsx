import { useState } from 'react'
import type { FormEvent } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { SocialLinks } from './SocialLinks'

const importantLinks = [
  { label: 'Search Domain', href: '#home' },
  { label: 'My Account', href: '#pricing' },
  { label: 'Shopping Cart', href: '#pricing' },
  { label: 'Our Shop', href: '#features' },
  { label: 'Support', href: '#contact' },
] as const

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer id="contact" className="bg-gray-900 text-gray-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <a
            href="#home"
            className="font-display text-2xl font-bold tracking-wide text-primary-400"
          >
            Driven
          </a>
          <h2 className="mt-5 text-sm font-semibold uppercase tracking-wider text-white">
            About Us
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            Heaven fruitful doesn't over lesser days appear creeping seasons so behold bearing days
            open.
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
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <span>Your address goes here, your demo address. Bangladesh.</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <a href="tel:+888044338899" className="transition-colors hover:text-primary-400">
                +8880 44338899
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <a href="mailto:info@driven.dev" className="transition-colors hover:text-primary-400">
                info@driven.dev
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            Important Link
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {importantLinks.map((link) => (
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
            Heaven fruitful doesn't over lesser in days. Appear creeping seasons deve behold bearing
            days open.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email Address"
              className="w-full min-w-0 rounded-md border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-400 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6 text-center text-sm">
        © {new Date().getFullYear()} Driven. All rights reserved.
      </div>
    </footer>
  )
}
