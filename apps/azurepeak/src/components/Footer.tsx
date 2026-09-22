import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { FacebookIcon, TwitterIcon, InstagramIcon } from './social-icons'

const quickLinks = [
  { label: 'Rooms & Suites', href: '#rooms' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Dining', href: '#dining' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

const socials = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand & description */}
          <div>
            <a href="#" className="font-display text-2xl font-bold text-blue-400">
              AzurePeak
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              A luxury hotel and resort experience where elegance meets tranquility. Discover
              world-class hospitality on pristine coastlines.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
                <span>123 Azure Coast Drive, Malibu, CA 90265</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
                <span>+1 (310) 555-0199</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
                <span>reservations@azurepeak.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Clock className="h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
                <span>24/7 Front Desk</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Connect with Us
            </h3>
            <ul className="flex items-center gap-4">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-blue-800"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 sm:flex-row sm:px-6">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} AzurePeak. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline transition-colors hover:text-blue-300"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
