import { MapPin, Phone, Mail } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Works', href: '#works' },
  { label: 'News', href: '#news' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { label: 'Facebook', href: '#facebook', icon: 'F' },
  { label: 'Twitter', href: '#twitter', icon: 'X' },
  { label: 'LinkedIn', href: '#linkedin', icon: 'in' },
  { label: 'Instagram', href: '#instagram', icon: 'IG' },
]

export function Footer() {
  return (
    <footer className="bg-dark text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-white">Rivet</h3>
            <p className="leading-relaxed text-gray-400">
              Trusted construction and development company delivering exceptional results since
              1889.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 shrink-0 text-brand" size={18} />
                <span>123 Construction Ave, Builder City, BC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-brand" size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0 text-brand" size={18} />
                <span>info@rivet.com</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 transition-colors hover:text-brand">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-light text-sm font-bold text-white transition-colors hover:bg-brand"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-gray-600">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row lg:px-8">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Rivet. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
