import { useState } from 'react'
import { Menu, X, ShoppingCart, Search } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Project', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-50 bg-white shadow-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-flex items-center bg-brand-500 px-4 py-2 text-lg font-bold text-white">
            Trowel
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm font-semibold uppercase tracking-wide text-gray-700 transition-colors hover:text-brand-500"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Icons + mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Shopping cart"
            className="hidden text-gray-600 transition-colors hover:text-brand-500 md:inline-flex"
          >
            <ShoppingCart size={20} />
          </button>
          <button
            type="button"
            aria-label="Search"
            className="hidden text-gray-600 transition-colors hover:text-brand-500 md:inline-flex"
          >
            <Search size={20} />
          </button>
          <button
            type="button"
            className="inline-flex items-center md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="block py-2 text-sm font-medium uppercase text-gray-700 hover:text-brand-500"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
