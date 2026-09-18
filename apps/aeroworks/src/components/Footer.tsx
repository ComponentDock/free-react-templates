import { Phone, Mail, MapPin } from 'lucide-react'
import { BrandIcon } from './BrandIcon'

const infoLinks = ['Purchase', 'Payment', 'Shipping', 'Return']

const brands = ['Toyota', 'Honda', 'BMW', 'Mercedes', 'Ford', 'Audi']

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Contact Us Now!</h3>
            <div className="space-y-4 text-sm text-gray-400">
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-white">
                <Phone size={16} />
                <span>+1 (234) 567-890</span>
              </a>
              <a
                href="mailto:info@aeroworks.com"
                className="flex items-center gap-2 hover:text-white"
              >
                <Mail size={16} />
                <span>info@aeroworks.com</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>123 Car Street, Auto City, AC 12345</span>
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="mb-6 text-lg font-bold">About</h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-400">
              Your trusted partner for car rentals and purchases. Quality vehicles, competitive
              prices, and exceptional service.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
                <BrandIcon name="facebook" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white">
                <BrandIcon name="x" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white">
                <BrandIcon name="instagram" />
              </a>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Information</h3>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Brands row */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-gray-500">
            Top Brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {brands.map((brand) => (
              <span key={brand} className="text-sm font-semibold text-gray-500">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright + Component Dock */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-4 text-center text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} AeroWorks. All rights reserved. |{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-gray-400 underline transition-colors hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              More templates at Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
