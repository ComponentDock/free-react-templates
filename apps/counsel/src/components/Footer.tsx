import { Phone, Mail, MapPin, Globe } from 'lucide-react'
import { BrandIcon } from './BrandIcon'

const services = [
  'Family Law',
  'Business Law',
  'Criminal Law',
  'Real Estate Law',
  'Personal Injury',
]

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Column 1: Logo + Description + Socials */}
          <div>
            <a href="#home" className="font-display text-xl font-bold uppercase tracking-[0.2em]">
              Counsel<span className="text-brand">.</span>
            </a>
            <p className="mt-6 text-sm leading-relaxed text-gray-400">
              Providing exceptional legal services with integrity and dedication. Your trusted
              partner in navigating complex legal matters.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-600 text-gray-400 transition-colors hover:border-brand hover:bg-brand hover:text-white"
              >
                <BrandIcon name="facebook" className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-600 text-gray-400 transition-colors hover:border-brand hover:bg-brand hover:text-white"
              >
                <BrandIcon name="twitter" className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-600 text-gray-400 transition-colors hover:border-brand hover:bg-brand hover:text-white"
              >
                <BrandIcon name="instagram" className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Our Service */}
          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-brand">
              Our Service
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="transition-colors hover:text-white">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-brand">
              Contact Info
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                info@counsel.com
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                123 Legal Avenue, Suite 500, New York, NY 10001
              </li>
              <li className="flex items-center gap-3">
                <Globe className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                www.counsel.com
              </li>
            </ul>
          </div>

          {/* Column 4: Component Dock */}
          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-brand">
              More Templates
            </h3>
            <p className="mt-5 text-sm text-gray-400">
              More templates at{' '}
              <a
                href="https://www.componentdock.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand transition-colors hover:text-brand-light"
              >
                Component Dock
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Counsel Law Firm. All rights reserved.
      </div>
    </footer>
  )
}
