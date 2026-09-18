import { Mail } from 'lucide-react'

const quickLinks = ['Home', 'About', 'Services', 'Doctors', 'Pricing', 'Blog']
const serviceLinks = ['General Dentistry', 'Cosmetic Dentistry', 'Orthodontics', 'Teeth Whitening']

export function Footer() {
  return (
    <footer className="bg-footer-bg text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-white">Smilecraft</h3>
            <p className="mt-3 text-sm leading-relaxed">
              Providing exceptional dental care with a personal touch. Our experienced team combines
              modern technology with compassionate treatment to give you the perfect smile.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick Links">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Services</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#services" className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Newsletter</h4>
            <p className="mt-3 text-sm">Subscribe for the latest dental tips and news.</p>
            <div className="mt-3 flex gap-2">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your email"
                className="w-full rounded bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none"
              />
              <button
                type="button"
                className="shrink-0 rounded bg-primary-300 p-2 text-white hover:bg-primary-400"
                aria-label="Subscribe to newsletter"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs sm:flex-row sm:px-6 lg:px-8">
          <p>&copy; 2026 Smilecraft. All rights reserved.</p>
          <p>
            Powered by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
