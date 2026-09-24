import { useState } from 'react'
import { Phone, MapPin, Menu, X } from 'lucide-react'

const navLinks = ['Home', 'Doctors', 'Services', 'Departments', 'Blog', 'Contact'] as const

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="relative z-50">
      {/* Top bar */}
      <div className="bg-dark">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-8">
          <div className="flex items-center gap-6 text-xs text-mute-500">
            <div className="flex items-center gap-1.5">
              <Phone className="h-3 w-3 text-blue-400" aria-hidden="true" />
              <span>+1 (800) 254-9876</span>
            </div>
            <div className="hidden items-center gap-1.5 sm:flex">
              <MapPin className="h-3 w-3 text-blue-400" aria-hidden="true" />
              <span>123 Health Avenue, Medical City</span>
            </div>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <a href="#fb" className="text-mute-500 hover:text-white" aria-label="Facebook">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#tw" className="text-mute-500 hover:text-white" aria-label="Twitter">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a href="#li" className="text-mute-500 hover:text-white" aria-label="LinkedIn">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className="sticky top-0 border-b border-gray-100 bg-white shadow-sm"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          <a href="#home" className="text-2xl font-bold text-ink-900">
            Cure<span className="text-blue-400">Nova</span>
          </a>
          <ul className="hidden gap-8 text-sm font-semibold tracking-wide text-ink-700 md:flex">
            {navLinks.map((link, i) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={`transition-colors hover:text-blue-400 ${i === 0 ? 'text-blue-400' : ''}`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="text-ink-900 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
            <ul className="space-y-3 pt-3 text-sm font-semibold text-ink-700">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="block py-1 transition-colors hover:text-blue-400"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
