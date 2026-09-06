import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Terms', href: '#terms' },
  { label: 'Disclaimers', href: '#disclaimers' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinIcon },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About Us */}
          <div>
            <h3 className="mb-4 text-lg font-bold uppercase tracking-wide text-white">About Us</h3>
            <p className="text-sm text-gray-400">
              Dine is a premium restaurant offering exquisite cuisine crafted with the freshest
              ingredients. Our passion for food drives everything we do.
            </p>
            <ul className="mt-4 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="mb-4 text-lg font-bold uppercase tracking-wide text-white">
              Opening Hours
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                Mon - Fri: 11:00 AM - 10:00 PM
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                Saturday: 10:00 AM - 11:00 PM
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                Sunday: 12:00 PM - 9:00 PM
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold uppercase tracking-wide text-white">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                123 Main St, Food City, FC 12345
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                (+1) 234 567 890
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                dine@example.com
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold uppercase tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Dine. Made with{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
