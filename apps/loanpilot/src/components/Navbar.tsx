import { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'

const navLinks = ['Home', 'About', 'Services', 'Blog', 'Pages', 'Contact'] as const

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm" role="navigation" aria-label="Primary">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-navy">
          Loan<span className="text-primary">pilot</span>.
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={`text-sm font-semibold transition-colors ${
                    link === 'Home' ? 'text-primary' : 'text-body-text hover:text-primary'
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <button type="button" className="text-navy hover:text-primary" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="text-navy md:hidden"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      <div
        id="mobile-menu"
        className={`border-t border-gray-100 md:hidden ${mobileOpen ? 'block' : 'hidden'}`}
      >
        <ul className="space-y-1 px-4 pb-4">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="block rounded px-2 py-2 text-sm font-semibold text-body-text hover:bg-primary/10 hover:text-primary"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
