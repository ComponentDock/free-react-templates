import { Building2 } from 'lucide-react'
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from './social-icons'

const socials = [
  { label: 'Facebook', icon: FacebookIcon },
  { label: 'Instagram', icon: InstagramIcon },
  { label: 'LinkedIn', icon: LinkedinIcon },
  { label: 'YouTube', icon: YoutubeIcon },
] as const

const quickLinks = [
  { label: 'Properties', href: '#properties' },
  { label: 'Agents', href: '#agents' },
  { label: 'About', href: '#why-choose' },
  { label: 'Contact', href: '#contact' },
  { label: 'Properties for Sale', href: '#properties' },
  { label: 'Properties for Rent', href: '#properties' },
] as const

const neighborhoods = [
  'Manhattan',
  'Brooklyn',
  'Queens',
  'The Hamptons',
  'Westchester',
  'Greenwich',
] as const

const legalLinks = ['Privacy Policy', 'Terms of Service', 'Fair Housing'] as const

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + socials */}
          <div>
            <a href="#home" className="flex items-center gap-2" aria-label="Keyhaven home">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-white">
                <Building2 className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="font-serif text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Keyhaven
              </span>
            </a>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Find your dream home with our curated selection of luxury properties and expert
              guidance.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="rounded-lg bg-gray-200 p-2.5 text-gray-600 transition-colors hover:bg-primary-600 hover:text-white dark:bg-gray-800 dark:text-gray-400"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Neighborhoods */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              Neighborhoods
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {neighborhoods.map((neighborhood) => (
                <li key={neighborhood}>
                  <a
                    href="#"
                    className="text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400"
                  >
                    {neighborhood}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              Contact Us
            </h4>
            <address className="mt-4 space-y-3 text-sm not-italic text-gray-600 dark:text-gray-400">
              <div>100 Park Avenue, Suite 500</div>
              <div>New York, NY 10017</div>
              <div>
                <a href="tel:+15552345678" className="transition-colors hover:text-primary-600">
                  (555) 234-5678
                </a>
              </div>
              <div>
                <a
                  href="mailto:info@keyhaven.example"
                  className="transition-colors hover:text-primary-600"
                >
                  info@keyhaven.example
                </a>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 py-6 dark:border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row lg:px-8">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2026 Keyhaven. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
