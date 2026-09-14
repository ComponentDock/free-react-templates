import { Car, Phone, Mail, Clock, MapPin } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const quickLinks = ['Home', 'About', 'Services', 'Pricing', 'Contact'] as const

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Twitter', name: 'twitter' },
  { label: 'Facebook', name: 'facebook' },
  { label: 'Pinterest', name: 'pinterest' },
]

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Column 1: Logo + contact */}
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white">
                <Car className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-heading text-lg font-bold">Car Wash</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Premium car wash and detailing services. Your vehicle deserves the best care and
              attention.
            </p>
            <div className="mt-4 space-y-2 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                +1 555 123 4567
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                info@sudsywash.com
              </p>
            </div>
          </div>

          {/* Column 2: Opening Hours */}
          <div>
            <h3 className="font-heading text-base font-bold uppercase tracking-wide text-white">
              Opening Hours
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <p>Mon - Fri</p>
                  <p className="text-white">8:00 AM - 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <p>Saturday</p>
                  <p className="text-white">9:00 AM - 4:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <p>Sunday</p>
                  <p className="text-white">Closed</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h3 className="font-heading text-base font-bold uppercase tracking-wide text-white">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social + Address */}
          <div>
            <h3 className="font-heading text-base font-bold uppercase tracking-wide text-white">
              Follow Us
            </h3>
            <div className="mt-4 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#home"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 text-gray-400 transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="mt-6 flex items-start gap-2 text-sm text-gray-400">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>123 Wash Street, Clean City, CA 90210</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright + Component Dock link */}
      <div className="border-t border-gray-800 py-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-center text-sm text-gray-500 sm:flex-row sm:px-6">
          <p>&copy; {new Date().getFullYear()} Sudsy Car Wash. All rights reserved.</p>
          <p>
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
