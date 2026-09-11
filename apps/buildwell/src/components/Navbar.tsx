import { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'

const navLinks = ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'] as const

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="relative z-50">
      {/* Top info bar */}
      <div className="bg-brand text-white text-xs">
        <div className="mx-auto flex max-w-6xl items-center justify-end gap-6 px-4 py-2 sm:px-6">
          <span className="flex items-center gap-1">
            <span aria-hidden="true">📍</span> 1673 Marietta Street
          </span>
          <span className="flex items-center gap-1">
            <span aria-hidden="true">📞</span> 120 875 4578
          </span>
          <span className="flex items-center gap-1">
            <span aria-hidden="true">✉️</span> company@support.com
          </span>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-white shadow-sm transition-colors dark:bg-gray-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#home" className="text-xl font-bold text-brand">
            BuildWell<span className="text-accent">.</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-medium text-heading transition-colors hover:text-accent"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Search"
              className="hidden text-body transition-colors hover:text-accent md:block"
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className="text-body transition-colors hover:text-accent md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <ul className="border-t border-muted bg-white px-4 py-4 dark:bg-gray-900 md:hidden">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block py-2 text-sm font-medium text-heading transition-colors hover:text-accent"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
