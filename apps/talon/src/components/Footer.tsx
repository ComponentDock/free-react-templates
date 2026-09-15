import { Mail, MapPin, Phone } from 'lucide-react'
import { SocialBar } from './SocialBar'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Elements', href: '#elements' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

const supportLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'FAQ', href: '#' },
  { label: 'Help Center', href: '#' },
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <a href="#home" className="font-display text-2xl font-bold tracking-wide text-white">
            Talon<span className="text-primary-400">.</span>
          </a>
          <p className="mt-5 text-sm leading-relaxed">
            Heaven fruitful doesn't over lesser days appear creeping seasons so behold bearing days
            open.
          </p>
          <div className="mt-6">
            <SocialBar />
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-primary-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Support</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {supportLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-primary-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contact Info
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <span>Your address goes here, your demo address.</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <a href="tel:+88801234567" className="transition-colors hover:text-primary-400">
                +888 012 345 67
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <a href="mailto:info@talon.dev" className="transition-colors hover:text-primary-400">
                info@talon.dev
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6 text-center text-sm">
        © {new Date().getFullYear()} Talon. All rights reserved. Made with{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noreferrer"
          className="text-primary-400 transition-colors hover:text-primary-300"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
