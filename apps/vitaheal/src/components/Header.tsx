import { useState } from 'react'
import { Search, Phone, Menu, X } from 'lucide-react'

const quickLinks = ['Help Desk', 'Emergency Services', 'Appointment'] as const
const navLinks = ['Home', 'About Us', 'Services', 'News', 'Contact'] as const

/** Header: top bar with logo + quick links + phone, sticky nav with main links + search. */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="relative z-50">
      {/* Top bar */}
      <div className="bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          <a href="#home" className="text-2xl font-bold text-ink-900">
            vitaheal<span className="text-teal-400">+</span>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <nav aria-label="Quick links">
              <ul className="flex gap-5 text-sm font-medium text-mute-600">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a href="#info" className="transition-colors hover:text-teal-400">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center gap-2 text-sm font-medium text-mute-600">
              <Phone className="h-4 w-4 text-teal-400" aria-hidden="true" />
              <span>+34 586 778 8892</span>
            </div>
          </div>
          <button
            className="text-ink-900 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className="sticky top-0 border-b border-gray-100 bg-white shadow-sm"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          <ul className="hidden gap-8 text-sm font-semibold tracking-wide text-ink-700 md:flex">
            {navLinks.map((link, i) => (
              <li key={link}>
                <a
                  href={i === 0 ? '#home' : `#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`transition-colors hover:text-teal-400 ${
                    i === 0 ? 'text-teal-400' : ''
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="ml-auto text-mute-600 transition-colors hover:text-teal-400"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
            <ul className="space-y-3 pt-3 text-sm font-semibold text-ink-700">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block py-1 transition-colors hover:text-teal-400"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-2 text-sm text-mute-600">
              <Phone className="h-4 w-4 text-teal-400" aria-hidden="true" />
              <span>+34 586 778 8892</span>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
