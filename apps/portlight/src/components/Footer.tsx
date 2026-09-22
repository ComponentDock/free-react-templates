import { cn } from '@free-react-templates/ui'
import { MapPin, Phone, Mail } from 'lucide-react'

const USEFUL_LINKS = ['Amenities', 'Gift Card', 'About Us', 'Blog'] as const
const PRIVACY_LINKS = ['Career', 'Contact Us', 'Services', 'Privacy Policy'] as const

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      id="contact"
      className={cn('relative bg-gray-900 bg-cover bg-center py-16 text-white', className)}
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/portlight-footer-bg/1920/600)',
      }}
    >
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-xl font-bold">
              Port<span className="text-brand">light</span>
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Useful Links</h4>
            <ul className="space-y-2">
              {USEFUL_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 transition-colors hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Privacy */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Privacy</h4>
            <ul className="space-y-2">
              {PRIVACY_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 transition-colors hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Have a Questions?
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="h-4 w-4 flex-shrink-0 text-brand" />
                +2 392 3929 210
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="h-4 w-4 flex-shrink-0 text-brand" />
                info@yourdomain.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand transition-colors hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
