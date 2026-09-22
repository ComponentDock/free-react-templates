import { MapPin, Phone, Mail, Home } from 'lucide-react'

const services = [
  'Skylights',
  'Waterproofing',
  'Industrial Roofing',
  'Residential Roofing',
  'Gutter Cleaning',
  'Commercial Roofing',
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <Home className="h-5 w-5 text-brand" aria-hidden="true" />
              <span className="text-lg font-semibold">Shingle</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Professional roofing services you can trust. Quality workmanship, reliable service,
              and competitive prices for every project.
            </p>
            <div className="mt-4 flex gap-3">
              {(['Twitter', 'Facebook', 'Instagram'] as const).map((name) => (
                <a
                  key={name}
                  href="#"
                  aria-label={name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-600 text-gray-400 transition-colors hover:border-brand hover:text-white"
                >
                  {name[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand">Services</h3>
            <ul className="mt-4 space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand">
              Business Hours
            </h3>
            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <div>
                <p className="font-medium text-white">Opening Days</p>
                <p>Monday – Friday: 9am to 8pm</p>
                <p>Saturday: 9am to 5pm</p>
              </div>
              <div>
                <p className="font-medium text-white">Vacations</p>
                <p>All Sundays</p>
                <p>All Official Holidays</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand">
              Contact Information
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                203 Fake St. Mountain View, San Francisco, CA
              </li>
              <li>
                <a
                  href="tel:+13923929210"
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  +1 392 3929 210
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@shingle.com"
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  info@shingle.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Shingle Roofing. All rights reserved. More templates at{' '}
        <a
          href="https://www.componentdock.com/"
          className="text-brand transition-colors hover:text-brand-dark"
          target="_blank"
          rel="noopener noreferrer"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
