import { Mail, MapPin, Phone } from 'lucide-react'
import { SocialLinks } from './SocialLinks'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
] as const

const supportLinks = [
  { label: 'FAQ', href: '#faq' },
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms of Service', href: '#terms' },
  { label: 'Help Center', href: '#help' },
] as const

const featureLinks = [
  { label: 'Link Building', href: '#services' },
  { label: 'Content Marketing', href: '#services' },
  { label: 'On Page SEO', href: '#services' },
  { label: 'Analytics', href: '#services' },
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-footer-bg text-gray-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <a href="#home" className="font-display text-2xl font-bold tracking-wide text-accent-400">
            RankForge
          </a>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
              <span>123 Street, New York, NY 10001</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
              <a href="tel:+1234567890" className="transition-colors hover:text-accent-400">
                +1 234 567 890
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
              <a
                href="mailto:info@rankforge.com"
                className="transition-colors hover:text-accent-400"
              >
                info@rankforge.com
              </a>
            </li>
          </ul>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-accent-400">
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
                <a href={link.href} className="transition-colors hover:text-accent-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            Core Features
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {featureLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-accent-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6 text-center text-sm">
        © {new Date().getFullYear()} RankForge. All rights reserved.{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noreferrer"
          className="text-accent-400 transition-colors hover:text-accent-500"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
