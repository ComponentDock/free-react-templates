import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react'

const quickLinks = ['About Us', 'Services', 'Shop', 'News', 'Contact']
const serviceLinks = [
  'Locksmith',
  'Safes & Locks',
  'Access Control',
  'Security Doors',
  'Alarm System',
]

export function Footer() {
  return (
    <footer className="bg-ink pt-16 text-white" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h4 className="mb-4 font-display text-lg font-bold">About KeyForge</h4>
            <p className="mb-4 text-sm text-white/70">
              Professional locksmith and security services. Trusted by thousands of customers for
              reliable protection solutions.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg font-bold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/70 transition-colors hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg font-bold">Our Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/70 transition-colors hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg font-bold">Contact Us</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>123 Security Ave, Suite 100, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0" aria-hidden="true" />
                <a href="tel:1234567890" className="transition-colors hover:text-brand">
                  +1 123-456-7890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" aria-hidden="true" />
                <a href="mailto:info@keyforge.com" className="transition-colors hover:text-brand">
                  info@keyforge.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-white/70">
          <p>
            &copy; {new Date().getFullYear()} All rights reserved | More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand underline transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>

      <a
        href="#"
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-colors hover:bg-brand-dark"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  )
}
