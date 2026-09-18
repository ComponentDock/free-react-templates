import { useState, useCallback } from 'react'
import { MapPin, Menu, X, User, Plus } from 'lucide-react'

const navLinks = ['Home', 'Listing', 'Categories', 'Blog', 'Shop']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggle = useCallback(() => setMobileOpen((v) => !v), [])

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-1.5 text-primary font-bold text-xl">
            <MapPin className="w-6 h-6" />
            LocalFinder
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-ink text-sm font-medium hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
            <a
              href="#"
              className="inline-flex items-center gap-1.5 bg-dark text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-ink transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add Listing
            </a>
            <button
              aria-label="User account"
              className="text-muted hover:text-ink transition-colors"
            >
              <User className="w-5 h-5" />
            </button>
          </nav>

          {/* Mobile toggle */}
          <button aria-label="Toggle navigation" onClick={toggle} className="md:hidden text-ink">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-line">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="block py-2 text-ink text-sm font-medium hover:text-primary"
              >
                {link}
              </a>
            ))}
            <a
              href="#"
              className="mt-2 inline-flex items-center gap-1.5 bg-dark text-white text-sm font-semibold px-4 py-2 rounded-full"
            >
              <Plus className="w-4 h-4" />
              Add Listing
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
