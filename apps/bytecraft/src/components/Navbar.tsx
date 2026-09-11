import { useState } from 'react'
import { Search } from 'lucide-react'
import { BrandIcon } from './BrandIcon'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Team', href: '#team' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-dark text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#home" className="font-display text-xl font-bold tracking-wide">
          Byte<span className="text-brand">Craft</span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-light text-gray-300 transition hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle search"
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-gray-300 transition hover:text-brand"
          >
            <Search size={18} />
          </button>
          <div className="hidden items-center gap-2 md:flex">
            <a href="#" aria-label="Facebook" className="text-gray-400 transition hover:text-brand">
              <BrandIcon name="facebook" />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-400 transition hover:text-brand">
              <BrandIcon name="twitter" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 transition hover:text-brand">
              <BrandIcon name="linkedin" />
            </a>
          </div>
          <button
            type="button"
            aria-label="Toggle mobile menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-gray-300 md:hidden"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <div className="border-t border-gray-700 bg-dark px-4 py-3">
          <input
            type="search"
            placeholder="Search..."
            aria-label="Search"
            className="w-full rounded-full border border-gray-600 bg-gray-800 px-4 py-2 text-sm text-white placeholder-gray-400 focus:border-brand focus:outline-none"
          />
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-gray-700 bg-dark px-4 pb-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 text-sm text-gray-300 transition hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
