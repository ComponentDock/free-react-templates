import { useState } from 'react'
import { Menu, X, Search, Heart, ShoppingBag } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Shop', href: '#shop' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-wide text-bloom-400"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Bloomfield
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-semibold uppercase tracking-widest text-gray-700 transition-colors hover:text-bloom-400"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className="hidden text-gray-600 transition-colors hover:text-bloom-400 md:block"
          >
            <Search className="h-5 w-5" />
          </button>
          <a
            href="#wishlist"
            aria-label="Wishlist (5 items)"
            className="hidden text-gray-600 transition-colors hover:text-bloom-400 md:block"
          >
            <Heart className="h-5 w-5" />
          </a>
          <a
            href="#cart"
            aria-label="Cart (1 item)"
            className="hidden text-gray-600 transition-colors hover:text-bloom-400 md:block"
          >
            <ShoppingBag className="h-5 w-5" />
          </a>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            className="text-gray-600 md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden"
          aria-label="Mobile navigation"
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="block py-3 text-sm font-semibold uppercase tracking-widest text-gray-700 transition-colors hover:text-bloom-400"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
