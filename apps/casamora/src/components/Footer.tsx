import { cn } from '@free-react-templates/ui'

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('bg-footer-bg py-12 text-white', className)}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h4 className="mb-4 text-sm font-medium uppercase tracking-wider">Useful Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#about" className="transition-colors hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Help
                </a>
              </li>
              <li>
                <a href="#rooms" className="transition-colors hover:text-white">
                  Rooms
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-medium uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Location
                </a>
              </li>
              <li>
                <a href="#rooms" className="transition-colors hover:text-white">
                  Rooms &amp; Suites
                </a>
              </li>
              <li>
                <a href="#about" className="transition-colors hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Restaurant
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-medium uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-brand">📍</span>
                <span>4321 New York, NY 10012</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-brand">📞</span>
                <a href="tel:+11234567890" className="transition-colors hover:text-white">
                  +1 123 456 7890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-brand">✉️</span>
                <a href="mailto:info@casamora.com" className="transition-colors hover:text-white">
                  info@casamora.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-medium uppercase tracking-wider">Newsletter</h4>
            <p className="mb-4 text-sm text-white/70">
              Subscribe to receive updates and special offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-l-full bg-white/10 px-4 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-brand"
              />
              <button
                type="button"
                className="rounded-r-full bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-6 md:flex-row">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Casamora. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-white/50">
              More templates at{' '}
              <a
                href="https://www.componentdock.com/"
                className="underline transition-colors hover:text-white"
              >
                Component Dock
              </a>
            </p>
            <div className="flex gap-2">
              <span className="text-white/50 transition-colors hover:text-white">📘</span>
              <span className="text-white/50 transition-colors hover:text-white">🐦</span>
              <span className="text-white/50 transition-colors hover:text-white">📸</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
