import { Mail, MapPin, Phone } from 'lucide-react'

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Destination', href: '#destination' },
  { label: 'Tour Packages', href: '#tour' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

const destinations = [
  { label: 'Philippines', href: '#destination' },
  { label: 'Canada', href: '#destination' },
  { label: 'Thailand', href: '#destination' },
  { label: 'Australia', href: '#destination' },
  { label: 'Greece', href: '#destination' },
] as const

const support = [
  { label: 'FAQ', href: '#contact' },
  { label: 'Privacy Policy', href: '#contact' },
  { label: 'Terms & Conditions', href: '#contact' },
  { label: 'Cancellation Policy', href: '#contact' },
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-footer-bg text-gray-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <a href="#home" className="text-2xl font-bold text-white">
            Tidal
          </a>
          <p className="mt-4 text-sm leading-relaxed">
            Heaven fruitful doesn&apos;t over lesser days appear creeping seasons so behold bearing
            days open.
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
              <span>123 Travel Street, Adventure City</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
              <a href="tel:+888044338899" className="transition-colors hover:text-brand">
                +8880 44338899
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
              <a href="mailto:info@tidal.dev" className="transition-colors hover:text-brand">
                info@tidal.dev
              </a>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-brand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            Destinations
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {destinations.map((dest) => (
              <li key={dest.label}>
                <a href={dest.href} className="transition-colors hover:text-brand">
                  {dest.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Support</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {support.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="transition-colors hover:text-brand">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 py-6 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Tidal. All rights reserved. Powered by{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-brand transition-colors hover:text-brand-dark"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
