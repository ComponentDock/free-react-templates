import { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'

const navLinks = ['Home', 'Gallery', 'Services', 'About', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a href="#" className="text-xl font-semibold text-text-primary">
          LensVault
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-text-secondary transition-colors hover:text-brand"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            className="text-text-secondary transition-colors hover:text-brand"
          >
            <Search className="h-5 w-5" />
          </button>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle navigation"
            className="text-text-secondary md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <ul className="border-t border-border bg-white px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block py-2 text-sm font-medium text-text-secondary transition-colors hover:text-brand"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
