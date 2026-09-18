import { Mail, MapPin, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
] as const

const socialLinks = [
  { label: 'Facebook', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
] as const

export function Footer() {
  return (
    <footer className="bg-ink text-gray-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <a href="#home" className="text-2xl font-bold tracking-wide text-white">
            Mortar.
          </a>
          <h2 className="mt-5 text-sm font-semibold uppercase tracking-wider text-white">
            About Us
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            We are a creative agency passionate about crafting digital experiences that make a
            lasting impact.
          </p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-primary-400 hover:text-primary-400"
              >
                <span className="sr-only">{link.label}</span>
                <span className="text-xs font-bold">{link.label[0]}</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contact Info
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <span>123 Creative Street, Design District, NY 10001</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <a href="tel:+15551234567" className="transition-colors hover:text-primary-400">
                +1 (555) 123-4567
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <a
                href="mailto:hello@mortar.studio"
                className="transition-colors hover:text-primary-400"
              >
                hello@mortar.studio
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
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
            Studio Hours
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Monday — Friday: 9:00 AM — 6:00 PM</li>
            <li>Saturday: 10:00 AM — 4:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Mortar. All rights reserved. Made with{' '}
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
