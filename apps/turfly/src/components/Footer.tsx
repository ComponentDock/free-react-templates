import { MapPin, Phone, Mail, Send } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { SocialLinks } from './SocialLinks'

const serviceLinks = [
  'Garden Care',
  'Lawn Mowing',
  'Lawn Treatment',
  'Gutter Cleaning',
  'New Lawn Installation',
] as const

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer id="contact" className="bg-charcoal text-gray-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {/* Brand column */}
        <div>
          <a href="#home" className="text-xl font-bold tracking-wide text-white">
            Turfly
          </a>
          <p className="mt-4 text-sm leading-relaxed">
            Professional lawn care and landscaping services you can trust. Keeping your outdoor
            spaces beautiful all year round.
          </p>
          <div className="mt-5">
            <SocialLinks />
          </div>
        </div>

        {/* Services column */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {serviceLinks.map((service) => (
              <li key={service}>
                <a href="#services" className="transition-colors hover:text-primary-400">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contact Information
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <span>123 Greenway Blvd, Lawnville, CA 90210</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <a href="tel:+18005551234" className="transition-colors hover:text-primary-400">
                (800) 555-1234
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <a href="mailto:info@turfly.com" className="transition-colors hover:text-primary-400">
                info@turfly.com
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter column */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Newsletter</h3>
          <p className="mt-4 text-sm leading-relaxed">
            Subscribe for seasonal lawn care tips and exclusive offers.
          </p>
          <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
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
              className="min-w-0 rounded border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30"
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

      <div className="border-t border-gray-700">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm sm:flex-row sm:px-6">
          <p>&copy; {new Date().getFullYear()} Turfly. All rights reserved.</p>
          <p>
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-semibold text-primary-400 transition-colors hover:text-primary-300"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
