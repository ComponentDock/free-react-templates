import { MapPin, Phone, Mail } from 'lucide-react'

const navLinks = [
  { label: 'Supplements', href: '#products' },
  { label: 'Vitamins', href: '#products' },
  { label: 'Diet & Nutrition', href: '#products' },
  { label: 'Tea & Coffee', href: '#products' },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-ink py-16 text-white" data-testid="footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-bold">About Remedy</h3>
            <p className="text-sm leading-relaxed text-white/70">
              Remedy is your trusted online pharmacy offering quality supplements, vitamins, and
              wellness products. We are committed to helping you live a healthier life.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin size={18} className="mt-0.5 shrink-0 text-brand" />
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Phone size={18} className="shrink-0 text-brand" />
                +1 234 567 8900
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Mail size={18} className="shrink-0 text-brand" />
                hello@remedy.com
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>
            &copy; {new Date().getFullYear()} Remedy. All rights reserved. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
