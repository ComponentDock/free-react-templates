import { useState } from 'react'
import { Search, User, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Shop', href: '#', hasDropdown: true },
  { label: 'Categories', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#" className="text-xl font-bold text-primary-500">
          Shopbox
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 text-sm font-medium text-gray-600 transition hover:text-primary-500"
            >
              {link.label}
              {link.hasDropdown && <ChevronDown className="h-3 w-3" />}
            </a>
          ))}
        </nav>

        {/* Utility icons */}
        <div className="flex items-center gap-3">
          <button aria-label="Search" className="text-gray-500 transition hover:text-primary-500">
            <Search className="h-5 w-5" />
          </button>
          <button aria-label="Account" className="text-gray-500 transition hover:text-primary-500">
            <User className="h-5 w-5" />
          </button>
          <button
            aria-label="Cart with 3 items"
            className="relative text-gray-500 transition hover:text-primary-500"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">
              3
            </span>
          </button>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            className="text-gray-500 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <nav
          className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2 text-sm font-medium text-gray-600 transition hover:text-primary-500"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
