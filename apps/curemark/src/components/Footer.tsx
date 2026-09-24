import { Phone, Mail, MapPin } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface FooterProps {
  className?: string
}

const usefulLinks = ['Home', 'About', 'Departments', 'Contact', 'FAQ', 'Testimonials']

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('bg-gray-900 text-gray-300', className)} role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Curemark</h3>
            <p className="text-sm leading-relaxed mb-4">
              We are dedicated to providing high-quality medical services with compassion and
              excellence. Our team of experienced professionals ensures the best care for every
              patient.
            </p>
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Curemark. Built by{' '}
              <a
                href="https://www.componentdock.com/"
                className="underline hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Component Dock
              </a>
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>123 Medical Center Drive, Health City, HC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0" aria-hidden="true" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 234 567 890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0" aria-hidden="true" />
                <a href="mailto:info@curemark.com" className="hover:text-white transition-colors">
                  info@curemark.com
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              {usefulLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-xs text-gray-500">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="underline hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
