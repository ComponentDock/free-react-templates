import { Phone, Mail, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = ['Home', 'About', 'Properties', 'Gallery', 'Blog', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm" role="banner">
      {/* Top info bar */}
      <div className="border-b border-gray-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <svg
              className="h-8 w-8 text-brand"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
            <span className="font-display text-xl font-bold text-ink">Tidestone</span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <div className="flex items-center gap-2 text-sm text-mist">
              <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
              <div>
                <p className="leading-tight">Have any question?</p>
                <p className="font-medium text-ink">Free: +12 365 5233</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-mist">
              <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
              <div>
                <p className="leading-tight">Have any question?</p>
                <p className="font-medium text-ink">Free: +12 365 5233</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <nav
        className="border-b border-gray-100 bg-white"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                    link === 'Home' ? 'text-brand' : 'text-ink hover:text-brand'
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-ink"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <ul className="absolute left-0 right-0 top-full z-50 bg-white px-4 py-4 shadow-lg md:hidden">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="block py-2 text-sm font-medium uppercase text-ink hover:text-brand"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  )
}
